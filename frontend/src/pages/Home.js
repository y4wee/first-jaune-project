import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import Header from "../components/Header";
import Wilder from "../components/Wilder";

const Home = () => {
    const [wilders, setWilders] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/wilder")
            .then((res) => {
                setWilders(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <main className={styles.home}>
            <Header />

            <section className={styles.section}>
                <h3>Wilders</h3>
                <div className={styles.grid}>
                    {wilders?.map((wilder) => (
                        <div className={styles.container} key={wilder.id}>
                            <Wilder wilder={wilder} />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Home;
