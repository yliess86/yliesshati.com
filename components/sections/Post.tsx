import { FaCalendarDay, FaClock } from "react-icons/fa";
import Image from "next/image";
import { marked } from "marked";

import { IPost } from "../data/PostData";

import Card from "../../components/elements/Card";
import Badge from "../../components/elements/Badge";

export default function Post ({ post }: { post: IPost }) {
  return (
    <section className="flex flex-col gap-4 md:gap-6">
      <Card className="flex flex-col text-left gap-6">
        <div className="flex justify-between text-sm md:text-base">
          <Badge name={post.infos.metadata.type} />
          <div><FaCalendarDay className="inline mr-1" />{ post.infos.metadata.date }</div>
          <div><FaClock className="inline mr-1"/>{post.infos.metadata.min} min</div>
        </div>
        <div className="border border-black rounded-sm overflow-hidden w-full h-48 sm:h-96 mx-auto">
          <Image className="object-cover w-full h-full" alt={post.infos.metadata.title} src={post.infos.metadata.cover} width={256} height={256} />
        </div>
        <h1 className="font-black text-2xl md:text-4xl text-center">{ post.infos.metadata.title }</h1>
      </Card>
      <article dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
    </section>
  );
};