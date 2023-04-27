import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
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

  @ManyToMany(() => Skill)
  @JoinTable()
  skills: Skill[];
}
