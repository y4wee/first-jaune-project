import { dataSource } from "../utils";
import { Skill } from "../entity/Skill";
import { Icontroller } from "../types/interface";

export const SkillController: Icontroller = {
  create: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Skill);
      const response = await repository.save(req.body);
      res.send("Created Skill : " + response.name);
    } catch (error) {
      res.send("Error while creating Skill : " + error);
    }
  },

  getAll: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Skill);
      const Skills = await repository.find();
      res.send(Skills);
    } catch (error) {
      res.send(error);
    }
  },

  updateOne: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Skill);
      const skill = await repository.findOneByOrFail({
        id: req.body.id,
      });
      skill.name = req.body.name;
      skill.grade = req.body.grade;
      await repository.save(skill);
      res.send("Skill updated");
    } catch (error) {
      res.send(error);
    }
  },

  deleteOne: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Skill);
      const skill = await repository.findOneByOrFail({
        id: req.body.id,
      });
      await repository.remove(skill);
      res.send("Skill : " + skill.name + " removed");
    } catch (error) {
      res.send(error);
    }
  },
};
