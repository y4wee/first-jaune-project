import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  JoinColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Skill } from "./Skill";
import { Article } from "./Article";
import { Profile } from "./Profile";

@Entity()
export class Wilder {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Profile, (profile) => profile.wilder, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  profile: Profile;

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
}
