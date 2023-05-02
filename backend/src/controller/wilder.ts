import { dataSource } from "../utils";
import { Wilder } from "../entity/Wilder";
import { IcontrollerWilder } from "../interfaces/wilder";

export const wilderController: IcontrollerWilder = {
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

  deleteOne: async (req, res) => {
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
};
