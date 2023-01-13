import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

export default function Hero() {
  return (
    <header className="flex flex-col md:flex-row text-center md:text-left gap-6 border border-black rounded-md p-6">
      <div className="border border-black rounded-sm overflow-hidden">
        <Image className="object-cover w-full h-full" alt="photo" src="/images/photo.webp" width={256} height={256} />
      </div>
      <div className="flex flex-col justify-between gap-4 w-full">
        <div className="flex flex-col gap-2">
          <h1 className="font-black text-4xl">Yliess Hati</h1>
          <h4 className="font-bold uppercase">General Engineer, Ph.D. Student</h4>
          <p className="md:w-96">I like to create interactive experiences powered by deep neural nets!</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bottom-0">
          <div className="flex flex-row gap-4 text-4xl"><FaGithub /><FaTwitter /><FaLinkedin /></div>
          <button className="px-4 py-2 bg-black text-white rounded-sm">Available to Hire</button>
        </div>
      </div>
    </header>
  );
};