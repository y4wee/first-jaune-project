import { useState, ChangeEvent, useContext } from "react";

import { HomeContext } from "../../context/home";
import { IcreateComment } from "../../interfaces/article";
import styles from "../../styles/home/AddComment.module.css";

import Post from "../form/Post";

const AddComment = ({ id }: { id: number }) => {
  const [comment, setComment] = useState<IcreateComment>({
    content: "",
    article: id,
    wilder: 1,
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

  return (
    <Post path={"/article/comment"} data={comment} onPosted={onPosted}>
      <input
        type="text"
        placeholder="Ajouter un commentaire"
        value={comment.content}
        onChange={handleContentChange}
      />
      <button>post</button>
    </Post>
  );
};

export default AddComment;
