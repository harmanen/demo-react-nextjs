import {
  useDispatch,
  useSelector,
  selectTotal,
  selectCustomer,
  selectProducts,
  customerSlice,
} from "@/lib/redux";
import styles from "./order.module.css";
import { Button } from "@mui/material";

const Order = () => {
  // Format total amount
  const total = new Intl.NumberFormat("fi-FI", {
    style: "currency",
    currency: "EUR",
  }).format(useSelector(selectTotal));

  const dispatch = useDispatch();
  const { data, user } = useSelector(selectCustomer);
  const selectedProducts = useSelector(selectProducts);

  const isOrdered = data[0]?.status === "ordered";

  const handleClickOrder = async () => {
    const response = await fetch("/api/order", {
      method: "POST",
      body: JSON.stringify({
        customerNumber: user,
        products: selectedProducts,
      }),
    });

    const responseData = await response.json();

    if (responseData?.error) {
      // Error snackbar
    } else {
      // Success snackbar
      dispatch(customerSlice.actions.updateCustomerData(responseData));
    }
  };

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
          onClick={handleClickOrder}
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
