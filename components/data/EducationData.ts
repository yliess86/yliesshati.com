import fs from "fs";
import YAML from "yaml";

export interface IEducation {
  school: string;
  loc: string;
  track: string;
  start: string;
  end: string;
  desc: string;
};

export function getEducations (): IEducation[] {
    return YAML.parse(fs.readFileSync("content/education.yaml", "utf-8"));
};