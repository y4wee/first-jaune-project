import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Wilder from "../components/Wilder";
import { Iwilder } from "../interfaces/all";
import AddWilder from "../components/AddWilder";

const Home = () => {
  const [wilders, setWilders] = useState<Iwilder[]>([]);

  const getWilders = async (): Promise<void> => {
    try {
      const res = await axios.get("http://localhost:4000/api/wilder");
      res && setWilders(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWilders();
  }, []);

  const updateWilders = (): void => {
    getWilders();
  };
  return (
    <main className={styles.home}>
      <Header />

      <AddWilder onchangeWilder={updateWilders} />

      <section className={styles.section}>
        <h3>Wilders</h3>
        <div className={styles.grid}>
          {wilders?.map((wilder) => (
            <div className={styles.container} key={wilder.id}>
              <Wilder
                name={wilder.name}
                skills={wilder.skills}
                id={wilder.id}
                city={wilder.city}
                description={wilder.description}
                onchangeWilder={updateWilders}
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
