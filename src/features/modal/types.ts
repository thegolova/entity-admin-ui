export type FieldType = "text" | "number" | "select" | "checkbox";

export type FieldConfig = {
  name: string;
  label: string;
  type: "text" | "number" | "checkbox";
};

export type EditModalProps<T> = {
  isOpen: boolean;
  onClose: () => void;
  entity: T | null;
  fields: FieldConfig[];
  onSave: (updated: T) => void;
};