import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  OneToOne,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Wilder } from "./Wilder";
import { Profile } from "./Profile";

@Entity()
export class Experience {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  poste: string;

  @Column()
  entreprise: string;

  @Column()
  start: string;

  @Column()
  end: string;

  @ManyToOne(() => Profile, (profile) => profile.experiences, {
    onDelete: "CASCADE",
  })
  profile: Profile;
}
