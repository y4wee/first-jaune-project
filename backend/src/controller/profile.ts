import { IcontrollerProfile } from "../interfaces/profile";
import { dataSource } from "../utils";
import { Profile } from "../entity/Profile";

export const ProfileController: IcontrollerProfile = {
  getOne: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Profile);
      const profile = await repository.findOneOrFail({
        where: {
          id: +req.params.id,
        },
        relations: [
          "skills",
          "parcours",
          "experiences",
          "recommendationsReceived",
        ],
      });
      res.send(profile);
    } catch (error) {
      res.send(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Profile);
      const profiles = await repository.find();
      res.send(profiles);
    } catch (error) {
      res.send(error);
    }
  },

  updateOwner: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Profile);
      const response = await repository.update(req.body.id, {
        name: req.body.name && req.body.name,
        city: req.body.city && req.body.city,
        description: req.body.description && req.body.description,
        photo: req.body.photo && req.body.photo,
      });
      res.send("Profile updated : " + response);
    } catch (error) {
      res.send(error);
    }
  },
};
