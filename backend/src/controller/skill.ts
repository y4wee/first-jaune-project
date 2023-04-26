import { Request, Response } from "express";
import { dataSource } from "../utils";
import { Skill } from "../entity/Skill";

export const SkillController = {
    create: async (req: Request, res: Response) => {
        try {
            const repository = dataSource.getRepository(Skill);
            await repository.save(req.body);
            res.send("Created Skill");
        } catch (error) {
            res.send("Error while creating Skill : " + error);
        }
    },

    getAll: async (req: Request, res: Response) => {
        try {
            const repository = dataSource.getRepository(Skill);
            const Skills = await repository.find();
            res.send(Skills);
        } catch (error) {
            res.send(error);
        }
    },

    updateOne: async (req: Request, res: Response) => {
        try {
            const repository = dataSource.getRepository(Skill);
            const skill = await repository.findOneByOrFail({
                name: req.body.name,
            });
            skill.name = req.body.name;
            await repository.save(skill);
            res.send("Skill updated");
        } catch (error) {
            res.send(error);
        }
    },

    deleteOne: async (req: Request, res: Response) => {
        try {
            const repository = dataSource.getRepository(Skill);
            const skill = await repository.findOneByOrFail({
                name: req.body.name,
            });
            await repository.remove(skill);
            res.send("Skill : " + skill.name + " removed");
        } catch (error) {
            res.send(error);
        }
    },
};
