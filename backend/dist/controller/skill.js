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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillController = void 0;
const utils_1 = require("../utils");
const Skill_1 = require("../entity/Skill");
exports.SkillController = {
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const repository = utils_1.dataSource.getRepository(Skill_1.Skill);
            const response = yield repository.save(req.body);
            res.send("Created Skill : " + response.name);
        }
        catch (error) {
            res.send("Error while creating Skill : " + error);
        }
    }),
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const repository = utils_1.dataSource.getRepository(Skill_1.Skill);
            const Skills = yield repository.find();
            res.send(Skills);
        }
        catch (error) {
            res.send(error);
        }
    }),
    updateOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const repository = utils_1.dataSource.getRepository(Skill_1.Skill);
            const skill = yield repository.findOneByOrFail({
                id: req.body.id,
            });
            skill.name = req.body.name;
            skill.grade = req.body.grade;
            yield repository.save(skill);
            res.send("Skill updated");
        }
        catch (error) {
            res.send(error);
        }
    }),
    deleteOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const repository = utils_1.dataSource.getRepository(Skill_1.Skill);
            const skill = yield repository.findOneByOrFail({
                id: req.body.id,
            });
            yield repository.remove(skill);
            res.send("Skill : " + skill.name + " removed");
        }
        catch (error) {
            res.send(error);
        }
    }),
};
