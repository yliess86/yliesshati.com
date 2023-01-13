import Head from "next/head";
import { InferGetStaticPropsType, GetStaticProps } from "next";

import Educations from "../components/sections/Education";
import { getEducations, IEducation } from "../components/data/EducationData";

import Awards from "../components/sections/Award";
import { getAwards, IAward } from "../components/data/AwardData";

import Teachings from "../components/sections/Teaching";
import { getTeachings, ITeaching } from "../components/data/TeachingData";

import Skills from "../components/sections/Skill";
import { getSkills, ISkill } from "../components/data/SkillData";

import Experiences from "../components/sections/Experience";
import { getExperiences, IExperience } from "../components/data/ExperienceData";

import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import Nav from "../components/Nav";

export default function Home (props: InferGetStaticPropsType<GetStaticProps>) {
  return (
    <>
      <Head>
        <title>Yliess Hati</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="font-poppins p-4 scroll-smooth">
        <div className="mx-auto flex flex-col gap-8 md:gap-16 max-w-7xl">
          <Nav />
          <div className="flex flex-col gap-8 md:gap-16">
            <Hero />
            <Experiences experiences={props.experiences} />
            <Skills skills={props.skills} />
            <Teachings teachings={props.teachings} />
            <Awards awards={props.awards} />
            <Educations educations={props.educations} />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<{ experiences: IExperience[], skills:ISkill[], teachings: ITeaching[], awards: IAward[], educations: IEducation[] }> = async () => {
  return { props: { experiences: getExperiences(), skills: getSkills(), teachings: getTeachings(), awards: getAwards(), educations: getEducations() } };
};