import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Wilder } from "./Wilder";
import { Profile } from "./Profile";
import { Comment } from "./Comment";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @ManyToOne(() => Profile, (profile) => profile.id, {
    onDelete: "CASCADE",
  })
  profile: Profile;

  @ManyToOne(() => Wilder, (Wilder) => Wilder.id, {
    onDelete: "CASCADE",
  })
  wilder: Wilder;

  @OneToMany(() => Comment, (comment) => comment.article)
  comments: Comment[];
}
