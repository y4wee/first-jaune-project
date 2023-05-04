import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Wilder } from "./Wilder";
import { Article } from "./Article";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column({ nullable: true })
  wilderName: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @ManyToOne(() => Wilder, (wilder) => wilder.id, {
    onDelete: "CASCADE",
  })
  wilder: Wilder;

  @ManyToOne(() => Article, (article) => article.id, { onDelete: "CASCADE" })
  article: Article;
}
