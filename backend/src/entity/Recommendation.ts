import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
  JoinColumn,
} from "typeorm";
import { Profile } from "./Profile";

@Unique(["receiver", "sender"])
@Entity()
export class Recommendation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => Profile, (profile) => profile.id, {
    onDelete: "CASCADE",
  })
  receiver: Profile;

  @ManyToOne(() => Profile, (profile) => profile.id, {
    onDelete: "CASCADE",
    eager: true,
  })
  sender: Profile;
}
