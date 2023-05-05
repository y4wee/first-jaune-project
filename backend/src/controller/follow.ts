import { IcontrollerFollow } from "../interfaces/follow";
import { dataSource } from "../utils";
import { Follow } from "../entity/Follow";
import { Profile } from "../entity/Profile";

export const FollowController: IcontrollerFollow = {
  create: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Follow);
      const profileRepository = dataSource.getRepository(Profile);

      const following = await profileRepository.findOneOrFail({
        where: {
          id: req.body.following,
        },
        relations: ["network"],
      });
      const follower = await profileRepository.findOneOrFail({
        where: {
          id: req.body.follower,
        },
        relations: ["network"],
      });

      const follow = new Follow();

      follow.following = following;
      follow.followingNetwork = following.network;
      follow.follower = follower;
      follow.followerNetwork = follower.network;

      await repository.save(follow);
      res.send("you are following : " + following.name);
    } catch (error) {
      res.send("Error while following : " + error);
    }
  },

  deleteOne: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Follow);
      const follow = await repository.findOneByOrFail({
        id: req.body.id,
      });
      await repository.remove(follow);
      res.send("unfollowed");
    } catch (error) {
      res.send(error);
    }
  },
};
