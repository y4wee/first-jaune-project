import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
} from "typeorm";
import { Wilder } from "./Wilder";

@Unique(["name", "wilder"])
@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 0 })
  grade: number;

  @ManyToOne(() => Wilder, (wilder) => wilder.id, { onDelete: "CASCADE" })
  wilder: Wilder;
}
