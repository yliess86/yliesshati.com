import fs from "fs";
import YAML from "yaml";

export interface IAward {
  name: string;
  orga: string;
  rank: string;
  desc: string;
};
  
export function getAwards(): IAward[] {
  return YAML.parse(fs.readFileSync("content/awards.yaml", "utf-8"));
};