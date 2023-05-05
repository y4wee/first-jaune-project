import { useContext } from "react";

import { ProfileContext } from "../../context/profile";
import { IpropsWilder } from "../../interfaces/wilder";
import styles from "../../styles/Wilder.module.css";
import blank_pic from "../../assets/blank.png";

import Skill from "../profile/Skill";
import ButtonDelete from "../button/ButtonDelete";

const Wilder = ({
  id,
  name,
  city,
  description,
  photo,
  skills,
}: IpropsWilder) => {
  const { updateWilders } = useContext(ProfileContext);

  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
  commodo consequat.`;

  return (
    <article className={styles.card}>
      <img src={photo ? photo : blank_pic} alt="wilder" />
      <h3>{name}</h3>
      <h2>{city}</h2>
      <p>{description ? description : lorem}</p>
      <h4>Wild Skills</h4>
      <ul className={styles.skills}>
        {skills?.map((skill) => (
          <Skill
            key={skill.id}
            id={skill.id}
            name={skill.name}
            grade={skill.grade}
          />
        ))}
      </ul>

      <div className={styles.delete}>
        <ButtonDelete id={id} path={"/wilder"} onDeleted={updateWilders} />
      </div>
    </article>
  );
};

export default Wilder;
