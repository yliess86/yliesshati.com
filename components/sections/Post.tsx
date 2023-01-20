import Image from "next/image";
import Link from "next/link";

import { marked } from "marked";
import { FaCalendarDay, FaClock } from "react-icons/fa";

import { IPost } from "../data/PostData";
import TOCEntry from "../../components/elements/TocEntry"

import Card from "../../components/elements/Card";
import Badge from "../../components/elements/Badge";

export default function Post ({ post }: { post: IPost }) {
  return (
    <section className="flex flex-col gap-4 md:gap-6">
      <Card className="flex flex-col text-left gap-6">
        <div className="border border-black rounded-sm overflow-hidden w-full h-48 sm:h-96 mx-auto">
          <Image className="object-cover w-full h-full" alt={post.infos.metadata.title} src={post.infos.metadata.cover} width={256} height={256} />
        </div>
        <h1 className="font-black text-2xl md:text-4xl text-center">{ post.infos.metadata.title }</h1>
        <div className="flex justify-between text-sm md:text-base">
          <Badge name={post.infos.metadata.type} />
          <div className="flex flex-row gap-2">
            <div className="flex items-center"><FaCalendarDay className="inline mr-1" />{ post.infos.metadata.date }</div>
            <div className="flex items-center"><FaClock className="inline mr-1"/>{post.infos.metadata.min} min</div>
          </div>
        </div>
      </Card>
      <div className="prose lg:prose-xl mx-auto w-full mb-4">
        <p>
          <h2>Table of Content</h2>
          {post.toc.entries.map((entry, index) => <TOCEntry key={index} entry={entry}/>)}
        </p>
      </div>
      <article className="prose lg:prose-xl mx-auto w-full" dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
    </section>
  );
};