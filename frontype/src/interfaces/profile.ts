import { Iskill } from "./skill";

export interface Iprofile {
  id: number;
  name: string;
  city: string;
  description: string;
  photo: string;
  skills: Iskill[];
  recommendationsReceived: any;
  experiences: any;
  parcours: any;
}

export interface IprofileBase {
  id: number;
  name: string;
  city: string;
  description: string;
  photo: string;
}

export interface Idetails {
  name: string;
  city: string;
  description: string;
  photo: string;
}

// export interface IpropsChangeWilder {
//   onchangeWilder: () => void;
// }

export interface Iform {
  wilders: Iprofile[];
}
