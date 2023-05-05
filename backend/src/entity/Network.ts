import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Wilder } from "./Wilder";
import { Follow } from "./Follow";

@Entity()
export class Network {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Wilder, (wilder) => wilder.id, { onDelete: "CASCADE" })
  wilder: Wilder;

  @OneToMany(() => Follow, (follow) => follow.followingNetwork)
  followers: Follow[];

  @OneToMany(() => Follow, (follow) => follow.followerNetwork)
  following: Follow[];
}
