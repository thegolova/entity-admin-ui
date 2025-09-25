"use client";

import React, { ReactNode, useState } from "react";
import { EditModal } from "../modal/EditModal";
import { FieldConfig } from "../modal/types";

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

  const handleEdit = (entity: T) => () => {
    setEntity(entity);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key as string}
                className="px-4 py-2 text-left border-b border-gray-300"
              >
                {column.label}
              </th>
            ))}
            <th className="px-4 py-2 text-left border-b border-gray-300" />
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="px-4 py-2 text-center"
              >
                No data
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td
                    key={column.key as string}
                    className="px-4 py-2 border-b border-gray-200"
                  >
                    {column.render
                      ? column.render(item)
                      : (item as any)[column.key]}
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
