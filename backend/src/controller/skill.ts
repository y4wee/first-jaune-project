import { dataSource } from "../utils";
import { Skill } from "../entity/Skill";
import { IcontrollerSkill } from "../interfaces/skill";

export const SkillController: IcontrollerSkill = {
  create: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Skill);

      const skill = new Skill();
      skill.name = req.body.name;
      skill.grade = req.body.grade;
      skill.wilder = req.body.wilder;

      await repository.save(skill);
      res.send("Added Skill : " + skill.name);
    } catch (error) {
      res.send("Error while creating Skill : " + error);
    }
  },

  getAllNames: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Skill);
      const skillNames = await repository
        .createQueryBuilder("skill")
        .select("DISTINCT skill.name")
        .getRawMany();

      res.send(skillNames.map((skill) => skill.name));
    } catch (error) {
      res.send(error);
    }
  },

  updateOne: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Skill);
      const response = await repository.update(req.body.id, {
        grade: req.body.grade,
      });
      res.send("Skill updated : " + response);
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
