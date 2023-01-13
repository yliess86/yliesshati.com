import fs from "fs";
import YAML from "yaml";

export interface ITeaching {
  course: string;
  school: string;
  loc: string;
  pos: string;
  start: string;
  end: string;
  desc: string;
};
  
export function getTeachings(): ITeaching[] {
  return YAML.parse(fs.readFileSync("content/teaching.yaml", "utf-8"));
};