const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");

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
            console.error(error);
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
            console.error(error);
        }
    },

    deleteOne: async (req, res) => {
        try {
            const wilders = await dataSource.getRepository(Wilder).find();
            res.send(wilders);
        } catch (error) {
            console.error(error);
        }
    },
};
