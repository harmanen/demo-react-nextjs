"use client";

import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";

export default function Page({ params }: { params: { id: string } }) {
  const [productsData, setProductsData] = useState({});

  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%", height: "400px", border: "1px solid red" }}>
        Customer: {params.id} - Place cards here
      </div>
      <Pagination
        customer={params.id}
        productsData={productsData}
        setProductsData={setProductsData}
      />
    </div>
  );
}
