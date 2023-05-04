import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Wilder } from "./Wilder";
import { Parcours } from "./Parcours";
import { Experience } from "./Experience";
import { Recommendation } from "./Recommendation";
import { Follow } from "./Follow";

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  photo: string;

  @OneToOne(() => Wilder, (wilder) => wilder.profile)
  wilder: Wilder;

  @OneToMany(() => Parcours, (parcours) => parcours.profile, { eager: true })
  @JoinTable()
  parcours: Parcours[];

  @OneToMany(() => Experience, (experience) => experience.profile, {
    eager: true,
    cascade: true,
  })
  @JoinTable()
  experiences: Experience[];

  @OneToMany(() => Recommendation, (recommendation) => recommendation.sender, {
    eager: true,
  })
  @JoinTable()
  recommendationsSent: Recommendation[];

  @OneToMany(
    () => Recommendation,
    (recommendation) => recommendation.receiver,
    {
      eager: true,
    }
  )
  @JoinTable()
  recommendationsReceived: Recommendation[];

  @OneToMany(() => Follow, (follow) => follow.following, {
    eager: true,
  })
  @JoinTable()
  followers: Follow[];

  @OneToMany(() => Follow, (follow) => follow.follower, {
    eager: true,
  })
  @JoinTable()
  following: Follow[];
}
