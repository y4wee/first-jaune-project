import { Iskill } from "./skill";

export interface Iprofile {
  id: number;
  name: string;
  city: string;
  description: string;
  photo: string;
}

export interface Iwilder {
  id: number;
  profile: Iprofile;
  skills: Iskill[];
}

export interface IpropsWilder {
  id: number;
  name: string;
  city: string;
  description: string;
  photo: string;
  skills: Iskill[];
}

export interface IcreateWilder {
  name: string;
  city: string;
  description: string;
}

// export interface IpropsChangeWilder {
//   onchangeWilder: () => void;
// }

export interface Iform {
  wilders: Iwilder[];
}
