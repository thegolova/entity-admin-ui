"use client";

import { productFields } from "@/features/config/fieldsConfig";
import Table from "@/features/table/Table";
import { ColumnType } from "@/features/table/types";
import { useStore } from "@/store/useStore";
import { ProductsType } from "@/types/entities";
import React from "react";

const ProductsPage = () => {
  const { products, updateProduct } = useStore();

  const columns: ColumnType<ProductsType>[] = [
    { key: "id", label: "ID", type: "number" },
    { key: "name", label: "Name", type: "string" },
    {
      key: "options.size",
      label: "Size",
      type: "enum",
      enumValues: ["S", "M", "L", "XL"],
    },
    { key: "options.amount", label: "Amount", type: "number" },
    {
      key: "active",
      label: "Active",
      render: (item: ProductsType) => (item.active ? "yes" : "no"),
      type: "boolean",
    },
    {
      key: "createdAt",
      label: "Created At",
      render: (item: ProductsType) =>
        new Date(item.createdAt).toLocaleDateString(),
      type: "date",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Table
        data={products}
        columns={columns}
        fields={productFields}
        onSave={updateProduct}
      />
    </div>
  );
};

export default ProductsPage;
