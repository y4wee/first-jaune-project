import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";
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

  @ManyToOne(() => Profile, (profile) => profile.id, {
    onDelete: "CASCADE",
  })
  profile: Profile;
}
