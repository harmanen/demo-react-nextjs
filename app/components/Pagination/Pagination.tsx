import { Button } from "@mui/material";
import styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <Button
          variant="contained"
          style={{ marginRight: "1rem" }}
        >
          ⟪ Previous
        </Button>
        <Button variant="contained">Next ⟫</Button>
      </div>
      <div className={styles.page}>Page X/Y</div>
      <div className={styles.amount}>Total XX products</div>
    </div>
  );
};

export default Pagination;
