import { dataSource } from "../utils";
import { Article } from "../entity/Article";
import { Wilder } from "../entity/Wilder";
import { IcontrollerArticle } from "../interfaces/article";

export const ArticleController: IcontrollerArticle = {
  create: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Article);
      const wilderRepository = dataSource.getRepository(Wilder);

      const wilder = await wilderRepository.findOneByOrFail({
        id: req.body.wilder,
      });

      const article = new Article();
      article.title = req.body.title;
      article.content = req.body.content;
      article.wilder = wilder;
      article.wilderName = wilder.name;

      console.log(article)

      await repository.save(article);
      res.send("new article posted : " + article.title);
    } catch (error) {
      res.send("Error while posting Article : " + error);
    }
  },

  getAll: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Article);
      const articles = await repository.find();

      res.send(articles);
    } catch (error) {
      res.send(error);
    }
  },

  getOne: async (req, res) => {
    try {
      const repository = dataSource.getRepository(Article);
      const article = await repository.findOneByOrFail({
        id: req.body.id,
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
      await repository.remove(article);
      res.send("Article : " + article.title + " removed");
    } catch (error) {
      res.send(error);
    }
  },
};
