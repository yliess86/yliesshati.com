import Link from "next/link";
import ExternalLink from "./elements/ExternalLink";

export default function Footer() {
  return (
    <footer className="text-center">
      <h3>Developed by <Link href="/"><span className="font-bold">Yliess Hati</span></Link> and Powered by <ExternalLink href="https://nextjs.org/"><span className="font-bold">NextJS</span></ExternalLink></h3>
    </footer>
  );
};