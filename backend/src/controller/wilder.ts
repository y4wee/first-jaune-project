import { Request, Response } from "express";
import { dataSource } from "../utils";
import { Wilder } from "../entity/Wilder";
import { Skill } from "../entity/Skill";

export const wilderController = {
    create: async (req: Request, res: Response) => {
        try {
            const repository = dataSource.getRepository(Wilder);
            await repository.save(req.body);
            res.send("Created wilder");
        } catch (error) {
            res.send("Error while creating wilder : " + error);
        }
    },

    getAll: async (req: Request, res: Response) => {
        try {
            const repository = dataSource.getRepository(Wilder);
            const wilders = await repository.find();
            res.send(wilders);
        } catch (error) {
            res.send(error);
        }
    },

    updateOne: async (req: Request, res: Response) => {
        try {
            const repository = dataSource.getRepository(Wilder);
            const user = await repository.findOneByOrFail({
                id: req.body.id,
            });
            user.name = req.body.name;
            await repository.save(user);
            res.send("wilder updated");
        } catch (error) {
            res.send(error);
        }
    },

    deleteOne: async (req: Request, res: Response) => {
        try {
            const repository = dataSource.getRepository(Wilder);
            const user = await repository.findOneByOrFail({
                id: req.body.id,
            });
            await repository.remove(user);
            res.send("user : " + user.name + " removed");
        } catch (error) {
            res.send(error);
        }
    },

    addSkill: async (req: Request, res: Response) => {
        try {
            const wilderToUpdate = await dataSource
                .getRepository(Wilder)
                .findOneByOrFail({ id: req.body.wilderId });
            const skillToAdd = await dataSource
                .getRepository(Skill)
                .findOneByOrFail({ name: req.body.skillName });
            wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
            await dataSource.getRepository(Wilder).save(wilderToUpdate);
            res.send("skill added");
        } catch (error) {
            res.send(error);
        }
    },
};
