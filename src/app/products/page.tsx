"use client";

import Table from "@/features/table/Table";
import { useStore } from "@/store/useStore";
import { ProductsType } from "@/types/entities";
import React from "react";

const ProductsPage = () => {
  const { products } = useStore();

  console.log("products", products);

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    {
      key: "size",
      label: "Size",
      render: (item: ProductsType) => item.options.size,
    },
    {
      key: "amount",
      label: "Amount",
      render: (item: ProductsType) => item.options.amount,
    },
    {
      key: "active",
      label: "Active",
      render: (item: ProductsType) => (item.active ? "yes" : "no"),
    },
    {
      key: "createdAt",
      label: "Created At",
      render: (item: ProductsType) =>
        new Date(item.createdAt).toLocaleDateString(),
    },
  ];
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Table data={products} columns={columns} />
    </div>
  );
};

export default ProductsPage;
