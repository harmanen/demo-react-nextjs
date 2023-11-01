import { useSelector, selectTotal, selectCustomer } from "@/lib/redux";
import styles from "./order.module.css";
import { Button } from "@mui/material";

const Order = () => {
  // Format total amount
  const total = new Intl.NumberFormat("fi-FI", {
    style: "currency",
    currency: "EUR",
  }).format(useSelector(selectTotal));

  const { data } = useSelector(selectCustomer);
  const isOrdered = data[0]?.status === "ordered";

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.sum}>{total}</div>
        <div className={styles.status}>
          {isOrdered ? "Ordered" : "Not ordered"}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          variant="contained"
          onClick={() => alert("TBD")}
          style={{ height: "fit-content" }}
          disabled={isOrdered}
        >
          Order
        </Button>
      </div>
    </div>
  );
};

export default Order;
