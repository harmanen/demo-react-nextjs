import { useState } from "react";
import {
  useDispatch,
  useSelector,
  selectTotal,
  selectCustomer,
  selectProducts,
  customerSlice,
} from "@/lib/redux";
import styles from "./order.module.css";
import { Button, Snackbar, Alert, AlertTitle } from "@mui/material";

const Order = () => {
  // Format total amount
  const total = new Intl.NumberFormat("fi-FI", {
    style: "currency",
    currency: "EUR",
  }).format(useSelector(selectTotal));

  // Redux
  const dispatch = useDispatch();
  const { data, user } = useSelector(selectCustomer);
  const selectedProducts = useSelector(selectProducts);

  // Component state (snackbar)
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const handleCloseSnackbar = () => {
    setSnackbar({
      open: false,
      message: "",
      severity: "",
    });
  };

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
      setSnackbar({
        open: true,
        message: responseData.error,
        severity: "error",
      });
    } else {
      dispatch(customerSlice.actions.updateCustomerData(responseData));
      setSnackbar({
        open: true,
        message: "Order placement succeeded!",
        severity: "success",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.sum}>{`Total: ${total}`}</div>
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

      {/* Snackbars */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity={snackbar.severity || "info"}
          sx={{ fontSize: 24 }}
        >
          <AlertTitle>{snackbar.severity.toUpperCase()}</AlertTitle>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Order;
