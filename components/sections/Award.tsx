import { FaAward, FaMedal, FaUserFriends } from "react-icons/fa";

import { IAward } from "../data/AwardData";
import Card from "../elements/Card";

export default function Awards ({ awards }: { awards: IAward[] }) {
  const elements = awards.map((award, index) =>
    <Card key={index} className="flex flex-col gap-2">
      <h3 className="font-bold text-xl">{award.name}</h3>
      <h4 className="flex items-center"><FaUserFriends className="inline mr-1" />{award.orga}</h4>
      <h4 className="flex items-center md:mb-4"><FaMedal className="inline mr-1" />{award.rank} Place</h4>
      <p>{award.desc}</p>
    </Card>
  );

  return (
    <section id="awards" className="flex flex-col gap-8">
      <div className="flex items-center justify-center font-bold text-2xl"><h2>Academic Awards</h2><FaAward className="inline ml-2" /></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {elements}
      </div>
    </section>
  );
};