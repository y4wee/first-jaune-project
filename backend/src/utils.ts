import { DataSource } from "typeorm";
import { Wilder } from "./entity/Wilder";
import { Skill } from "./entity/Skill";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [Wilder, Skill],
});
