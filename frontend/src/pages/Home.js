import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styles from "./Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Wilder from "../components/Wilder";
import AddWilder from "../components/AddWilder";

const Home = () => {
    const [wilders, setWilders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:4000/api/wilder");
                setWilders(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    return (
        <main className={styles.home}>
            <Header />

            <AddWilder />

            <section className={styles.section}>
                <h3>Wilders</h3>
                <div className={styles.grid}>
                    {wilders?.map((wilder) => (
                        <div className={styles.container} key={wilder.id}>
                            <Wilder
                                name={wilder.name}
                                skills={wilder.skill}
                                id={wilder.id}
                            />
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
};

Home.propTypes = {
    wilders: PropTypes.array,
    id: PropTypes.number,
    name: PropTypes.string,
    skills: PropTypes.array,
};

export default Home;
