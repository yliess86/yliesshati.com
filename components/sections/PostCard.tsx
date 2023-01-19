import { FaCalendarDay, FaClock } from "react-icons/fa";
import Link from "next/link";

import { IPostInfos } from "../data/PostData";
import Image from "next/image";

import Card from "../elements/Card";
import Badge from "../elements/Badge";

export default function PostCard ({ infos }: { infos: IPostInfos }) {
  return (
    <Link href={`/blog/${infos.slug}`}>
      <Card className="flex flex-col md:flex-row md:text-left gap-6">
        <div className="border border-black rounded-sm overflow-hidden w-full md:w-64 h-48 sm:h-96 md:h-auto mx-auto">
          <Image className="object-cover w-full h-full" alt={infos.metadata.title} src={infos.metadata.cover} width={256} height={256} />
        </div>
        <div className="flex flex-col justify-between flex-1 gap-4">
          <div>
            <h3 className="font-bold text-xl">{ infos.metadata.title }</h3>
            <div className="flex items-center text-sm md:text-base"><FaCalendarDay className="inline mr-1" />{ infos.metadata.date }</div>
          </div>
          <p>{`${infos.metadata.abstract.slice(0, Math.min(140, infos.metadata.abstract.length))}...`}</p>
          <div className="flex justify-between">
            <Badge name={infos.metadata.type} />
            <div className="flex items-center text-sm md:text-base"><FaClock className="inline mr-1"/>{infos.metadata.min} min</div>
          </div>
        </div>
      </Card>
    </Link>
  );
};