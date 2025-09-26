"use client";

import { pricePlanFields } from "@/features/config/fieldsConfig";
import Table from "@/features/table/Table";
import { useStore } from "@/store/useStore";
import { PricePlanType } from "@/types/entities";
import React from "react";

const PricePlansPage = () => {
  const { pricePlans, updatePricePlans } = useStore();

  const columns = [
    { key: "id", label: "ID", type: "number" },
    { key: "description", label: "Description", type: "string" },
    {
      key: "active",
      label: "Active",
      render: (item: PricePlanType) => (item.active ? "yes" : "no"),
      type: "boolean",
    },
    {
      key: "createdAt",
      label: "Created At",
      render: (item: PricePlanType) =>
        new Date(item.createdAt).toLocaleDateString(),
      type: "date",
    },
    {
      key: "removedAt",
      label: "Removed At",
      render: (item: PricePlanType) =>
        item.removedAt ? new Date(item.removedAt).toLocaleDateString() : "—",
      type: "date",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Price Plans</h1>
      <Table
        data={pricePlans}
        columns={columns}
        fields={pricePlanFields}
        onSave={updatePricePlans}
      />
    </div>
  );
};

export default PricePlansPage;
