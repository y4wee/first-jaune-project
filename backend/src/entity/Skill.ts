import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Wilder } from "./Wilder";

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 0 })
  grade: number;

  @ManyToOne(() => Wilder, { cascade: true })
  wilder: Wilder;
}
