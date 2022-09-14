import { ProductCategory } from "./ProductCategory";
export type Product = {
  id: string;
  name: string;
  brand: string;
  weight: number;
  color: string;
  imageUrl: string;
  price: number;
  category: ProductCategory;
  type: string;
};

export type ProductCreate = Omit<Product, "id">;
