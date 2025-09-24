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
    <html>
      <body className="">
        <main className="h-full flex rounded-xl overflow-hidden drop-shadow-[8px_8px_6px_rgba(0,0,0,0.25)] bg-white">
          <div className="flex flex-col p-4 border-r-2 border-gray-300">
            <div className="self-center text-3xl py-4 mb-8"> Admin Panel</div>
            <Sidebar />
          </div>
          <div className="w-full">{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
