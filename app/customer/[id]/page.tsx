"use client";

import { useState } from "react";
import { Grid } from "@mui/material";
import Pagination from "../../components/Pagination/Pagination";
import Card from "../../components/Card/Card";

export default function Page({ params }: { params: { id: string } }) {
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
