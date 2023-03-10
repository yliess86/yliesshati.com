import fs from "fs";
import matter from "gray-matter";

import { ITOC, getTOC } from "./TocData";

interface IPostMetadata {
  title: string,
  date: string;
  cover: string;
  min: number;
  type: string;
  tags: string[];
  abstract: string;
  public: boolean;
}

export interface IPostInfos {
  slug: string;
  metadata: IPostMetadata;
};

export interface IPost {
  infos: IPostInfos;
  content: string;
  toc: ITOC;
};

function getPostMetadata(file: Buffer): IPostMetadata {
  const metadata = matter(file).data;
  return {
    title: metadata.title,
    date: metadata.date,
    cover: metadata.cover,
    min: metadata.min,
    type: metadata.type,
    tags: metadata.tags,
    abstract: metadata.abstract,
    public: metadata.public,
  }
}

export function getPosts(last?: number): IPostInfos[] {
  return fs
    .readdirSync("content/posts")
    .map(path => { return { slug: path.replace(".md", ""), metadata: getPostMetadata(fs.readFileSync(`content/posts/${path}`)) }; })
    .filter(p => p.metadata.public)
    .sort((a, b) => parseInt(b.slug.split("-")[0]) - parseInt(a.slug.split("-")[0]))
    .slice(0, last);
};

export function getPost(slug: string): IPost {
  const file = fs.readFileSync(`content/posts/${slug}.md`);
  const content = matter(file).content;
  return {
    infos: { slug: slug, metadata: getPostMetadata(file) },
    content: content,
    toc: getTOC(content), 
  }
};