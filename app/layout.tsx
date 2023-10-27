import React from "react";
import { Providers } from "@/lib/providers";
import "./styles/globals.css";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <div>Root layout</div>
          <main>{props.children}</main>
        </body>
      </html>
    </Providers>
  );
}
