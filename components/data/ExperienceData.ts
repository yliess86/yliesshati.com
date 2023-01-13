import fs from "fs";
import YAML from "yaml";

export interface IExperience {
  compagny: string;
  loc: string;
  pos: string;
  start: string;
  end: string;
  desc: string[];
};

export function getExperiences(): IExperience[] {
  return YAML.parse(fs.readFileSync("content/experiences.yaml", "utf-8"));
}
