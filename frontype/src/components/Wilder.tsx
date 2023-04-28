import axios, { AxiosRequestConfig } from "axios";
import styles from "../styles/Wilder.module.css";
import Skill from "./Skill";
import { IpropsWilder, Iskill } from "../interfaces/all";
import blank_pic from "../assets/blank.png";

const Wilder = ({ id, name, skills, city, onchangeWilder }: IpropsWilder) => {
  const deleteHandler = async (id: number): Promise<void> => {
    if (id) {
      try {
        const config: AxiosRequestConfig = {
          method: "delete",
          url: "http://localhost:4000/api/wilder",
          data: { id: id },
        };
        await axios(config);
        onchangeWilder();
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <article className={styles.card}>
      <img src={blank_pic} alt="wilder" />
      <h3>{name}</h3>
      <h2>{city}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className={styles.skills}>
        {skills?.map((skill: Iskill) => (
          <Skill
            key={skill.id}
            id={skill.id}
            name={skill.name}
            grade={skill.grade}
          />
        ))}
      </ul>
      <div className={styles.delete} onClick={() => id && deleteHandler(id)}>
        X
      </div>
    </article>
  );
};

export default Wilder;
