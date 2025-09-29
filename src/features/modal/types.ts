export type FieldType = "text" | "number" | "select" | "checkbox" | "date";

/* export type DisabledField =
  | boolean
  | ((context: { form: any; entity: any }) => boolean); */

export type FieldConfig = {
  name: string;
  label: string;
  type: "text" | "number" | "checkbox" | "date";
  // disabled?: DisabledField;
};

export type EditModalProps<T> = {
  isOpen: boolean;
  onClose: () => void;
  entity: T | null;
  fields: FieldConfig[];
  onSave: (updated: T) => void;
};
