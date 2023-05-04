import { useContext } from "react";

import { Iarticle } from "../../interfaces/article";
import { HomeContext } from "../../context/home";
import styles from "../../styles/home/Article.module.css";
import ButtonDelete from "../button/ButtonDelete";
import AddComment from "../form/AddComment";

const Article = ({
  id,
  title,
  content,
  profile,
  createDate,
  comments,
}: Iarticle) => {
  const { updateArticles } = useContext(HomeContext);

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
        <div>{profile.name}</div>
        <span> {formatedDate(createDate)} </span>
      </div>

      <h2 className={styles.title}> {title} </h2>

      <div className={styles.content}> {content} </div>

      <div className={styles.comments}>
        <AddComment id={id} />

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
