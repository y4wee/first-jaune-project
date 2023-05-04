import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
} from "typeorm";
import { Profile } from "./Profile";

@Unique(["name", "profile"])
@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 0 })
  grade: number;

  @ManyToOne(() => Profile, (profile) => profile.id, { onDelete: "CASCADE" })
  profile: Profile;
}
