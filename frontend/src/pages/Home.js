import React from "react";
import styles from "./Home.module.css";
import Header from "../components/Header";
import Wilder from "../components/Wilder";

// let testProfile = {
//     name: "Jane Doe",
//     description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//     enim ad minim veniam, quis nostrud exercitation ullamco laboris
//     nisi ut aliquip ex ea commodo consequat.`,
//     skills: ["HTML", "CSS", "React",]
// };

const Home = () => {
    return (
        <div className={styles.home}>
            <Header />

            <section className={styles.section}>
                <h3>Wilders</h3>
                <div className={styles.container}>
                    <Wilder />
                </div>
            </section>
        </div>
    );
};

export default Home;
