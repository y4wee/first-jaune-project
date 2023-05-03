import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Wilder } from "./Wilder";
import { Comment } from "./Comment";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ nullable: true })
  wilderName: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @ManyToOne(() => Wilder, (wilder) => wilder.id, { onDelete: "CASCADE" })
  wilder: Wilder;

  @OneToMany(() => Comment, (comment) => comment.article, {
    eager: true,
  })
  @JoinTable()
  comments: Comment[];
}
