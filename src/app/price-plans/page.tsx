"use client";

import Table from "@/features/table/Table";
import { useStore } from "@/store/useStore";
import { PricePlanType } from "@/types/entities";
import React from "react";

const PricePlansPage = () => {
  const pricePlans = useStore((state) => state.pricePlans);

  const columns = [
    { key: "id", label: "ID" },
    { key: "description", label: "Description" },
    {
      key: "active",
      label: "Active",
      render: (item: PricePlanType) => (item.active ? "yes" : "no"),
    },
    {
      key: "createdAt",
      label: "Created At",
      render: (item: PricePlanType) =>
        new Date(item.createdAt).toLocaleDateString(),
    },
    {
      key: "removedAt",
      label: "Removed At",
      render: (item: PricePlanType) =>
        item.removedAt ? new Date(item.removedAt).toLocaleDateString() : "—",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Price Plans</h1>
      <Table data={pricePlans} columns={columns} />
    </div>
  );
};

export default PricePlansPage;
