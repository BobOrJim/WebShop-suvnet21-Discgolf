import { StoreItem } from "../components/StoreItem";
import seedData from "./items.json";

//saveProductsToLocalStorage
export const saveProductsToLocalStorage = (products: StoreItem[]) => {
  localStorage.setItem("products", JSON.stringify(products));
};

//loadProductsFromLocalStorage
export const getProductsFromLocalStorage = (): StoreItem[] => {
  const products = localStorage.getItem("products");
  if (products) {
    return JSON.parse(products);
  }
  return [];
};

//seedIfEmpty
export const seedIfEmpty = () => {
  const products = getProductsFromLocalStorage();
  if (products.length === 0) {
    saveProductsToLocalStorage(seedData);
  }
};
