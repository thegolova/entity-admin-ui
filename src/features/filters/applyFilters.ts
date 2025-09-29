import { getValue } from "@/shared/utils";
import { ColumnType } from "../table/types";

export function applyFilters<T>(
  data: T[],
  filters: Record<string, any>,
  columns: ColumnType<T>[]
): T[] {
  return data.filter((item) => {
    return columns.every((column) => {
      if (column.key === "id") return true;
      const value = getValue(item, column.key as string);

      switch (column.type) {
        case "string": {
          const filterVal = filters[column.key as string];
          if (!filterVal) return true;
          if (value == null) return false;
          return String(value).toLowerCase().includes(filterVal.toLowerCase());
        }
        case "number": {
          if (value == null) return true;
          const from = filters[`${column.key as string}.from`];
          const to = filters[`${column.key as string}.to`];
          if (from && Number(value) < Number(from)) return false;
          if (to && Number(value) > Number(to)) return false;
          return true;
        }
        case "date": {
          if (!value) return true;
          const fromDate = filters[`${column.key as string}.from`];
          const toDate = filters[`${column.key as string}.to`];
          const dateVal = new Date(value);
          if (fromDate && dateVal < new Date(fromDate)) return false;
          if (toDate && dateVal > new Date(toDate)) return false;
          return true;
        }
        case "boolean": {
          const filterVal = filters[column.key as string];
          if (filterVal === "" || filterVal == null) return true;
          return String(value) === filterVal;
        }
        case "enum": {
          const filterVal = filters[column.key as string];
          if (!filterVal) return true;
          return String(value) === filterVal;
        }
        default:
          return true;
      }
    });
  });
}
