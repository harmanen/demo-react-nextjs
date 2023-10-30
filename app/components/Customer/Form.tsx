"use client";

import { TextField, Button } from "@mui/material";
import styles from "./form.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.text}>Customer Number</h2>
      <div className={styles.input}>
        <TextField fullWidth />
      </div>
      <div className={styles.button}>
        <Button variant="contained">Continue</Button>
      </div>
    </div>
  );
};

export default Header;
