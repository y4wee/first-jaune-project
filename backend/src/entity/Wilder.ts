import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Article } from "./Article";
import { Profile } from "./Profile";
import { Network } from "./Network";

@Entity()
export class Wilder {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Profile, (profile) => profile.id, { cascade: true })
  @JoinColumn()
  profile: Profile;

  @OneToOne(() => Network, (network) => network.id, { cascade: true })
  @JoinColumn()
  network: Network;

  @OneToMany(() => Article, (article) => article.wilder)
  articles: Article[];
}
