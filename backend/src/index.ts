import express from "express";
import cors from "cors";
import { dataSource } from "./utils";
import { wilderController } from "./controller/wilder";
import { SkillController } from "./controller/skill";

const app = express();

app.use(cors());

app.use(express.json());

app.post("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.getAll);
app.delete("/api/wilder", wilderController.deleteOne);
app.put("/api/wilder", wilderController.updateOne);

app.post("/api/skill", SkillController.create);
app.get("/api/skill", SkillController.getAll);
app.delete("/api/skill", SkillController.deleteOne);
app.put("/api/skill", SkillController.updateOne);

app.use((req, res, next) => {
  res.status(404).json({ message: "Resource not found" });
});

const start = async (): Promise<void> => {
  await dataSource.initialize();
  app.listen(4000, () => console.log("Server started on 4000"));
};
//Start Server

start();
