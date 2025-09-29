import React, { ReactNode } from "react";
import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/features/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Entity Admin UI",
  description: "UI-интерфейс для управления данными",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="p-6">
        <main className="h-full flex rounded-xl overflow-hidden drop-shadow-[0px_0px_6px__rgba(0,0,0,0.4)] bg-white">
          <div className="flex flex-col p-4 border-r-2 border-gray-300">
            <div className="text-2xl font-bold p-2 mb-4"> Admin Panel</div>
            <Sidebar />
          </div>
          <div className="w-full">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
