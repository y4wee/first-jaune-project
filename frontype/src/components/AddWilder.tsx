import { useState, ChangeEvent, FormEvent } from "react";
import axios, { AxiosRequestConfig } from "axios";

import { Iwilder, IpropsAddWilder } from "../interfaces/all";
import styles from "../styles/AddWilder.module.css";

const AddWilder = ({ onchangeWilder }: IpropsAddWilder) => {
  const [wilder, setWilder] = useState<Iwilder>({
    name: "",
    city: "",
  });
  const [formOn, setFormOn] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (wilder.name.length > 0 && wilder.city.length > 0) {
      try {
        const config: AxiosRequestConfig = {
          method: "post",
          url: "http://localhost:4000/api/wilder",
          data: wilder,
        };
        await axios(config);
        setWilder({ name: "", city: "" });
        onchangeWilder();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWilder((wilder) => ({ ...wilder, city: e.target.value.toLowerCase() }));
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWilder((wilder) => ({ ...wilder, name: e.target.value.toLowerCase() }));
  };

  return (
    <div>
      <div className={styles.button} onClick={() => setFormOn(true)}>
        ADD WILDER
      </div>
      <div
        onClick={() => setFormOn(false)}
        className={formOn ? styles.overlay : `${styles.overlay} ${styles.off}`}
      ></div>
      <div
        className={
          formOn ? styles.container : `${styles.container} ${styles.off}`
        }
      >
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.input}>
            <label>Name </label>
            <input
              type="text"
              value={wilder.name}
              onChange={handleNameChange}
            />
          </div>
          <div className={styles.input}>
            <label>City </label>
            <input
              type="text"
              value={wilder.city}
              onChange={handleCityChange}
            />
          </div>
          <button>ADD</button>
        </form>

        <div className={styles.close} onClick={() => setFormOn(false)}>
          X
        </div>
      </div>
    </div>
  );
};

export default AddWilder;
