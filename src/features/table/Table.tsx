"use client";

import React, { ReactNode } from "react";

interface ColumnType<T> {
  key: keyof T | string;
  label: string;
  extra?: (item: T) => ReactNode;
}

interface TableType<T> {
  data: T[];
  columns: ColumnType<T>[];
}

const Table = <T extends { id: number | string }>({
  data,
  columns,
}: TableType<T>) => {
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
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td> no data </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td
                    key={column.key as string}
                    className="px-4 py-2 border-b border-gray-200"
                  >
                    {column.extra ? column.extra(item) : item[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
