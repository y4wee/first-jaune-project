const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");

module.exports = {
    create: async (req, res) => {
        try {
            await dataSource.getRepository(Wilder).save(req.body);
            res.send("Created wilder");
        } catch (error) {
            res.send("Error while creating wilder : " + error);
        }
    },

    getAll: async (req, res) => {
        try {
            const wilders = await dataSource.getRepository(Wilder).find();
            res.send(wilders)
        } catch (error) {
            console.error(error);
        }
    },

};
