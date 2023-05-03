interface Icomment {
  id: number;
  content: string;
  wilderName: string;
  wilder?: number;
  post?: number;
}

export interface Iarticle {
  id: number;
  title: string;
  content: string;
  wilderName: string;
  createDate: string;
  updateDate?: string;
  wilder?: number;
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
