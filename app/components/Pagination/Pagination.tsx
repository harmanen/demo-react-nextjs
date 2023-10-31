"use client";

import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { useEffect } from "react";
import styles from "./pagination.module.css";

const Pagination = (props: { props: { customer: number } }) => {
  useEffect(() => {
    // Set initial state if there are no products
    if (Object.keys(props.productsData).length === 0) {
      fetch(
        `https://bakery-3c739d39.digi.loikka.dev/v1/bakery/products?customerNumber=${props.customer}&skip=0&limit=6`,
      )
        .then((response) => response.json())
        .then((data) => props.setProductsData(data));
    }
  });

  return (
    // Display pagination only if metadata exists
    props.productsData?.metadata && (
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
        <div className={styles.page}>{`Page ${
          1 +
          props.productsData.metadata.skip / props.productsData.metadata.limit
        } / ${
          props.productsData.metadata.total / props.productsData.metadata.limit
        }`}</div>
        <div className={styles.amount}>
          Total {props.productsData.metadata.total} products
        </div>
      </div>
    )
  );
};

Pagination.propTypes = {
  customer: PropTypes.string,
  productsData: PropTypes.object,
  setProductsData: PropTypes.func,
};

export default Pagination;
