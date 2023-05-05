import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Wilder } from "./Wilder";
import { Network } from "./Network";
import { Skill } from "./Skill";
import { Experience } from "./Experience";
import { Recommendation } from "./Recommendation";
import { Parcours } from "./Parcours";

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Wilder, (wilder) => wilder.id, { onDelete: "CASCADE" })
  wilder: Wilder;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  photo: string;

  @OneToMany(() => Skill, (skill) => skill.profile)
  skills: Skill[];

  @OneToMany(() => Parcours, (parcours) => parcours.profile, {
    cascade: true,
  })
  parcours: Parcours[];

  @OneToMany(() => Experience, (experience) => experience.profile, {
    cascade: true,
  })
  experiences: Experience[];

  @OneToMany(() => Recommendation, (recommendation) => recommendation.receiver)
  recommendationsReceived: Recommendation[];

  @OneToOne(() => Network, (network) => network.id, { onDelete: "CASCADE" })
  @JoinColumn()
  network: Network;
}
