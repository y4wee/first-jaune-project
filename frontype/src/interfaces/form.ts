import { ReactNode } from "react";

export interface IForm<T> {
  children: ReactNode;
  path: string;
  data: T;
  onPosted: () => void;
}
