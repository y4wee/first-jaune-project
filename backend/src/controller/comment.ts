import { IcontrollerComment } from "../interfaces/comment";
import { dataSource } from "../utils";
import { Comment } from "../entity/Comment";
import { Article } from "../entity/Article";
import { Profile } from "../entity/Profile";

export const CommentController: IcontrollerComment = {
  create: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Comment);
      const profileRepository = dataSource.getRepository(Profile);
      const articleRepository = dataSource.getRepository(Article);

      const profile = await profileRepository.findOneByOrFail({
        id: req.body.profile,
      });
      const article = await articleRepository.findOneByOrFail({
        id: req.body.article,
      });

      const comment = new Comment();
      comment.content = req.body.content;
      comment.profile = profile;
      comment.article = article;

      await repository.save(comment);
      res.send("new comment posted");
    } catch (error) {
      res.send("Error while posting comment : " + error);
    }
  },

  updateOne: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Comment);
      const response = await repository.update(req.body.id, {
        content: req.body.content,
      });
      res.send("Comment updated : " + response);
    } catch (error) {
      res.send(error);
    }
  },

  deleteOne: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Comment);
      const comment = await repository.findOneByOrFail({
        id: req.body.id,
      });
      await repository.remove(comment);
      res.send("Comment removed");
    } catch (error) {
      res.send(error);
    }
  },
};
