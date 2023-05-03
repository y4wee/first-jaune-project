import { useState, ChangeEvent, useContext } from "react";

import { Iarticle, IcreateComment } from "../../interfaces/article";
import { HomeContext } from "../../context/home";
import styles from "../../styles/home/Article.module.css";
import ButtonDelete from "../button/ButtonDelete";
import Post from "../form/Post";

const Article = ({
  id,
  title,
  content,
  wilderName,
  createDate,
  comments,
}: Iarticle) => {
  const [comment, setComment] = useState<IcreateComment>({
    content: "",
    article: id,
    wilder: 2,
  });
  const { updateArticles } = useContext(HomeContext);

  const onPosted = () => {
    setComment({
      content: "",
      article: id,
      wilder: 2,
    });
    updateArticles();
  };

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment((comment) => ({ ...comment, content: e.target.value }));
  };

  const formatedDate = (data: string): string => {
    const date = new Date(data);
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  return (
    <article className={styles.article}>
      <div className={styles.button}>
        <ButtonDelete id={id} path={"/article"} onDeleted={updateArticles} />
      </div>
      <div className={styles.header}>
        <div>{wilderName}</div>
        <span> {formatedDate(createDate)} </span>
      </div>

      <h2 className={styles.title}> {title} </h2>

      <div className={styles.content}> {content} </div>

      <div className={styles.comments}>
        <Post path={"/article/comment"} data={comment} onPosted={onPosted}>
          <input
            type="text"
            placeholder="Ajouter un commentaire"
            value={comment.content}
            onChange={handleContentChange}
          />
          <button>post</button>
        </Post>
        {comments?.map((comment, index) => (
          <div key={comment.id} className={styles.comment}>
            {comment.content}
          </div>
        ))}
      </div>
    </article>
  );
};

export default Article;
