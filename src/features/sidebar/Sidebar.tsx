"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menuItems = [
  { id: 0, name: "Products", href: "/products" },
  { id: 1, name: "Price Plans", href: "/price-plans" },
  { id: 2, name: "Pages", href: "/pages" },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="w-64">
      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={clsx(
              "rounded-lg transition-colors text-xl px-2 py-1",
              pathname === item.href ? "bg-blue-500 text-white" : "hover:bg-gray-200"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
