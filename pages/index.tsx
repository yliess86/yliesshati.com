import Head from "next/head";
import { InferGetStaticPropsType, GetStaticProps } from "next";

import Educations from "../components/sections/Education";
import { getEducations, IEducation } from "../components/data/EducationData";

import Awards from "../components/sections/Award";
import { getAwards, IAward } from "../components/data/AwardData";

import Publications from "../components/sections/Publication";
import { getPublications, IPublication } from "../components/data/PublicationData";

import Teachings from "../components/sections/Teaching";
import { getTeachings, ITeaching } from "../components/data/TeachingData";

import Skills from "../components/sections/Skill";
import { getSkills, ISkill } from "../components/data/SkillData";

import Experiences from "../components/sections/Experience";
import { getExperiences, IExperience } from "../components/data/ExperienceData";

import Layout from "../components/Layout";
import Hero from "../components/sections/Hero";

export default function Home (props: InferGetStaticPropsType<GetStaticProps>) {
  return (
    <Layout>
      <Hero />
      <Experiences experiences={props.experiences} />
      <Skills skills={props.skills} />
      <Teachings teachings={props.teachings} />
      <Publications publications={props.publications} />
      <Awards awards={props.awards} />
      <Educations educations={props.educations} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{
  experiences: IExperience[],
  skills:ISkill[],
  teachings: ITeaching[],
  publications: IPublication[],
  awards: IAward[],
  educations: IEducation[]
}> = async () => {
  return { props: {
    experiences: getExperiences(),
    skills: getSkills(),
    teachings: getTeachings(),
    publications: getPublications(),
    awards: getAwards(),
    educations: getEducations()
  } };
};