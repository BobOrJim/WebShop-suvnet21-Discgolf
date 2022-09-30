import { Product } from "../components/product/product";
import seedData from "./items.json";
//import AsyncLocalStorage from "@createnextapp/async-local-storage";

export const saveProductsToLocalStorage = (products: Product[]) => {
  localStorage.setItem("products", JSON.stringify(products));
};

export const getProductsFromLocalStorage = (): Product[] => {
  if (localStorage.getItem("products") == null || localStorage.getItem("products") == undefined) {
    console.log(
      "ops Local Storage is empty, the user or David has activly removed it, lets seed before we show the start screen",
    );
    seedIfEmpty();
  }
  const products = localStorage.getItem("products");
  if (products) {
    return JSON.parse(products);
  }
  return [];
};

export const seedIfEmpty = () => {
  saveProductsToLocalStorage(seedData);
};
