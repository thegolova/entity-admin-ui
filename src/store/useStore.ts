import { pagesMock } from "@/mocks/pages";
import { pricePlansMock } from "@/mocks/pricePlans";
import { productsMock } from "@/mocks/products";
import { StoreType } from "@/types/store";
import { create } from "zustand";

export const useStore = create<StoreType>((set) => ({
  pages: pagesMock,
  products: productsMock,
  pricePlans: pricePlansMock,
  updatePage: (updated) =>
    set((state) => ({
      pages: state.pages.map((p) => (p.id === updated.id ? updated : p)),
    })),
  updateProduct: (updated) =>
    set((state) => ({
      products: state.products.map((p) => (p.id === updated.id ? updated : p)),
    })),
  updatePricePlans: (updated) =>
    set((state) => ({
      pricePlans: state.pricePlans.map((p) =>
        p.id === updated.id ? updated : p
      ),
    })),
}));
