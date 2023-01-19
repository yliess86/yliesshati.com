import fs from "fs";
import matter from "gray-matter";

interface IPostMetadata {
  title: string,
  date: string;
  cover: string;
  min: number;
  type: string;
  tags: string[];
  abstract: string;
}

export interface IPostInfos {
  slug: string;
  metadata: IPostMetadata;
};

export interface IPost {
  infos: IPostInfos;
  content: string;
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
  }
}

function getPostContent(file: Buffer): string {
  return matter(file).content;
}

function parseDate(date: string): number {
  const [day, month, year] = date.split("/");
  return Date.parse(`${year}-${month}-${day}`);
}

export function getPosts(last?: number): IPostInfos[] {
  return fs.readdirSync("content/posts")
           .map(path => { return { slug: path.replace(".md", ""), metadata: getPostMetadata(fs.readFileSync(`content/posts/${path}`)) }; })
           .sort((a, b) => parseDate(b.metadata.date) - parseDate(a.metadata.date))
           .slice(0, last);
};

export function getPost(slug: string): IPost {
  const file = fs.readFileSync(`content/posts/${slug}.md`);
  return {
    infos: { slug: slug, metadata: getPostMetadata(file) },
    content: getPostContent(file),
  }
};