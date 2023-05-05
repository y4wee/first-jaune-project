import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Profile } from "./Profile";
import { Article } from "./Article";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

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

  @ManyToOne(() => Article, (article) => article.id, { onDelete: "CASCADE" })
  article: Article;
}
