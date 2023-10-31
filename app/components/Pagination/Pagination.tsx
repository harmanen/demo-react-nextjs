"use client";

import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import styles from "./pagination.module.css";

const Pagination = (props: { props: { customer: number } }) => {
  const [productsData, setProductsData] = useState({});

  useEffect(() => {
    // Set initial state if there are no products
    if (Object.keys(productsData).length === 0) {
      fetch(
        `https://bakery-3c739d39.digi.loikka.dev/v1/bakery/products?customerNumber=${props.customer}&skip=0&limit=6`,
      )
        .then((response) => response.json())
        .then((data) => setProductsData(data));
    }
  }, [props.customer, productsData]);

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

Pagination.propTypes = {
  customer: PropTypes.string,
};

export default Pagination;
