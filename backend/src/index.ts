import express from "express";
import cors from "cors";
import { dataSource } from "./utils";
import { wilderController } from "./controller/wilder";
import { SkillController } from "./controller/skill";
import { PostController } from "./controller/post";
import { CommentController } from "./controller/comment";

const app = express();

app.use(cors());

app.use(express.json());

app.post("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.getAll);
app.put("/api/wilder", wilderController.updateOne);
app.delete("/api/wilder", wilderController.deleteOne);

app.post("/api/skill", SkillController.create);
app.get("/api/skill/names", SkillController.getAllNames);
app.put("/api/skill", SkillController.updateOne);
app.delete("/api/skill", SkillController.deleteOne);

app.post("/api/post", PostController.create);
app.get("/api/post", PostController.getAll);
app.get("/api/post/id", PostController.getOne);
app.put("/api/post", PostController.updateOne);
app.delete("/api/post", PostController.deleteOne);

app.post("/api/post", CommentController.create);
app.put("/api/post", CommentController.updateOne);
app.delete("/api/post", CommentController.deleteOne);

app.use((req, res, next) => {
  res.status(404).json({ message: "Resource not found" });
});

const start = async (): Promise<void> => {
  await dataSource.initialize();
  app.listen(4000, () => console.log("Server started on 4000"));
};
//Start Server

start();
