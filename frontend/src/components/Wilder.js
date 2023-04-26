import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styles from "./Wilder.module.css";
import Skill from "./Skill";
import blank_pic from "../assets/blank.png";

const Wilder = (props) => {
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
            <div
                className={styles.delete}
                onClick={() => deleteHandler(props.wilder.id)}
            >
                X
            </div>
        </article>
    );
};

Wilder.propTypes = {
    wilder: PropTypes.object.isRequired,
    name: PropTypes.string,
    skills: PropTypes.array,
};

export default Wilder;
