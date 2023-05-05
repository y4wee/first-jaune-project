import { useEffect, useState } from "react";
import axios from "axios";

import { IprofileBase } from "../interfaces/profile";
import styles from "../styles/Form.module.css";
import AddWilder from "./form/AddWilder";
import AddSkill from "./form/AddSkill";

const Form = () => {
  const [formOn, setFormOn] = useState<boolean>(false);
  const [profiles, setProfiles] = useState<IprofileBase[]>([]);

  const getProfile = async (): Promise<void> => {
    try {
      const res = await axios.get("http://localhost:4000/api/profiles");

      console.log(res.data);

      res && setProfiles(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <div className={styles.button} onClick={() => setFormOn(true)}>
        ADD
      </div>
      <div
        className={formOn ? styles.overlay : `${styles.overlay} ${styles.off}`}
        onClick={() => setFormOn(false)}
      ></div>
      <div
        className={
          formOn ? styles.container : `${styles.container} ${styles.off}`
        }
      >
        <p>Add Wilder</p>
        <AddWilder />
        <p>Add Skill</p>
        <AddSkill profiles={profiles} />
        <div className={styles.close} onClick={() => setFormOn(false)}>
          X
        </div>
      </div>
    </div>
  );
};

export default Form;
