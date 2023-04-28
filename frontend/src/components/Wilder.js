import React from "react";
import axios from "axios";
import styles from "./Wilder.module.css";
import Skill from "./Skill";
import blank_pic from "../assets/blank.png";

const Wilder = ({ id, name, skills }) => {
  const deleteHandler = (id) => {
    if (id) {
      axios.delete("http://localhost:4000/api/wilder", {
        id: id,
      });
    }
  };
  return (
    <article className={styles.card}>
      <img src={blank_pic} alt="wilder" />
      <h3>{name}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className={styles.skills}>
        {skills?.map((skill) => (
          <Skill key={skill.id} name={skill.name} />
        ))}
      </ul>
      <div className={styles.delete} onClick={() => deleteHandler(id)}>
        X
      </div>
    </article>
  );
};

export default Wilder;
