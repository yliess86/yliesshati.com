import { FaFileArchive, FaMapMarker, FaUserFriends, FaLink } from "react-icons/fa";
import Image from "next/image";

import { IPublication } from "../data/PublicationData";
import Card from "../elements/Card";
import ExternalLink from "../elements/ExternalLink";

export default function Awards ({ publications }: { publications: IPublication[] }) {
  const elements = publications.map((publication, index) =>
    <Card key={index} className="flex flex-col gap-2">
      <div className="border border-black overflow-hidden rounded-sm w-full h-64 md:h-96">
        <Image className="object-cover w-full h-full" alt={`cover ${publication.title}`} src={publication.cover} width={256} height={256} />
      </div>
      <h3 className="font-bold text-xl">{publication.title}</h3>
      <h4 className="flex items-center"><FaMapMarker className="inline mr-1" />{publication.conference} - {publication.year}</h4>
      <h4 className="flex items-center flex-wrap gap-2"><FaUserFriends className="inline mr-1" />{publication.authors.map((author, index) => <span key={index}>{author.name} {author.surname}</span>)}</h4>
      <ExternalLink href={`https://doi.org/${publication.doi}`}><h4 className="flex items-center md:mb-4"><FaLink className="inline mr-1" />{publication.doi}</h4></ExternalLink>
      <p>{publication.abstract}</p>
    </Card>
  );

  return (
    <section id="publications" className="flex flex-col gap-8">
      <div className="flex items-center justify-center font-bold text-2xl"><h2>Academic Publications</h2><FaFileArchive className="inline ml-2" /></div>
      <div className="grid grid-cols-1 gap-4">
        {elements}
      </div>
    </section>
  );
};