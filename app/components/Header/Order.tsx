import { useSelector, selectTotal } from "@/lib/redux";
import styles from "./order.module.css";
import { Button } from "@mui/material";

const Order = () => {
  const total = new Intl.NumberFormat("fi-FI", {
    style: "currency",
    currency: "EUR",
  }).format(useSelector(selectTotal));

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.sum}>{total}</div>
        <div className={styles.status}>isOrdered</div>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          variant="contained"
          onClick={() => alert("TBD")}
          style={{ height: "fit-content" }}
        >
          Order
        </Button>
      </div>
    </div>
  );
};

export default Order;
