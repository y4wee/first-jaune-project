export interface Iskill {
  id?: number;
  name: string;
  grade: number;
  wilder?: number;
}

export interface Iwilder {
  id: number;
  name: string;
  city: string;
  description?: string;
  skills?: Iskill[];
}

export interface IpropsChangeWilder {
  onchangeWilder: () => void;
}

export interface IpropsWilder extends Iwilder {
  onchangeWilder: () => void;
}

export interface Iform {
  wilders: Iwilder[];
  onchangeWilder: () => void;
}
