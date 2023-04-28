import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Wilders Books</h1>
      </div>
    </header>
  );
};

export default Header;
