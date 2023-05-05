import { Iskill } from "./skill";

export interface IprofileBase {
  id: number;
  name: string;
  city: string;
  description: string;
  photo: string;
}
export interface Iprofile extends IprofileBase {
  skills: Iskill[];
  recommendationsReceived: any;
  experiences: any;
  parcours: any;
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
