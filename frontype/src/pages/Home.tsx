import { useEffect, useState } from "react";
import axios from "axios";

import { Iarticle } from "../interfaces/article";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AddPost from "../components/form/AddPost";

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

  const updatearticles = (): void => {
    getArticles();
  };

  return (
    <div>
      <Header />
      <h1>Home</h1>
      <AddPost onChangeArticle={updatearticles}/>
      <Footer />
    </div>
  );
};

export default Home;
