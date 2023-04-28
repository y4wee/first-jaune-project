import { useState, ChangeEvent, FormEvent } from "react";
import axios, { AxiosRequestConfig } from "axios";
import styles from "../styles/AddWilder.module.css";
import { Iwilder } from "../interfaces/all";

const AddWilder = () => {
  const [wilder, setWilder] = useState<Iwilder>({
    name: "",
    city: "",
  });

  const submitHandler = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
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
      } catch (error) {
        console.error(error);
      }
    }
  };
  const cityChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setWilder((wilder) => ({ ...wilder, city: e.target.value.toLowerCase() }));
  };
  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setWilder((wilder) => ({ ...wilder, name: e.target.value.toLowerCase() }));
  };
  return (
    <div>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.input}>
          <label>Name </label>
          <input type="text" value={wilder.name} onChange={nameChangeHandler} />
        </div>
        <div className={styles.input}>
          <label>City </label>
          <input type="text" value={wilder.city} onChange={cityChangeHandler} />
        </div>
        <button>ADD</button>
      </form>
    </div>
  );
};

export default AddWilder;
