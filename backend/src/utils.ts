import { DataSource } from "typeorm";
import { Wilder } from "./entity/Wilder";
import { Skill } from "./entity/Skill";
import { Article } from "./entity/Article";
import { Comment } from "./entity/Comment";
import { Profile } from "./entity/Profile";
import { Parcours } from "./entity/Parcours";
import { Experience } from "./entity/Experience";
import { Recommendation } from "./entity/Recommendation";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [
    Wilder,
    Skill,
    Article,
    Comment,
    Profile,
    Parcours,
    Experience,
    Recommendation,
  ],
});
