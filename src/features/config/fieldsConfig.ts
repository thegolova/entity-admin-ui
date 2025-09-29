import { FieldConfig } from "../modal/types";

export const pagesPageFields: FieldConfig[] = [
  { name: "title", label: "Title", type: "text" },
  { name: "active", label: "Active", type: "checkbox" },
  { name: "updatedAt", label: "Updated At", type: "date" },
  { name: "publishedAt", label: "Published At", type: "date" },
];

export const pricePlanFields: FieldConfig[] = [
  { name: "description", label: "Description", type: "text" },
  { name: "active", label: "Active", type: "checkbox" },
  { name: "createdAt", label: "Created At", type: "date" },
  { name: "removedAt", label: "Removed At", type: "date" },
];

export const productFields: FieldConfig[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    // disabled: ({ entity }) => !entity.active,
  },
  { name: "options.size", label: "Size", type: "text" },
  { name: "options.amount", label: "Amount", type: "number" },
  { name: "active", label: "Active", type: "checkbox" },
  { name: "createdAt", label: "Created At", type: "date" },
];
