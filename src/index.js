const express = require("express");
const dataSource = require("./utils").dataSource;
const wilderController = require("./controller/wilder");
const SkillController = require("./controller/skill");

const app = express();

app.use(express.json());

app.post("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.getAll);
app.delete("/api/wilder", wilderController.deleteOne);
app.put("/api/wilder", wilderController.updateOne);

app.post("/api/skill", SkillController.create);
app.get("/api/skill", SkillController.getAll);
app.delete("/api/skill", SkillController.deleteOne);
app.put("/api/skill", SkillController.updateOne);

app.put("/api/wilder/addskill", wilderController.addSkill);

app.use((req, res, next) => {
    res.status(404).json({ message: "Resource not found" });
});

const start = async () => {
    await dataSource.initialize();
    app.listen(3000, () => console.log("Server started on 3000"));
};
//Start Server

start();
