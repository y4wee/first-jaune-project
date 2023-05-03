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
}
