"use client";

import React from "react";
import { FiltersProps } from "./types";

const Filters = <T,>({ columns, filters, onChange }: FiltersProps<T>) => {
  const handleChange = (key: string, value: any) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="p-4 rounded-md border border-gray-300 mb-4 grid grid-cols-3 gap-4">
      {columns.map((column) => {
        if (column.key === "id") return null; // id не фильтруем

        switch (column.type) {
          case "string":
            return (
              <input
                key={column.key as string}
                placeholder={column.label}
                className="border border-gray-300 px-2 py-1 rounded"
                value={filters[column.key as string] || ""}
                onChange={(e) =>
                  handleChange(column.key as string, e.target.value)
                }
              />
            );
          case "number":
            return (
              <div key={column.key as string} className="flex gap-2">
                <input
                  type="number"
                  placeholder={`${column.label} от`}
                  className="border border-gray-300 px-2 py-1 rounded w-1/2"
                  value={filters[`${column.key as string}.from`] || ""}
                  onChange={(e) =>
                    handleChange(`${column.key as string}.from`, e.target.value)
                  }
                />
                <input
                  type="number"
                  placeholder={`${column.label} до`}
                  className="border border-gray-300 px-2 py-1 rounded w-1/2"
                  value={filters[`${column.key as string}.to`] || ""}
                  onChange={(e) =>
                    handleChange(`${column.key as string}.to`, e.target.value)
                  }
                />
              </div>
            );
          case "date":
            return (
              <div key={column.key as string} className="flex gap-2">
                <input
                  type="date"
                  className="border border-gray-300 px-2 py-1 rounded w-1/2"
                  value={filters[`${column.key as string}.from`] || ""}
                  onChange={(e) =>
                    handleChange(`${column.key as string}.from`, e.target.value)
                  }
                />
                <input
                  type="date"
                  className="border border-gray-300 px-2 py-1 rounded w-1/2"
                  value={filters[`${column.key as string}.to`] || ""}
                  onChange={(e) =>
                    handleChange(`${column.key as string}.to`, e.target.value)
                  }
                />
              </div>
            );
          case "boolean":
            return (
              <select
                key={column.key as string}
                className="border border-gray-300 px-2 py-1 rounded"
                value={filters[column.key as string] ?? ""}
                onChange={(e) =>
                  handleChange(column.key as string, e.target.value)
                }
              >
                <option value="">Any</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            );
          case "enum":
            return (
              <select
                key={column.key as string}
                className="border border-gray-300 px-2 py-1 rounded"
                value={filters[column.key as string] || ""}
                onChange={(e) =>
                  handleChange(column.key as string, e.target.value)
                }
              >
                <option value="">All</option>
                {column.enumValues?.map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Filters;
