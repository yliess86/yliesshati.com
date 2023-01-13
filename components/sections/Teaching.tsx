import { FaCircle, FaMapMarker, FaSchool, FaChalkboardTeacher } from "react-icons/fa";

import { ITeaching } from "../data/TeachingData";
import Card from "../elements/Card";

export default function Teachings ({ teachings }: { teachings: ITeaching[] }) {
  const elements = teachings.map((teaching, index) =>
    <div key={index} className="flex flex-col md:grid md:grid-cols-12">
      <div className="hidden md:block col-span-3 text-right">{teaching.start} - {teaching.end}</div>
      <div className="hidden md:block col-span-1 mx-auto border-l border-black relative">
        <FaCircle className="absolute left-[-0.65rem] text-xl" />
      </div>
      <Card className="col-span-8 md:mb-4">
        <h4 className="font-bold text-sm uppercase mb-4">{teaching.pos}</h4>
        <h3 className="font-bold text-xl">{teaching.course}</h3>
        <h4 className="flex items-center text-sm md:text-base"><FaSchool className="inline mr-1" />{teaching.school}</h4>
        <h4 className="flex items-center md:mb-4 text-sm md:text-base"><FaMapMarker className="inline mr-1" />{teaching.loc}</h4>
        <div className="block md:hidden mb-4 text-sm md:text-base"><FaCircle className="inline mr-1" />{teaching.start} - {teaching.end}</div>
        <p>{teaching.desc}</p>
      </Card>
    </div>
  );

  return (
    <section id="teaching" className="flex flex-col gap-8">
      <div className="flex items-center justify-center font-bold text-2xl"><h2>Teaching</h2><FaChalkboardTeacher className="inline ml-2" /></div>
      <div className="grid grid-cols-1 gap-4 md:gap-0">
        {elements}
      </div>
    </section>
  );
};