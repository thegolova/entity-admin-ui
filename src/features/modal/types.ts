export type FieldType = "text" | "number" | "select" | "checkbox" | "date";

export type DisabledField<T = any> =
  | boolean
  | ((context: { form: T; entity: T }) => boolean);

export type FieldConfig<T = any> = {
  name: string;
  label: string;
  type: "text" | "number" | "checkbox" | "date";
  disabled?: DisabledField<T>;
};

export type EditModalProps<T> = {
  isOpen: boolean;
  onClose: () => void;
  entity: T | null;
  fields: FieldConfig<T>[];
  onSave: (updated: T) => void;
};
