import fs from "fs";
import YAML from "yaml";

interface IAuthor {
    name: string;
    surname: string;
}

export interface IPublication {
  title: string;
  conference: string;
  year: number;
  authors: IAuthor[];
  abstract: string;
  doi: string;
  cover: string;
};
  
export function getPublications(): IPublication[] {
  return YAML.parse(fs.readFileSync("content/publications.yaml", "utf-8"));
};