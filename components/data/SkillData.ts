import fs from "fs";
import YAML from "yaml";

export interface ISkill {
  domain: string;
  items: string[];
  desc: string;
};

export function getSkills(): ISkill[] {
  return YAML.parse(fs.readFileSync("content/skills.yaml", "utf-8"));
};