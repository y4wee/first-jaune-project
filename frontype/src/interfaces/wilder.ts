import { Iskill } from "./skill";

export interface Iwilder {
  id: number;
  name: string;
  city: string;
  description?: string;
  skills: Iskill[];
}

export interface IcreateWilder {
  name: string;
  city: string;
  description: string;
}

export interface IpropsChangeWilder {
  onchangeWilder: () => void;
}

export interface IpropsWilder extends Iwilder {
  onchangeWilder: () => void;
}

export interface Iform {
  wilders: Iwilder[];
}
