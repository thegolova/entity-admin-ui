import { FieldConfig } from "../modal/types";

export const pagesPageFields: FieldConfig[] = [
  { name: "title", label: "Title", type: "text" },
  { name: "active", label: "Active", type: "checkbox" },
  { name: "updatedAt", label: "Updated At", type: "text" },
  { name: "publishedAt", label: "Published At", type: "text" },
];
