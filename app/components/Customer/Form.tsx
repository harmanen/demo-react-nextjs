"use client";

import { useState } from "react";
import { useDispatch, customerSlice } from "@/lib/redux";
import { useRouter } from "next/navigation";
import {
  TextField,
  Button,
  FormLabel,
  Snackbar,
  Alert,
  AlertTitle,
} from "@mui/material";
import styles from "./form.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [customerNumber, setCustomerNumber] = useState("");
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/customer?id=${customerNumber}`, {
      method: "GET",
    });

    const initialData = await response.json();

    // If there is an error, display a snackbar...
    if (initialData.error) {
      setIsError(true);
      setError(initialData.error);
    } else {
      // ...otherwise update Redux state with customer data and redirect
      router.push(`/customer/${initialData.user}`);
      dispatch(customerSlice.actions.setCustomerData(initialData));
    }
  };

  return (
    <div className={styles.container}>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <FormLabel>Customer Number</FormLabel>
        <div className={styles.input}>
          <TextField
            onChange={(event) => setCustomerNumber(event.target.value)}
            value={customerNumber}
            required
            fullWidth
          />
        </div>
        <div className={styles.button}>
          <Button
            variant="contained"
            type="submit"
          >
            Continue
          </Button>
        </div>
      </form>

      {/* Error snackbar */}
      <Snackbar
        open={isError}
        autoHideDuration={6000}
        onClose={() => setIsError(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="error"
          sx={{ fontSize: 24 }}
        >
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Header;
