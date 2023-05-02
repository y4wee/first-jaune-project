import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinTable,
} from "typeorm";
import { Wilder } from "./Wilder";
import { Comment } from "./Comment";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ nullable: true })
  wilderName: string;

  @ManyToOne(() => Wilder, (wilder) => wilder.id, { cascade: true })
  wilder: Wilder;

  @OneToMany(() => Comment, (comment) => comment.article, { eager: true })
  @JoinTable()
  comments: Comment[];
}