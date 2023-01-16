import { FaToolbox } from "react-icons/fa";

import { ISkill } from "../data/SkillData";
import Card from "../elements/Card";
import Badge from "../elements/Badge";

export default function Skills ({ skills }: { skills: ISkill[] }) {
  const elements = skills.map((skill, index) =>
    <div key={index} className="flex flex-col md:grid md:grid-cols-10 gap-4">
      <Card className={`flex flex-col md:col-span-6 gap-2 ${index % 2 == 0 ? "md:order-first" : "md:order-last" }`}>
        <h3 className="font-bold text-xl">{skill.domain}</h3>
        <p>{skill.desc}</p>
      </Card>
      <div className={`flex flex-wrap justify-start content-start md:col-span-4 gap-4 ${index % 2 == 0 ? "md:order-last" : "md:order-first" }`}>
        {skill.items.map((item, index) => <Badge key={index} name={item} />)}
      </div>
    </div>
  );

  return (
    <section id="skills" className="flex flex-col gap-8">
      <div className="flex items-center justify-center font-bold text-2xl"><h2>Technical Skills</h2><FaToolbox className="inline ml-2" /></div>
      <div className="grid grid-cols-1 gap-4">
        {elements}
      </div>
    </section>
  );
};