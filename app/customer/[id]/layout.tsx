"use client";

import { useEffect } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import { useSelector, selectCustomer } from "@/lib/redux";

export default function Layout({ children }) {
  // Redirect to landing page if there is no user data
  const customer = useSelector(selectCustomer);
  const router = useRouter();

  useEffect(() => {
    if (!customer.user) {
      router.push(`/`);
    }
  });

  return <>{children}</>;
}

Layout.propTypes = {
  children: PropTypes.node,
};
