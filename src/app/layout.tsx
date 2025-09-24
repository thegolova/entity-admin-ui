import React, { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entity Admin UI",
  description: "UI-интерфейс для управления данными",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
