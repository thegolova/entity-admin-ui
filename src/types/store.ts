import { PageType, PricePlanType, ProductsType } from "./entities";

export interface StoreType {
  pages: PageType[];
  products: ProductsType[];
  pricePlans: PricePlanType[];
  updatePage: (updated: PageType) => void;
  updateProduct: (updated: ProductsType) => void;
  updatePricePlans: (updated: PricePlanType) => void;
}
