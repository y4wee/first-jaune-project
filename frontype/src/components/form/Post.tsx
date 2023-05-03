import { FormEvent } from "react";
import axios, { AxiosRequestConfig } from "axios";

import { IForm } from "../../interfaces/form";

const Post = <T extends {}>({ children, path, data, onPosted }: IForm<T>) => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const config: AxiosRequestConfig = {
        method: "post",
        url: `http://localhost:4000/api${path}`,
        data: data,
      };
      data && (await axios(config));
      onPosted && onPosted();
    } catch (error) {
      console.error(error);
    }
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Post;
