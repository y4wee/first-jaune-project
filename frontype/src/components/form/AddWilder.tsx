import { useState, ChangeEvent, useContext } from "react";

import { ProfileContext } from "../../context/profile";
import { IcreateWilder } from "../../interfaces/wilder";
import styles from "../../styles/form/AddWilder.module.css";

import Post from "./Post";

const AddWilder = () => {
  const [wilder, setWilder] = useState<IcreateWilder>({
    name: "",
    city: "",
    description: "",
  });
  const { updateWilders } = useContext(ProfileContext);

  const onPosted = () => {
    setWilder({
      name: "",
      city: "",
      description: "",
    });
    updateWilders();
  };

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWilder((wilder) => ({ ...wilder, city: e.target.value }));
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWilder((wilder) => ({ ...wilder, name: e.target.value }));
  };

  return (
    <Post path={"/wilder"} data={wilder} onPosted={onPosted}>
      <div className={styles.input}>
        <label>Name </label>
        <input type="text" value={wilder.name} onChange={handleNameChange} />
      </div>
      <div className={styles.input}>
        <label>City </label>
        <input type="text" value={wilder.city} onChange={handleCityChange} />
      </div>
      <button>ADD</button>
    </Post>
  );
};

export default AddWilder;
