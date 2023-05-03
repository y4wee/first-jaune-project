import axios, { AxiosRequestConfig } from "axios";

import { Idelete } from "../../interfaces/button";
import styles from "../../styles/button/ButtonDelete.module.css";

const ButtonDelete = ({ id, path }: Idelete) => {
  const deleteHandler = async (): Promise<void> => {
    if (id) {
      try {
        const config: AxiosRequestConfig = {
          method: "delete",
          url: `http://localhost:4000/api${path}`,
          data: { id: id },
        };
        await axios(config);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className={styles.button} onClick={deleteHandler}>
      X
    </div>
  );
};

export default ButtonDelete;
