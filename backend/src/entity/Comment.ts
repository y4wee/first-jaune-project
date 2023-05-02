import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Wilder } from "./Wilder";
import { Article } from "./Article";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => Wilder, (wilder) => wilder.id, { cascade: true })
  wilder: Wilder;

  @ManyToOne(() => Article, (article) => article.id, { cascade: true })
  article: Article;
}
