import { ReactNode } from "react";
import { FieldConfig } from "../modal/types";

export interface ColumnType<T> {
  key: keyof T | string;
  label: string;
  render?: (item: T) => ReactNode;
  type: "string" | "number" | "date" | "boolean" | "enum";
  enumValues?: string[];
}

export interface TableType<T> {
  data: T[];
  columns: ColumnType<T>[];
  fields: FieldConfig<T>[]; // ⬅️ было без <T>
  onSave: (entity: T) => void;
}
