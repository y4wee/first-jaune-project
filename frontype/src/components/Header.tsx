import { NavLink } from "react-router-dom";

import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Wilders Books</h1>

        <ul className={styles.nav}>
          <NavLink
            to="/"
            className={(nav) =>
              nav.isActive ? `${styles.nav} ${styles.navActive}` : ""
            }
          >
            <li className="navigationListLink">Home</li>
          </NavLink>
          <NavLink
            to="/profile"
            className={(nav) =>
              nav.isActive ? `${styles.nav} ${styles.navActive}` : ""
            }
          >
            <li className="navigationListLink">Profile</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
