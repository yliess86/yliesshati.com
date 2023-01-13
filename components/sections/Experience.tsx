import { FaCircle, FaMapMarker, FaUserTie } from "react-icons/fa";

import { IExperience } from "../data/ExperienceData";
import Card from "../elements/Card";

export default function Experiences ({ experiences }: { experiences: IExperience[] }) {
  const elements = experiences.map((experience, index) =>
    <div key={index} className="flex flex-col md:grid md:grid-cols-12">
      <div className="hidden md:block col-span-3 text-right">{experience.start} - {experience.end}</div>
      <div className="hidden md:block col-span-1 mx-auto border-l border-black relative">
        <FaCircle className="absolute left-[-0.65rem] text-xl" />
      </div>
      <Card className="col-span-8 md:mb-4">
        <h4 className="font-bold text-sm uppercase mb-4">{experience.pos}</h4>
        <h3 className="font-bold text-xl">{experience.compagny}</h3>
        <h4 className="flex items-center md:mb-4 text-sm md:text-base"><FaMapMarker className="inline mr-1" />{experience.loc}</h4>
        <div className="block md:hidden mb-4 text-sm md:text-base"><FaCircle className="inline mr-1" />{experience.start} - {experience.end}</div>
        <ul className="list-disc list-inside">
          {experience.desc.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </Card>
    </div>
  );

  return (
    <section id="experience" className="flex flex-col gap-8">
      <div className="flex items-center justify-center font-bold text-2xl"><h2>Professional Experience</h2><FaUserTie className="inline ml-2" /></div>
      <div className="grid grid-cols-1 gap-4 md:gap-0">
        {elements}
      </div>
    </section>
  );
};