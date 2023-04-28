export interface Iskill {
  id?: number;
  name: string;
  grade: number;
}
export interface Iwilder {
  id?: number;
  name: string;
  city: string;
  skills?: Iskill[];
}
