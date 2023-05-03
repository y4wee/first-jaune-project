import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Profile } from "./Profile";

@Entity()
export class Parcours {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ecole: string;

  @Column()
  start: string;

  @Column()
  end: string;

  @Column()
  diplome: string;

  @ManyToOne(() => Profile, (profile) => profile.id, { onDelete: "CASCADE" })
  profile: Profile;
}
