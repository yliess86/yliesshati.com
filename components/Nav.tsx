import Link from "next/link";
import { FaArrowUp } from "react-icons/fa"

export default function Nav() {
  return (
    <nav className="flex flex-col md:flex-row md:align-middle items-center md:items-start md:justify-between gap-4">
      <Link href="/">
        <h3 className="font-bold">Yliess Hati</h3>
      </Link>
      <div className="flex flex-wrap justify-center md:justify-start md:flex-row gap-4 text-sm">
        <Link href="/#experience" scroll={false}>Experience</Link>
        <Link href="/#skills" scroll={false}>Skills</Link>
        <Link href="/#teaching" scroll={false}>Teaching</Link>
        <Link href="/#awards" scroll={false}>Awards</Link>
        <Link href="/#education" scroll={false}>Education</Link>
      </div>
      <Link href="/" className="fixed bottom-6 right-6">
        <div className="rounded-full w-10 h-10 bg-black"><FaArrowUp className="text-white m-auto h-10" /></div>
      </Link>
    </nav>
  );
};