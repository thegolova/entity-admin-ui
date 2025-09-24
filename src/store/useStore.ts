import { create } from "zustand";

interface PageType {
  id: number;
  title: string;
  active: boolean;
  updatedAt: string;
  publishedAt: string;
}

interface ProductsType {
  id: number;
  name: string;
  options: {
    size: string;
    amount: number;
  };
  active: boolean;
  createdAt: string;
}

interface PricePlanType {
  id: number;
  description: string;
  active: boolean;
  createdAt: string;
  removedAt: string;
}

interface StoreType {
  pages: PageType[];
  products: ProductsType[];
  pricePlans: PricePlanType[];
}

export const useStore = create<StoreType>((set) => ({
  pages: [
    {
      id: 23634610,
      title: "aliquip sit proident veniam tempor",
      active: false,
      updatedAt: "1948-04-09T10:15:44.0Z",
      publishedAt: "1956-09-25T20:13:19.0Z",
    },
    {
      id: 67303872,
      title: "dolor pariatur et ipsum fugiat",
      active: false,
      updatedAt: "2021-10-23T04:51:35.0Z",
      publishedAt: "1987-02-20T02:45:15.0Z",
    },
  ],
  products: [
    {
      id: 14381328,
      name: "id quis voluptate nostrud",
      options: { size: "XL", amount: 100 },
      active: true,
      createdAt: "1985-08-09T02:10:18.0Z",
    },
    {
      id: 26785188,
      name: "esse elit",
      options: { size: "S", amount: 10 },
      active: true,
      createdAt: "1956-03-20T08:59:40.0Z",
    },
  ],
  pricePlans: [
    {
      id: 13334466,
      description: "aute fugiat commodo id",
      active: false,
      createdAt: "1949-06-21T14:03:32.0Z",
      removedAt: "1960-09-22T13:43:32.0Z",
    },
    {
      id: 38738895,
      description: "esse dolore cillum anim",
      active: false,
      createdAt: "2014-09-09T02:06:07.0Z",
      removedAt: "2006-06-14T18:43:22.0Z",
    },
  ],
}));
