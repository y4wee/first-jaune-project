import { useState, ChangeEvent, FormEvent } from "react";
import axios, { AxiosRequestConfig } from "axios";

import { Iskill, Iform } from "../../interfaces/all";
import styles from "../../styles/AddSkill.module.css";

const AddSkill = ({ wilders, onchangeWilder }: Iform) => {
  const [skill, setSkill] = useState<Iskill>({
    name: "",
    grade: 0,
    wilder: NaN,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (skill.name.length > 0 && skill.wilder) {
      try {
        const config: AxiosRequestConfig = {
          method: "post",
          url: "http://localhost:4000/api/skill",
          data: skill,
        };
        const res = await axios(config);
        setSkill({
          name: "",
          grade: 0,
          wilder: NaN,
        });
        console.log(res.data);
        onchangeWilder();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSkill((skill) => ({ ...skill, name: e.target.value }));
  };

  const handleGradeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSkill((skill) => ({ ...skill, grade: +e.target.value }));
  };

  const handlewilderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSkill((skill) => ({ ...skill, wilder: +e.target.value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.input}>
          <label>Name </label>
          <input type="text" value={skill.name} onChange={handleNameChange} />
        </div>
        <div className={styles.input}>
          <label>Grade : {skill.grade} </label>
          <input
            type="range"
            min="0"
            max="10"
            value={skill.grade}
            onChange={handleGradeChange}
          />
        </div>
        <div className={styles.select}>
          <label htmlFor="wilder_select">Choose a Wilder</label>
          <select
            name="wilders"
            id="wilder_select"
            onChange={handlewilderChange}
          >
            <option value={undefined}>--Choose a Wilder--</option>
            {wilders?.map((wilder) => (
              <option key={wilder.id} value={wilder.id}>
                {wilder.name}
              </option>
            ))}
          </select>
        </div>

        <button>ADD</button>
      </form>
    </div>
  );
};

export default AddSkill;
