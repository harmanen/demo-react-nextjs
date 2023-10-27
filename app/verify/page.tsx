"use client";

import { selectCount } from "@/lib/redux";
import { useSelector } from "react-redux";

export default function VerifyPage() {
  const count = useSelector(selectCount);
  return (
    <>
      <h1>Verify page</h1>
      <p>Count: {count}</p>
    </>
  );
}
