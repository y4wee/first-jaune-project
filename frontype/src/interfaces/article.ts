interface Icomment {
  id?: number;
  content: string;
  wilder?: number;
  post?: number;
}

export interface Iarticle {
  id?: number;
  title: string;
  content: string;
  wilder: number;
  comments?: Icomment[];
}

export interface IpropsChangeArticle {
  onChangeArticle: () => void;
}
