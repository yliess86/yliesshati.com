import { FaCircle, FaMapMarker, FaGraduationCap } from "react-icons/fa";

import { IEducation } from "../data/EducationData";
import Card from "../elements/Card";

export default function Educations ({ educations }: { educations: IEducation[] }) {
  const elements = educations.map((education, index) =>
      <div key={index} className="flex flex-col md:grid md:grid-cols-12">
        <div className="hidden md:block col-span-3 text-right">{education.start} - {education.end}</div>
        <div className="hidden md:block col-span-1 mx-auto border-l border-black relative">
          <FaCircle className="absolute left-[-0.65rem] text-xl" />
        </div>
        <Card className="col-span-8 md:mb-4">
          <h4 className="font-bold text-sm uppercase mb-4">{education.track}</h4>
          <h3 className="font-bold text-xl">{education.school}</h3>
          <h4 className="flex items-center md:mb-4 text-sm md:text-base"><FaMapMarker className="inline mr-1" />{education.loc}</h4>
          <div className="block md:hidden mb-4 text-sm md:text-base"><FaCircle className="inline mr-1" />{education.start} - {education.end}</div>
          <p>{education.desc}</p>
        </Card>
      </div>
  );

  return (
    <section id="education" className="flex flex-col gap-8">
      <div className="flex items-center justify-center font-bold text-2xl"><h2>Education</h2><FaGraduationCap className="inline ml-2" /></div>
      <div className="grid grid-cols-1 gap-4 md:gap-0">
        {elements}
      </div>
    </section>
  );
};