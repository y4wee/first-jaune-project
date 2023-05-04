import { IprofileBase } from "./profile";

interface Icomment {
  id: number;
  content: string;
  wilderName: string;
  profile: IprofileBase;
}

export interface Iarticle {
  id: number;
  title: string;
  content: string;
  profile: IprofileBase;
  createDate: string;
  updateDate?: string;
  comments: Icomment[];
}

export interface IcreateArticle {
  title: string;
  content: string;
  wilder: number;
}

export interface IcreateComment {
  content: string;
  article: number;
  wilder: number;
}

export interface IpropsChangeArticle {
  onChangeArticle: () => void;
}
