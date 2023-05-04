import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Profile } from "./Profile";

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
  })
  sender: Profile;
}
