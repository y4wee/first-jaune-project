import React from "react";
import styles from "./Wilder.module.css";
import Skill from "./Skill";
import blank_pic from "../assets/blank.png";

const Wilder = (props) => {
    return (
        <article className={styles.card}>
            <img src={blank_pic} alt="wilder" />
            <h3>{props.wilder.name}</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
            <h4>Wild Skills</h4>
            <ul className={styles.skills}>
                {props.wilder.skill.map((skill) => (
                    <Skill key={skill.id} name={skill.name} />
                ))}
            </ul>
            <Skill />
        </article>
    );
};

export default Wilder;
