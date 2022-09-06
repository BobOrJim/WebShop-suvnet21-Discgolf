import { Product } from "../components/product/product";
import seedData from "./items.json";

//saveProductsToLocalStorage
export const saveProductsToLocalStorage = (products: Product[]) => {
  localStorage.setItem("products", JSON.stringify(products));
};

//loadProductsFromLocalStorage
export const getProductsFromLocalStorage = (): Product[] => {
  const products = localStorage.getItem("products");
  if (products) {
    return JSON.parse(products);
  }
  return [];
};

//seedIfEmpty
export const seedIfEmpty = () => {
  const products: Product[] = getProductsFromLocalStorage();
  if (products.length === 0) {
    const test: Product[] = seedData;
    console.log(test);
    saveProductsToLocalStorage(seedData);
  }
};
