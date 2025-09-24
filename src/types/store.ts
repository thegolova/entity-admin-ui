import { PageType, PricePlanType, ProductsType } from "./entities";

export interface StoreType {
  pages: PageType[];
  products: ProductsType[];
  pricePlans: PricePlanType[];
}