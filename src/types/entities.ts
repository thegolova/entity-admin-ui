export interface PageType {
  id: number;
  title: string;
  active: boolean;
  updatedAt: string;
  publishedAt: string;
}

export interface ProductsType {
  id: number;
  name: string;
  options: {
    size: string;
    amount: number;
  };
  active: boolean;
  createdAt: string;
}

export interface PricePlanType {
  id: number;
  description: string;
  active: boolean;
  createdAt: string;
  removedAt: string;
}
