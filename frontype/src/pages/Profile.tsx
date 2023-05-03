import { useEffect, useState } from "react";
import axios from "axios";

import { ProfileContext } from "../context/profile";
import { Iwilder } from "../interfaces/wilder";
import styles from "../styles/Profile.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Wilder from "../components/profile/Wilder";
import Form from "../components/profile/Form";

const Profile = () => {
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
    <ProfileContext.Provider value={{ updateWilders }}>
      <main className={styles.profile}>
        <Header />

        <Form wilders={wilders} />

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
                />
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </ProfileContext.Provider>
  );
};

export default Profile;
