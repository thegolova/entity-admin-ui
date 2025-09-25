"use client";

import { pagesPageFields } from "@/features/config/fieldsConfig";
import Table from "@/features/table/Table";
import { useStore } from "@/store/useStore";
import { PageType } from "@/types/entities";

const PagesPage = () => {
  const { pages, updatePage } = useStore();

  const columns = [
    { key: "id", label: "ID" },
    { key: "title", label: "Title" },
    {
      key: "active",
      label: "Active",
      render: (item: PageType) => (item.active ? "yes" : "no"),
    },
    {
      key: "updatedAt",
      label: "Updated At",
      render: (item: PageType) => new Date(item.updatedAt).toLocaleDateString(),
    },
    {
      key: "publishedAt",
      label: "Published At",
      render: (item: PageType) =>
        new Date(item.publishedAt).toLocaleDateString(),
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pages</h1>
      <Table
        data={pages}
        columns={columns}
        fields={pagesPageFields}
        onSave={updatePage}
      />
    </div>
  );
};

export default PagesPage;
