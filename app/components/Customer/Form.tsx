"use client";

import { useState } from "react";
import { TextField, Button, FormLabel } from "@mui/material";
import styles from "./form.module.css";

const Header = () => {
  const [customerNumber, setCustomerNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/customer?id=${customerNumber}`, {
      method: "GET",
    });

    console.log(await response.json());
  };

  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default Header;
