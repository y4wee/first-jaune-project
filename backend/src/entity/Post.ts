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
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  content: string;

  @ManyToOne(() => Wilder, (wilder) => wilder.id, { cascade: true })
  wilder: Wilder;

  @OneToMany(() => Comment, (comment) => comment.post, { eager: true })
  @JoinTable()
  comments: Comment[];
}
