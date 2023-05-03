import styles from "../../styles/Skill.module.css";
import { Iskill } from "../../interfaces/skill";

const Skill = ({ id, name, grade }: Iskill) => {
  return (
    <li>
      {name}
      <span className={styles.votes}>{grade}</span>
    </li>
  );
};

export default Skill;
