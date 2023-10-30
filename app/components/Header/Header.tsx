"use client";

import styles from "./header.module.css";
import Order from "./Order";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Oy Pulju AB</h1>
      <Order />
    </div>
  );
};

export default Header;
