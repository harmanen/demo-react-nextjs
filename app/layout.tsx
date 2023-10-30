import React from "react";
import { Providers } from "@/lib/providers";
import "./styles/globals.css";
import styles from "./styles/rootLayout.module.css";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html
        lang="en"
        className={styles.container}
      >
        <body className={styles.container}>
          <div className={styles.siteWidth}>Root layout</div>
          <main className={styles.siteWidth}>{props.children}</main>
        </body>
      </html>
    </Providers>
  );
}
