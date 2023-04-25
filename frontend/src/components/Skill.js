import React from "react";
import styles from "./Skill.module.css";

const Skill = (props) => {
    console.log(props);
    return (
        <li>
            {props.name}
            <span className={styles.votes}>
                {props.id}
            </span>
        </li>
    );
};

export default Skill;
