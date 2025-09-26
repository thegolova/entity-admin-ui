"use client";

import React, { ReactNode, useMemo, useState } from "react";
import { EditModal } from "../modal/EditModal";
import { FieldConfig } from "../modal/types";
import clsx from "clsx";
import { getValue } from "@/shared/utils";

interface ColumnType<T> {
  key: keyof T | string;
  label: string;
  render?: (item: T) => ReactNode;
}

interface TableType<T> {
  data: T[];
  columns: ColumnType<T>[];
  fields: FieldConfig[];
  onSave: (entity: T) => void;
}

const Table = <T extends { id: number | string }>({
  data,
  columns,
  fields,
  onSave,
}: TableType<T>) => {
  const [entity, setEntity] = useState<T | null>(null);
  const [sortData, setSortData] = useState<{
    key: keyof T | string;
    type: "asc" | "desc";
  } | null>(null);

  console.log({
    data,
    sortData,
  });

  const handleEdit = (entity: T) => () => {
    setEntity(entity);
  };

  const handleSort = (key: keyof T | string, type: string) => () => {
    setSortData(() => {
      if (type === "asc") {
        return { key, type: "asc" };
      }
      return { key, type: "desc" };
    });
  };

  const sortedData = useMemo(() => {
    if (!sortData) return data;
    const { key, type } = sortData;

    return [...data].sort((a, b) => {
      const _a = getValue(a, key as string);
      const _b = getValue(b, key as string);

      if (_a == null) return 1;
      if (_b == null) return -1;

      if (_a < _b) return type === "asc" ? -1 : 1;
      if (_a > _b) return type === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortData]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key as string}
                className="px-4 py-2 text-left border-b border-gray-300 cursor-pointer "
              >
                <div className="flex items-center">
                  {column.label}
                  {
                    //TODO: вынести в отдельный компонент svg
                    <div className="ml-2">
                      <div onClick={handleSort(column.key, "asc")}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          className={clsx(
                            "hover:fill-black",
                            sortData?.key === column.key &&
                              sortData?.type === "asc"
                              ? "fill-black"
                              : "fill-gray-400"
                          )}
                        >
                          <path d="m21.74 18.03-8-14.02c-.77-1.34-2.72-1.34-3.48 0l-8 14.02C1.5 19.35 2.47 21 4 21h15.99c1.53 0 2.5-1.64 1.74-2.97Z" />
                        </svg>
                      </div>
                      <div onClick={handleSort(column.key, "desc")}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                          className={clsx(
                            "hover:fill-black",
                            sortData?.key === column.key &&
                              sortData?.type === "desc"
                              ? "fill-black"
                              : "fill-gray-400"
                          )}
                        >
                          <path d="M20 3H4C2.47 3 1.5 4.64 2.26 5.97l8 14.02c.77 1.34 2.72 1.34 3.48 0l8-14.02C22.5 4.64 21.53 3 20 3" />
                        </svg>
                      </div>
                    </div>
                  }
                </div>
              </th>
            ))}
            <th className="px-4 py-2 text-left border-b border-gray-300" />
          </tr>
        </thead>
        <tbody>
          {sortedData.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="px-4 py-2 text-center"
              >
                No data
              </td>
            </tr>
          ) : (
            sortedData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td
                    key={column.key as string}
                    className="px-4 py-2 border-b border-gray-200"
                  >
                    {column.render
                      ? column.render(item)
                      : getValue(item, column.key as string)}
                  </td>
                ))}
                <td className="px-4 py-2 border-b border-gray-200">
                  <button
                    className="border border-blue-500
                    text-sm text-blue-500
                    px-2 py-1 rounded-md cursor-pointer
                    hover:text-white hover:bg-blue-500"
                    onClick={handleEdit(item)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <EditModal
        isOpen={!!entity}
        onClose={() => setEntity(null)}
        entity={entity}
        fields={fields}
        onSave={(updated) => {
          onSave(updated);
          setEntity(null);
        }}
      />
    </div>
  );
};

export default Table;
