"use client";

import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./pagination.module.css";
import { BASE_URL, PRODUCTS_PER_PAGE } from "../../constants";

const Pagination = (props: { props: { customer: number } }) => {
  const [page, setPage] = useState(1); // Current page
  const [maxPage, setMaxPage] = useState(1); // Page limit

  useEffect(() => {
    // Set initial state if there are no products
    if (Object.keys(props.productsData).length === 0) {
      fetch(
        `${BASE_URL}v1/bakery/products?customerNumber=${props.customer}&skip=0&limit=${PRODUCTS_PER_PAGE}`,
      )
        .then((response) => response.json())
        .then((data) => {
          // Pass data to page
          props.setProductsData(data);
          // Set max number of pages based on metadata
          setMaxPage(Math.round(data.metadata.total / data.metadata.limit));
        });
    }
  });

  const handleClickNext = () => {
    fetch(
      `${BASE_URL}v1/bakery/products?customerNumber=${props.customer}&skip=${
        page * PRODUCTS_PER_PAGE
      }&limit=${PRODUCTS_PER_PAGE}`,
    )
      .then((response) => response.json())
      .then((data) => {
        props.setProductsData(data);
      });

    setPage(page + 1);
  };

  const handleClickPrevious = () => {
    fetch(
      `${BASE_URL}v1/bakery/products?customerNumber=${props.customer}&skip=${
        (page - 2) * PRODUCTS_PER_PAGE
      }&limit=${PRODUCTS_PER_PAGE}`,
    )
      .then((response) => response.json())
      .then((data) => {
        props.setProductsData(data);
      });

    setPage(page - 1);
  };

  return (
    // Display pagination only if metadata exists
    props.productsData?.metadata && (
      <div className={styles.container}>
        <div className={styles.buttonContainer}>
          <Button
            variant="contained"
            style={{ marginRight: "1rem" }}
            disabled={page <= 1}
            onClick={handleClickPrevious}
          >
            ⟪ Previous
          </Button>
          <Button
            variant="contained"
            disabled={page >= maxPage}
            onClick={handleClickNext}
          >
            Next ⟫
          </Button>
        </div>
        <div className={styles.page}>{`Page ${page} / ${maxPage}`}</div>
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
