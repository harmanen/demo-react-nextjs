"use client";

import { useState, useEffect } from "react";
import {
  useDispatch,
  useSelector,
  selectCustomer,
  selectProducts,
  productSlice,
} from "@/lib/redux";
import { Grid } from "@mui/material";
import Pagination from "../../components/Pagination/Pagination";
import Card from "../../components/Card/Card";

export default function Page({ params }: { params: { id: string } }) {
  // Populate Redux state with data if order has already been made
  const dispatch = useDispatch();
  const customer = useSelector(selectCustomer);
  const selectedProducts = useSelector(selectProducts);

  useEffect(() => {
    if (
      customer.data[0].status === "ordered" &&
      selectedProducts.length === 0
    ) {
      customer.data[0].products.forEach((item) => {
        dispatch(
          productSlice.actions.addProduct({
            product: item.id,
            amount: item.amount,
          }),
        );
      });
    }
  });

  // Products to show on Grid
  const [productsData, setProductsData] = useState({});

  return (
    <div style={{ width: "100%" }}>
      <Grid container>
        {productsData?.data &&
          productsData?.metadata &&
          productsData.data.map((product, index) => (
            <Grid
              item
              xs={4}
              key={index}
            >
              <div style={{ padding: "0.5rem" }}>
                <Card
                  data={product}
                  index={index + productsData.metadata.skip}
                />
              </div>
            </Grid>
          ))}
      </Grid>
      <Pagination
        customer={params.id}
        productsData={productsData}
        setProductsData={setProductsData}
      />
    </div>
  );
}
