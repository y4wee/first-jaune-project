import { IcontrollerWilder } from "../interfaces/wilder";
import { dataSource } from "../utils";
import { Wilder } from "../entity/Wilder";
import { Profile } from "../entity/Profile";

export const WilderController: IcontrollerWilder = {
  create: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Wilder);

      const wilder = new Wilder();
      const profile = new Profile();

      profile.name = req.body.name;
      profile.city = req.body.city;
      profile.description = req.body.description;
      profile.photo = req.body.photo;

      wilder.profile = profile;

      await repository.save(wilder);
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

      // user.name = req.body.name && req.body.name;
      // user.city = req.body.city && req.body.city;

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
      res.send("user : " + " removed");
    } catch (error) {
      res.send(error);
    }
  },
};
