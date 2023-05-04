import { useState } from "react";

import { Iform } from "../../interfaces/wilder";
import styles from "../../styles/Form.module.css";
import AddWilder from "../form/AddWilder";
import AddSkill from "../form/AddSkill";

const Form = ({ wilders }: Iform) => {
  const [formOn, setFormOn] = useState<boolean>(false);

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
        <AddSkill wilders={wilders} />
        <div className={styles.close} onClick={() => setFormOn(false)}>
          X
        </div>
      </div>
    </div>
  );
};

export default Form;
