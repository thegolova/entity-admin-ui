import { PageType, PricePlanType, ProductsType } from "@/types/entities";
import { FieldConfig } from "../modal/types";

export const pagesPageFields: FieldConfig<PageType>[] = [
  {
    name: "title",
    label: "Title",
    type: "text",
    disabled: ({ form }) => !form.active,
  },
  { name: "active", label: "Active", type: "checkbox" },
  { name: "updatedAt", label: "Updated At", type: "date" },
  { name: "publishedAt", label: "Published At", type: "date" },
];

export const pricePlanFields: FieldConfig<PricePlanType>[] = [
  {
    name: "description",
    label: "Description",
    type: "text",
    disabled: ({ form }) => !form.active,
  },
  { name: "active", label: "Active", type: "checkbox" },
  { name: "createdAt", label: "Created At", type: "date" },
  { name: "removedAt", label: "Removed At", type: "date" },
];

export const productFields: FieldConfig<ProductsType>[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    disabled: ({ form }) => !form.active,
  },
  { name: "options.size", label: "Size", type: "text" },
  { name: "options.amount", label: "Amount", type: "number" },
  { name: "active", label: "Active", type: "checkbox" },
  { name: "createdAt", label: "Created At", type: "date" },
];
