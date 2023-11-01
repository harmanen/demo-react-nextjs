"use client";
import { useSelector, selectCustomer } from "@/lib/redux";
import styles from "./header.module.css";
import Order from "./Order";

const Header = () => {
  const customer = useSelector(selectCustomer);

  return (
    <div className={styles.container}>
      <h1>Ab Yritys Oy</h1>
      {customer?.user && <Order />}
    </div>
  );
};

export default Header;
