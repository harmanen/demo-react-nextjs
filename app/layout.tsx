import React from "react";
import { Providers } from "@/lib/providers";
import CssBaseline from "@mui/material/CssBaseline";
import "./styles/globals.css";
import styles from "./styles/rootLayout.module.css";
import Header from "./components/Header/Header";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <CssBaseline />
      <html
        lang="en"
        className={styles.container}
      >
        <body className={styles.container}>
          <div className={styles.siteWidth}>
            <Header />
          </div>
          <main className={styles.siteWidth}>{props.children}</main>
        </body>
      </html>
    </Providers>
  );
}
