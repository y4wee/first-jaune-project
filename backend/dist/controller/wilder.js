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
exports.wilderController = void 0;
const utils_1 = require("../utils");
const Wilder_1 = require("../entity/Wilder");
const Skill_1 = require("../entity/Skill");
exports.wilderController = {
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const repository = utils_1.dataSource.getRepository(Wilder_1.Wilder);
            yield repository.save(req.body);
            res.send("Created wilder");
        }
        catch (error) {
            res.send("Error while creating wilder : " + error);
        }
    }),
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const repository = utils_1.dataSource.getRepository(Wilder_1.Wilder);
            const wilders = yield repository.find();
            res.send(wilders);
        }
        catch (error) {
            res.send(error);
        }
    }),
    updateOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const repository = utils_1.dataSource.getRepository(Wilder_1.Wilder);
            const user = yield repository.findOneByOrFail({
                id: req.body.id,
            });
            user.name = req.body.name;
            yield repository.save(user);
            res.send("wilder updated");
        }
        catch (error) {
            res.send(error);
        }
    }),
    deleteOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const repository = utils_1.dataSource.getRepository(Wilder_1.Wilder);
            const user = yield repository.findOneByOrFail({
                id: req.body.id,
            });
            yield repository.remove(user);
            res.send("user : " + user.name + " removed");
        }
        catch (error) {
            res.send(error);
        }
    }),
    addSkill: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const wilderToUpdate = yield utils_1.dataSource
                .getRepository(Wilder_1.Wilder)
                .findOneByOrFail({ id: req.body.wilderId });
            const skillToAdd = yield utils_1.dataSource
                .getRepository(Skill_1.Skill)
                .findOneByOrFail({ name: req.body.skillName });
            wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
            yield utils_1.dataSource.getRepository(Wilder_1.Wilder).save(wilderToUpdate);
            res.send("skill added");
        }
        catch (error) {
            res.send(error);
        }
    }),
};
