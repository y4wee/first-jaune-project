import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Article } from "./Article";
import { Profile } from "./Profile";

@Entity()
export class Wilder {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Profile, (profile) => profile.id, { cascade: true })
  @JoinColumn()
  profile: Profile;

  @OneToMany(() => Article, (article) => article.wilder)
  articles: Article[];
}
