import { NavLink } from "react-router-dom";

import styles from "../styles/Header.module.css";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Network", path: "/network" },
  ];
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Wilders Books</h1>

        <ul className={styles.nav}>
          {navLinks.map((navLink) => (
            <NavLink
              key={navLink.name}
              to={navLink.path}
              className={(nav) =>
                nav.isActive ? `${styles.nav} ${styles.navActive}` : ""
              }
            >
              <li>{navLink.name}</li>
            </NavLink>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
