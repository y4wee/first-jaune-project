import { useState, ChangeEvent, FormEvent } from "react";
import axios, { AxiosRequestConfig } from "axios";

import { Iarticle, IcreateComment } from "../../interfaces/article";
import styles from "../../styles/home/Article.module.css";
import ButtonDelete from "../button/ButtonDelete";

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
    wilder: 2,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (comment.content.length > 0 && comment.wilder) {
      try {
        const config: AxiosRequestConfig = {
          method: "post",
          url: "http://localhost:4000/api/comment",
          data: comment,
        };
        await axios(config);
        setComment({
          content: "",
          wilder: 2,
        });
      } catch (error) {
        console.error(error);
      }
    }
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
        <ButtonDelete id={id} path={"/article"} />
      </div>
      <div className={styles.header}>
        <div>{wilderName}</div>
        <span> {formatedDate(createDate)} </span>
      </div>

      <h2 className={styles.title}> {title} </h2>

      <div className={styles.content}> {content} </div>

      <div className={styles.comments}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ajouter un commentaire"
            value={comment.content}
            onChange={handleContentChange}
          />
          <button>post</button>
        </form>
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
