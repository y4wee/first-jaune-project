import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

import { ProfileContext } from "../context/profile";
import { Iprofile } from "../interfaces/wilder";
import styles from "../styles/profile/Profile.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Details from "../components/profile/Details";

const Profile = () => {
  const [profile, setProfile] = useState<Iprofile>(Object);

  const getProfile = async (): Promise<void> => {
    try {
      const config: AxiosRequestConfig = {
        method: "get",
        url: "http://localhost:4000/api/profile/id",
        data: { id: 1 },
      };
      const res = await axios(config);
      res && setProfile(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const updateProfile = (): void => {
    getProfile();
  };
  return (
    <ProfileContext.Provider value={{ updateProfile }}>
      <main className={styles.profile}>
        <Header />

        <Details
          name={profile.name}
          city={profile.city}
          description={profile.description}
          photo={profile.photo}
        />

        <Footer />
      </main>
    </ProfileContext.Provider>
  );
};

export default Profile;
