import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true, default: 0 })
  vote: number;
}
