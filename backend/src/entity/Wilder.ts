import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  OneToMany,
} from "typeorm";
import { Skill } from "./Skill";
import { Post } from "./Post";
import { Comment } from "./Comment";

@Entity()
export class Wilder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  city: string;

  @OneToMany(() => Skill, (skill) => skill.wilder, { eager: true })
  @JoinTable()
  skills: Skill[];

  @OneToMany(() => Post, (post) => post.wilder, { eager: true })
  @JoinTable()
  posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.wilder)
  comments: Comment[];
}
