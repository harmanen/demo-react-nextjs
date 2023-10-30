"use client";
import { useSelector, selectCustomer } from "@/lib/redux";
import styles from "./header.module.css";
import Order from "./Order";

const Header = () => {
  const customer = useSelector(selectCustomer);

  return (
    <div className={styles.container}>
      <h1>Oy Pulju AB</h1>
      {customer && <Order />}
    </div>
  );
};

export default Header;
