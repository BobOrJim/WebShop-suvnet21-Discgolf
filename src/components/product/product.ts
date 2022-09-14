<<<<<<< HEAD
import { ProductCategory } from "./ProductCategory";
=======
>>>>>>> ed1bfb2 (make changes to deleted files to bring em back)
export type Product = {
  id: string;
  name: string;
  brand: string;
<<<<<<< HEAD
=======
  speed: number;
  glide: number;
  turn: number;
  fade: number;
>>>>>>> ed1bfb2 (make changes to deleted files to bring em back)
  weight: number;
  color: string;
  imageUrl: string;
  price: number;
<<<<<<< HEAD
  category: ProductCategory;
=======
>>>>>>> ed1bfb2 (make changes to deleted files to bring em back)
  type: string;
};

export type ProductCreate = Omit<Product, "id">;

//get back up
