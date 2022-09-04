//discRepo wrappar disc
//discContext wrappar discRepo
//övrigt program använder sedan enbart discContext
//Framtida notering: Om ett api används, så skall context wrappa apiet och vara den enda som skickar requests

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { StoreItem } from "../components/StoreItem";

import {
  getProductsFromLocalStorage,
  saveProductsToLocalStorage,
  seedIfEmpty,
} from "../data/productRepo";

interface ProductProviderProps {
  children: ReactNode;
}

interface IProductContext {
  getAllProducts: () => StoreItem[];
  getProductById: (id: number) => StoreItem;
  addProduct: (product: StoreItem) => void;
  removeProduct: (id: number) => void;
  saveToRepo: () => void;
}

const ProductContext = createContext({} as IProductContext);

export const useProductContext = (): IProductContext => useContext(ProductContext);

function ProductContextProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<StoreItem[]>(getProductsFromLocalStorage());

  useEffect(() => {
    seedIfEmpty();
  }, []);

  function getAllProducts(): StoreItem[] {
    return products;
  }

  function getProductById(id: number): StoreItem {
    const product = products.find((d) => d.id === id);
    if (product === undefined) {
      return {} as StoreItem;
    }
    return product;
  }

  function addProduct(product: StoreItem) {
    setProducts((currItems) => [...currItems, product]);
  }

  function removeProduct(id: number) {
    setProducts((currItems) => currItems.filter((item) => item.id !== id));
  }

  function saveToRepo() {
    saveProductsToLocalStorage(products);
  }

  return (
    <ProductContext.Provider
      value={{
        getAllProducts,
        getProductById,
        addProduct,
        removeProduct,
        saveToRepo,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
