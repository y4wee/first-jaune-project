import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  OneToMany,
} from "typeorm";
import { Skill } from "./Skill";
import { Article } from "./Article";
import { Comment } from "./Comment";

@Entity()
export class Wilder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  city: string;

  @OneToMany(() => Skill, (skill) => skill.wilder, {
    eager: true,
  })
  @JoinTable()
  skills: Skill[];

  @OneToMany(() => Article, (article) => article.wilder, {
    eager: true,
  })
  @JoinTable()
  articles: Article[];

  @OneToMany(() => Comment, (comment) => comment.wilder)
  comments: Comment[];
}
