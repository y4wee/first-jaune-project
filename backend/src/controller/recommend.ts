import { IcontrollerRecommend } from "../interfaces/recommend";
import { dataSource } from "../utils";
import { Recommendation } from "../entity/Recommendation";
import { Profile } from "../entity/Profile";

export const RecommendController: IcontrollerRecommend = {
  create: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Recommendation);
      const profileRepository = dataSource.getRepository(Profile);

      const receiver = await profileRepository.findOneByOrFail({
        id: req.body.receiver,
      });
      const sender = await profileRepository.findOneByOrFail({
        id: req.body.sender,
      });

      const recommendation = new Recommendation();
      recommendation.content = req.body.content;
      recommendation.receiver = receiver;
      recommendation.sender = sender;

      await repository.save(recommendation);
      res.send("new recommendation posted to : " + receiver.name);
    } catch (error) {
      res.send("Error while posting comment : " + error);
    }
  },

  updateOne: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Recommendation);
      const response = await repository.update(req.body.id, {
        content: req.body.content,
      });
      res.send("recommendation updated : " + response);
    } catch (error) {
      res.send(error);
    }
  },

  deleteOne: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Recommendation);
      const recommendation = await repository.findOneByOrFail({
        id: req.body.id,
      });
      await repository.remove(recommendation);
      res.send("Recommendation removed");
    } catch (error) {
      res.send(error);
    }
  },
};
