import { dataSource } from "../utils";
import { Post } from "../entity/Post";
import { IcontrollerPost } from "../interfaces/post";

export const PostController: IcontrollerPost = {
  create: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Post);

      const post = new Post();
      post.title = req.body.title;
      post.content = req.body.content;
      post.wilder = req.body.wilder;

      await repository.save(post);
      res.send("new article posted : " + post.title);
    } catch (error) {
      res.send("Error while posting Article : " + error);
    }
  },

  getAll: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Post);
      const posts = await repository.find();

      res.send(posts);
    } catch (error) {
      res.send(error);
    }
  },

  getOne: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Post);
      const post = await repository.findOneByOrFail({
        id: req.body.id,
      });
      res.send(post);
    } catch (error) {
      res.send(error);
    }
  },

  updateOne: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Post);
      const response = await repository.update(req.body.id, {
        title: req.body.title && req.body.title,
        content: req.body.content && req.body.content,
      });
      res.send("Article updated : " + response);
    } catch (error) {
      res.send(error);
    }
  },

  deleteOne: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Post);
      const post = await repository.findOneByOrFail({
        id: req.body.id,
      });
      await repository.remove(post);
      res.send("Article : " + post.title + " removed");
    } catch (error) {
      res.send(error);
    }
  },
};
