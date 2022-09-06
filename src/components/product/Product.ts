export type Product = {
  id: string;
  name: string;
  brand: string;
  speed: number;
  glide: number;
  turn: number;
  fade: number;
  weight: number;
  color: string;
  imageUrl: string;
  price: number;
  type: string;
};

export type ProductCreate = Omit<Product, "id">;
