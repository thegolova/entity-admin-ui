"use client";

import Table from "@/features/table/Table";
import React from "react";

const ProductsPage = () => {
  const columns = [
    {
      id: "ID",
      key: "name",
      label: "first",
    },
  ];

  const data = [
    {
      id: 13123,
      name: "aid asd asd asdpasod aad",
    },
  ];

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">Products</h1>
      <Table data={data} columns={columns} />
    </div>
  );
};

export default ProductsPage;
