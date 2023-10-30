import styles from "./order.module.css";
import { Button } from "@mui/material";

const Order = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.sum}>XXXXXX</div>
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
