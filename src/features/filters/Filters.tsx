"use client";

import React from "react";
import { FiltersProps } from "./types";

const Filters = <T,>({ columns, filters, onChange }: FiltersProps<T>) => {
  const handleChange = (key: string, value: any) => {
    onChange({ ...filters, [key]: value });
  };

  const handleDateChange = (
    baseKey: string,
    bound: "from" | "to",
    nextValue: string
  ) => {
    const fromKey = `${baseKey}.from`;
    const toKey = `${baseKey}.to`;
    const currFrom = (filters[fromKey] ?? "") as string;
    const currTo = (filters[toKey] ?? "") as string;

    const nextFilters = {
      ...filters,
      [bound === "from" ? fromKey : toKey]: nextValue,
    };

    if (nextValue) {
      if (bound === "from") {
        const nextFrom = nextValue;
        const to = currTo;
        if (to && nextFrom > to) {
          nextFilters[toKey] = nextFrom;
        }
      } else {
        const nextTo = nextValue;
        const from = currFrom;
        if (from && nextTo < from) {
          nextFilters[fromKey] = nextTo;
        }
      }
    }

    onChange(nextFilters);
  };

  const hasActiveFilters = Object.keys(filters).some(
    (k) => filters[k] !== "" && filters[k] != null
  );

  const resetAllFilters = () => {
    const next = { ...filters };
    columns.forEach((column) => {
      if (column.key === "id") return;
      const baseKey = column.key as string;
      delete next[baseKey];
      delete next[`${baseKey}.from`];
      delete next[`${baseKey}.to`];
    });
    onChange(next);
  };

  return (
    <div className="flex flex-col">
      <div className="p-4 rounded-md border border-gray-300 grid grid-cols-3 gap-4">
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
                      handleChange(
                        `${column.key as string}.from`,
                        e.target.value
                      )
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
            case "date": {
              //TODO:
              const baseKey = column.key as string;
              const fromKey = `${baseKey}.from`;
              const toKey = `${baseKey}.to`;
              const fromValue = (filters[fromKey] ?? "") as string;
              const toValue = (filters[toKey] ?? "") as string;

              return (
                <div key={baseKey} className="flex gap-2">
                  <label className="text-base font-medium self-center">
                    {" "}
                    from:{" "}
                  </label>
                  <input
                    type="date"
                    className="border border-gray-300 px-2 py-1 rounded w-1/2"
                    max={toValue || undefined}
                    value={fromValue}
                    onChange={(e) =>
                      handleDateChange(baseKey, "from", e.target.value)
                    }
                    aria-invalid={Boolean(
                      toValue && fromValue && fromValue > toValue
                    )}
                  />
                  <label className="text-base font-medium self-center">
                    {" "}
                    to:{" "}
                  </label>
                  <input
                    type="date"
                    className="border border-gray-300 px-2 py-1 rounded w-1/2"
                    min={fromValue || undefined}
                    value={toValue}
                    onChange={(e) =>
                      handleDateChange(baseKey, "to", e.target.value)
                    }
                    aria-invalid={Boolean(
                      toValue && fromValue && toValue < fromValue
                    )}
                  />
                </div>
              );
            }
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

      <div className="flex flex-col">
        <div className="my-2 self-end">
          <button
            type="button"
            onClick={resetAllFilters}
            disabled={!hasActiveFilters}
            className="text-sm px-3 py-1 rounded-md border border-gray-300
            hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
          >
            Reset All Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
