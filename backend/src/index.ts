import express from "express";
import cors from "cors";
import { dataSource } from "./utils";
import { WilderController } from "./controller/wilder";
import { ProfileController } from "./controller/profile";
import { SkillController } from "./controller/skill";
import { ArticleController } from "./controller/article";
import { CommentController } from "./controller/comment";
import { RecommendController } from "./controller/recommend";
import { FollowController } from "./controller/follow";

const app = express();

app.use(cors());

app.use(express.json());

app.post("/api/wilder", WilderController.create);
app.get("/api/wilder", WilderController.getOwn);
app.put("/api/wilder", WilderController.updateOne);
app.delete("/api/wilder", WilderController.deleteOne);

app.get("/api/profile/id", ProfileController.getOne);
app.get("/api/profile/all", ProfileController.getAll);
app.put("/api/profile", ProfileController.updateOwner);

app.post("/api/skill", SkillController.create);
app.get("/api/skill/names", SkillController.getAllNames);
app.put("/api/skill", SkillController.updateOne);
app.delete("/api/skill", SkillController.deleteOne);

app.post("/api/article", ArticleController.create);
app.get("/api/article", ArticleController.getAll);
app.get("/api/article/id", ArticleController.getOne);
app.put("/api/article", ArticleController.updateOne);
app.delete("/api/article", ArticleController.deleteOne);

app.post("/api/article/comment", CommentController.create);
app.put("/api/article/comment", CommentController.updateOne);
app.delete("/api/article/comment", CommentController.deleteOne);

app.post("/api/profile/recommend", RecommendController.create);
app.get("/api/profile/recommend", RecommendController.getByIds);
app.put("/api/profile/recommend", RecommendController.updateOne);
app.delete("/api/profile/recommend", RecommendController.deleteOne);

app.post("/api/profile/follow", FollowController.create);
app.delete("/api/profile/follow", FollowController.deleteOne);

app.use((req, res, next) => {
  res.status(404).json({ message: "Resource not found" });
});

const start = async (): Promise<void> => {
  await dataSource.initialize();
  app.listen(4000, () => console.log("Server started on 4000"));
};
//Start Server

start();
