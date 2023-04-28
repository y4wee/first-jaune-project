import styles from "../styles/Skill.module.css";
import { Iskill } from "../interfaces/all";

const Skill = ({ id, name, grade }: Iskill) => {
  return (
    <li>
      {name}
      <span className={styles.votes}>{grade}</span>
    </li>
  );
};

export default Skill;
