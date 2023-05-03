import axios, { AxiosRequestConfig } from "axios";

import { Idelete } from "../../interfaces/button";
import styles from "../../styles/button/ButtonDelete.module.css";

const ButtonDelete = ({ id, path, onDeleted }: Idelete) => {
  const deleteHandler = async (): Promise<void> => {
    if (id) {
      try {
        const config: AxiosRequestConfig = {
          method: "delete",
          url: `http://localhost:4000/api${path}`,
          data: { id: id },
        };
        console.log(config)
        await axios(config);
        onDeleted && onDeleted();
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
