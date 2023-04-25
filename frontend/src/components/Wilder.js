import React from "react";
import styles from "./Wilder.module.css";
import Skill from "./Skill";

const Wilder = () => {
    return <div className={styles.home}>
        Wilder card
        <Skill />
    </div>;
};

export default Wilder;