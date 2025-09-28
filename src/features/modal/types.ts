export type FieldType = "text" | "number" | "select" | "checkbox" | "date";

export type FieldConfig = {
  name: string;
  label: string;
  type: "text" | "number" | "checkbox" | "date";
};

export type EditModalProps<T> = {
  isOpen: boolean;
  onClose: () => void;
  entity: T | null;
  fields: FieldConfig[];
  onSave: (updated: T) => void;
};