import { Entity, PrimaryGeneratedColumn, ManyToOne, Unique } from "typeorm";
import { Network } from "./Network";
import { Profile } from "./Profile";

@Unique(["following", "follower"])
@Entity()
export class Follow {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Profile, (profile) => profile.id, {
    onDelete: "CASCADE",
    eager: true,
  })
  following: Profile;

  @ManyToOne(() => Profile, (profile) => profile.id, {
    onDelete: "CASCADE",
  })
  follower: Profile;

  @ManyToOne(() => Network, (network) => network.id, {
    onDelete: "CASCADE",
  })
  followingNetwork: Network;

  @ManyToOne(() => Network, (network) => network.id, {
    onDelete: "CASCADE",
  })
  followerNetwork: Network;
}
