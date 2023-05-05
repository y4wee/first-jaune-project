import { DataSource } from "typeorm";
import { Wilder } from "./entity/Wilder";
import { Profile } from "./entity/Profile";
import { Network } from "./entity/Network";
import { Skill } from "./entity/Skill";
import { Article } from "./entity/Article";
import { Comment } from "./entity/Comment";
import { Parcours } from "./entity/Parcours";
import { Experience } from "./entity/Experience";
import { Recommendation } from "./entity/Recommendation";
import { Follow } from "./entity/Follow";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./wildersdb.sqlite",
  synchronize: true,
  entities: [
    Wilder,
    Profile,
    Network,
    Skill,
    Article,
    Comment,
    Parcours,
    Experience,
    Recommendation,
    Follow,
  ],
});
