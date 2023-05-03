import { useEffect, useState } from "react";
import axios from "axios";

import { Iarticle } from "../interfaces/article";
import { HomeContext } from "../context/home";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AddArticle from "../components/form/AddArticle";
import Article from "../components/home/Article";

const Home = () => {
  const [articles, setArticles] = useState<Iarticle[]>([]);

  const getArticles = async (): Promise<void> => {
    try {
      const res = await axios.get("http://localhost:4000/api/article");
      console.log(res.data);
      res && setArticles(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  const updateArticles = (): void => {
    getArticles();
  };

  return (
    <HomeContext.Provider value={{ updateArticles }}>
      <div className={styles.home}>
        <Header />
        <h1>Home</h1>
        <AddArticle />
        <section className={styles.articles}>
          {articles?.map((article) => (
            <Article
              key={article.id}
              id={article.id}
              wilderName={article.wilderName}
              title={article.title}
              content={article.content}
              createDate={article.createDate}
              comments={article.comments}
            />
          ))}
        </section>
        <Footer />
      </div>
    </HomeContext.Provider>
  );
};

export default Home;
