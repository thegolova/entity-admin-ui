import { ColumnType } from "../table/types";

export type FiltersProps<T> = {
  columns: ColumnType<T>[];
  filters: Record<string, any>;
  onChange: (filters: Record<string, any>) => void;
};
