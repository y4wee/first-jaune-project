import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  OneToMany,
} from "typeorm";
import { Skill } from "./Skill";

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
}
