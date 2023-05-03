import { useState, ChangeEvent, useContext } from "react";

import { HomeContext } from "../../context/home";
import { IcreateArticle } from "../../interfaces/article";
import styles from "../../styles/form/AddArticle.module.css";
import Post from "../form/Post";

const AddArticle = () => {
  const [article, setArticle] = useState<IcreateArticle>({
    title: "",
    content: "",
    wilder: 1,
  });
  const { updateArticles } = useContext(HomeContext);

  const onPosted = () => {
    setArticle({
      title: "",
      content: "",
      wilder: 1,
    });
    updateArticles();
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArticle((article) => ({ ...article, title: e.target.value }));
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setArticle((article) => ({ ...article, content: e.target.value }));
  };

  return (
    <Post path={"/article"} data={article} onPosted={onPosted}>
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
    </Post>
  );
};

export default AddArticle;
