"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const utils_1 = require("./utils");
const wilder_1 = require("./controller/wilder");
const skill_1 = require("./controller/skill");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post("/api/wilder", wilder_1.wilderController.create);
app.get("/api/wilder", wilder_1.wilderController.getAll);
app.delete("/api/wilder", wilder_1.wilderController.deleteOne);
app.put("/api/wilder", wilder_1.wilderController.updateOne);
app.post("/api/skill", skill_1.SkillController.create);
app.get("/api/skill", skill_1.SkillController.getAll);
app.delete("/api/skill", skill_1.SkillController.deleteOne);
app.put("/api/skill", skill_1.SkillController.updateOne);
app.put("/api/wilder/addskill", wilder_1.wilderController.addSkill);
app.use((req, res, next) => {
    res.status(404).json({ message: "Resource not found" });
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    yield utils_1.dataSource.initialize();
    app.listen(4000, () => console.log("Server started on 4000"));
});
//Start Server
start();
