import Link from "next/link";
import { FaArrowUp } from "react-icons/fa"
import { useRouter } from "next/router";

export default function Nav() {
  return (
    <nav className="flex flex-col md:flex-row md:align-middle items-center md:items-start md:justify-between gap-4 w-full">
      <Link href="/">
        <h3 className="font-bold">Yliess Hati</h3>
      </Link>
      <div className="flex flex-wrap justify-center md:justify-start md:flex-row gap-4 text-sm">
        <Link href="/blog" scroll={false}>Blog</Link>
        <Link href="/#experience" scroll={false}>Experience</Link>
        <Link href="/#skills" scroll={false}>Skills</Link>
        <Link href="/#teaching" scroll={false}>Teaching</Link>
        <Link href="/#publications" scroll={false}>Publications</Link>
        <Link href="/#awards" scroll={false}>Awards</Link>
        <Link href="/#education" scroll={false}>Education</Link>
      </div>
      <Link href={useRouter().asPath.split("#")[0]} className="fixed bottom-6 right-6 z-50">
        <div className="rounded-full w-10 h-10 bg-black"><FaArrowUp className="text-white m-auto h-10" /></div>
      </Link>
    </nav>
  );
};