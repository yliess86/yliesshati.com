import Link from "next/link";

import { ITOCEntry } from "../data/TocData";

export default function TOCEntry ({ entry }: { entry: ITOCEntry }) {
  const margin = (entry.level - 2);
  const inner = `${entry.prefix}. ${entry.title}`;
  return (
    <div className="flex flex-row gap-2">
      {Array.from(" ".repeat(margin)).map(() => {return <div className="block w-2" />;})}
      <Link href={`#${entry.id}`}>{inner}</Link>
    </div>
  );
};