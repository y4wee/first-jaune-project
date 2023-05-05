import { useEffect, useState } from "react";
import axios from "axios";

import { NetworkContext } from "../context/network";
import { Inetwork } from "../interfaces/network";
import styles from "../styles/network/Network.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Followers from "../components/network/Followers";
import Following from "../components/network/Following";

const Network = () => {
  const [network, setNetwork] = useState<Inetwork>(Object);

  const getNetwork = async (): Promise<void> => {
    try {
      const res = await axios.get(`http://localhost:4000/api/network/${1}`);

      res && setNetwork(res.data);
      console.log(network);
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
      <Following following={network.following} />
      <Followers followers={network.followers} />
      <Footer />
    </NetworkContext.Provider>
  );
};

export default Network;
