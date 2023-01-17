import Image from "next/image";
import ExternalLink from "../elements/ExternalLink"

import { FaGithub, FaTwitter, FaLinkedin, FaCalendarCheck, FaMapMarker } from "react-icons/fa"

export default function Hero() {
  return (
    <header className="flex flex-col justify-center md:flex-row text-center md:text-left gap-6 border border-black rounded-md p-6">
      <div className="border border-black rounded-sm overflow-hidden w-full h-auto md:w-64 md:h-64 mx-auto">
        <Image className="object-cover w-full h-full" alt="photo" src="/images/photo.webp" width={256} height={256} />
      </div>
      <div className="flex flex-col justify-between flex-1 gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-black text-4xl">Yliess Hati</h1>
          <h4 className="font-bold uppercase">Generalist Engineer, Ph.D. Student in Deep Learning, Electronics Enthousiast</h4>
          <div className="flex flex-row gap-2 justify-center md:justify-start font-bold text-sm">
            <div className="flex items-center"><FaCalendarCheck className="inline mr-1"/>04/12/1996</div>
            <div className="flex items-center"><FaMapMarker className="inline mr-1"/>France</div>
          </div>
          <p className="md:w-96">I like to create interactive experiences powered by deep neural nets!</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bottom-0">
          <div className="flex flex-row gap-4 text-4xl"><ExternalLink href="https://github.com/yliess86"><FaGithub /></ExternalLink><ExternalLink href="https://twitter.com/HatiYliess"><FaTwitter /></ExternalLink><ExternalLink href="https://www.linkedin.com/in/yliess-hati/"><FaLinkedin /></ExternalLink></div>
          <button className="px-4 py-2 bg-black text-white rounded-sm">Available to Hire</button>
        </div>
      </div>
    </header>
  );
};