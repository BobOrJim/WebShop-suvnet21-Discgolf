import { Product } from "../components/product/product";
import seedData from "./items.json";

export const saveProductsToLocalStorage = (products: Product[]) => {
  localStorage.setItem("products", JSON.stringify(products));
};

export const getProductsFromLocalStorage = (): Product[] => {
  const products = localStorage.getItem("products");
  if (products) {
    return JSON.parse(products);
  }
  return [];
};

export const seedIfEmpty = () => {
  const products: Product[] = getProductsFromLocalStorage();
  if (products.length === 0) {
    saveProductsToLocalStorage(seedData);
  }
};
