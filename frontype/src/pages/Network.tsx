import { useEffect, useState } from "react";
import axios from "axios";

import { NetworkContext } from "../context/network";
import { Iprofile } from "../interfaces/wilder";
import styles from "../styles/network/Network.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Network = () => {
  const [network, setNetwork] = useState<Iprofile>(Object);

  const getNetwork = async (): Promise<void> => {
    try {
      const res = await axios.get(`http://localhost:4000/api/network/${1}`);

      res && setNetwork(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNetwork();
  }, []);

  const updateNetwork = (): void => {
    getNetwork();
  };
  return (
    <NetworkContext.Provider value={{ updateNetwork }}>
      <Header />
      <h1>Network</h1>
      <Footer />
    </NetworkContext.Provider>
  );
};

export default Network;
