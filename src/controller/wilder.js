const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");
const Skill = require("../entity/Skill");

module.exports = {
    create: async (req, res) => {
        try {
            const repository = dataSource.getRepository(Wilder);
            await repository.save(req.body);
            res.send("Created wilder");
        } catch (error) {
            res.send("Error while creating wilder : " + error);
        }
    },

    getAll: async (req, res) => {
        try {
            const repository = dataSource.getRepository(Wilder);
            const wilders = await repository.find();
            res.send(wilders);
        } catch (error) {
            res.send(error);
        }
    },

    updateOne: async (req, res) => {
        try {
            const repository = dataSource.getRepository(Wilder);
            const user = await repository.findOneBy({
                id: req.body.id,
            });
            user.name = req.body.name;
            await repository.save(user);
            res.send("wilder updated");
        } catch (error) {
            res.send(error);
        }
    },

    deleteOne: async (req, res) => {
        try {
            const repository = dataSource.getRepository(Wilder);
            const user = await repository.findOneBy({
                id: req.body.id,
            });
            await repository.remove(user);
            res.send("user : " + user.name + " removed");
        } catch (error) {
            res.send(error);
        }
    },

    addSkill: async (req, res) => {
        try {
            console.log(req.body)
            const wilderToUpdate = await dataSource
                .getRepository(Wilder)
                .findOneBy({ id: req.body.wilderId });
            console.log(wilderToUpdate);
            const skillToAdd = await dataSource
                .getRepository(Skill)
                .findOneBy({ name: req.body.skillName });
            console.log(skillToAdd);
            wilderToUpdate.skill = [...wilderToUpdate.skill, skillToAdd]
            await dataSource
                .getRepository(Wilder)
                .save(wilderToUpdate);
            res.send("skill added")
        } catch (error) {
            res.send(error);
        }
    },
};
