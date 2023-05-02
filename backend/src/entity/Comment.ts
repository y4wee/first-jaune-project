import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
import { Wilder } from "./Wilder";
import { Post } from "./Post";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => Wilder, (wilder) => wilder.id, { cascade: true })
  wilder: Wilder;

  @ManyToOne(() => Post, (post) => post.id, { cascade: true })
  post: Post;
}
