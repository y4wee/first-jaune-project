import { Iarticle } from "../../interfaces/article";
import styles from "../../styles/Article.module.css";

const Article = ({
  id,
  title,
  content,
  wilderName,
  createDate,
  comments,
}: Iarticle) => {
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
      <div className={styles.header}>
        <div>{wilderName}</div>
        <span> {formatedDate(createDate)} </span>
      </div>

      <h2 className={styles.title}> {title} </h2>

      <div className={styles.content}> {content} </div>

      <div className={styles.comments}>
        
      </div>
    </article>
  );
};

export default Article;
