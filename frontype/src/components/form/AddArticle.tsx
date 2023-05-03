import { useState, ChangeEvent, FormEvent } from "react";
import axios, { AxiosRequestConfig } from "axios";

import { IcreateArticle, IpropsChangeArticle } from "../../interfaces/article";
import styles from "../../styles/AddArticle.module.css";

const AddPost = ({ onChangeArticle }: IpropsChangeArticle) => {
  const [article, setArticle] = useState<IcreateArticle>({
    title: "",
    content: "",
    wilder: 2,
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
          wilder: 2,
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
