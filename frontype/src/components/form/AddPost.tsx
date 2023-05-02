import { useState, ChangeEvent, FormEvent } from "react";
import axios, { AxiosRequestConfig } from "axios";

import { Iarticle, IpropsChangeArticle } from "../../interfaces/article";
import styles from "../../styles/AddPost.module.css";

const AddPost = ({ onChangeArticle }: IpropsChangeArticle) => {
  const [article, setArticle] = useState<Iarticle>({
    title: "",
    content: "",
    wilder: 4,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (
      article.title.length > 0 &&
      article.content.length > 0 &&
      article.wilder
    ) {
      try {
        const config: AxiosRequestConfig = {
          method: "post",
          url: "http://localhost:4000/api/article",
          data: article,
        };
        await axios(config);
        setArticle({
          title: "",
          content: "",
          wilder: 4,
        });
        onChangeArticle();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArticle((article) => ({ ...article, title: e.target.value }));
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setArticle((article) => ({ ...article, content: e.target.value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.input}>
          <label>Title </label>
          <input
            type="text"
            value={article.title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className={styles.textarea}>
          <textarea
            value={article.content}
            onChange={handleContentChange}
            rows={10}
            cols={40}
            placeholder="Write your article here..."
            required
          />
        </div>
        <button>ADD</button>
      </form>
    </div>
  );
};

export default AddPost;
