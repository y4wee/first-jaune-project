import { IcontrollerArticle } from "../interfaces/article";
import { dataSource } from "../utils";
import { Article } from "../entity/Article";
import { Profile } from "../entity/Profile";

export const ArticleController: IcontrollerArticle = {
  create: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Article);
      const profileRepository = dataSource.getRepository(Profile);

      const profile = await profileRepository.findOneByOrFail({
        id: req.body.profile,
      });

      const article = new Article();
      article.title = req.body.title;
      article.content = req.body.content;
      article.profile = profile;

      await repository.save(article);
      res.send("new article posted : " + article.title);
    } catch (error) {
      res.send("Error while posting Article : " + error);
    }
  },

  getAll: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Article);
      const articles = await repository.find({
        relations: ["profile", "comments"],
      });
      res.send(articles);
    } catch (error) {
      res.send(error);
    }
  },

  getOne: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Article);
      const article = await repository.findOneOrFail({
        where: { id: +req.params.id },
        relations: ["profile"],
      });
      res.send(article);
    } catch (error) {
      res.send(error);
    }
  },

  updateOne: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Article);
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
      const repository = dataSource.getRepository(Article);
      const article = await repository.findOneByOrFail({
        id: req.body.id,
      });
      console.log(article);
      await repository.remove(article);
      res.send("Article : " + article.title + " removed");
    } catch (error) {
      res.send(error);
    }
  },
};
