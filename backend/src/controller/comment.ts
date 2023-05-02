import { dataSource } from "../utils";
import { Comment } from "../entity/Comment";
import { IcontrollerComment } from "../interfaces/comment";

export const CommentController: IcontrollerComment = {
  create: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Comment);

      const comment = new Comment();
      comment.content = req.body.content;
      comment.wilder = req.body.wilder;
      comment.article = req.body.post;

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
