import { IcontrollerWilder } from "../interfaces/wilder";
import { dataSource } from "../utils";
import { Wilder } from "../entity/Wilder";
import { Profile } from "../entity/Profile";
import { Network } from "../entity/Network";

export const WilderController: IcontrollerWilder = {
  create: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Wilder);

      const wilder = new Wilder();
      const profile = new Profile();
      const network = new Network();

      profile.name = req.body.name;
      profile.city = req.body.city;
      profile.description = req.body.description;
      profile.photo = req.body.photo;
      profile.network = network;

      wilder.profile = profile;
      wilder.network = network;

      await repository.save(wilder);
      res.send("Created wilder");
    } catch (error) {
      res.send("Error while creating wilder : " + error);
    }
  },

  getOwn: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Wilder);
      const wilder = await repository.findOneOrFail({
        where: {
          id: req.body.id,
        },
        relations: ["profile"],
      });
      res.send(wilder);
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
