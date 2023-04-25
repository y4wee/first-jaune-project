const dataSource = require("../utils").dataSource;
const Skill = require("../entity/Skill");

module.exports = {
    create: async (req, res) => {
        try {
            const repository = dataSource.getRepository(Skill);
            await repository.save(req.body);
            res.send("Created Skill");
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
            const user = await repository.findOneBy({
                id: req.body.id,
            });
            user.name = req.body.name;
            await repository.save(user);
            res.send("Skill updated");
        } catch (error) {
            res.send(error);
        }
    },

    deleteOne: async (req, res) => {
        try {
            const repository = dataSource.getRepository(Skill);
            const user = await repository.findOneBy({
                id: req.body.id,
            });
            await repository.remove(user);
            res.send("Skill : " + user.name + " removed");
        } catch (error) {
            res.send(error);
        }
    },
};
