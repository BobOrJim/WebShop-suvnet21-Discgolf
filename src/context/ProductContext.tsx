//discRepo wrappar disc
//discContext wrappar discRepo
//övrigt program använder sedan enbart discContext
//Framtida notering: Om ett api används, så skall context wrappa apiet och vara den enda som skickar requests

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Product, ProductCreate } from "../components/product/product";
import { getProductsFromLocalStorage, saveProductsToLocalStorage, seedIfEmpty } from "../data/productRepo";
interface ProductProviderProps {
  children: ReactNode;
}

interface IProductContext {
  addProduct: (product: ProductCreate) => void;
  getAllProducts: () => Product[];
  getProductById: (id: string) => Product;
  removeProduct: (id: string) => void;
  saveToRepo: () => void;
  replaceProduct: (product: Product) => void;
}

const ProductContext = createContext({} as IProductContext);

export const useProductContext = (): IProductContext => useContext(ProductContext);

function ProductContextProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>(getProductsFromLocalStorage());

  useEffect(() => {
    seedIfEmpty();
  }, []);

  function getAllProducts(): Product[] {
    return products;
  }

  function getProductById(id: string): Product {
    const product = products.find((d) => d.id === id);
    if (product === undefined) {
      return {} as Product;
    }
    return product;
  }

  function addProduct(product: ProductCreate) {
    const newProduct = {
      id: uuidv4(),
      ...product,
    };
    setProducts([...products, newProduct]);
  }

  function removeProduct(id: string) {
    setProducts((currItems) => currItems.filter((item) => item.id !== id));
  }

  function saveToRepo() {
    saveProductsToLocalStorage(products);
  }

  function replaceProduct(product: Product) {
    const newProducts = products.map((p) => (p.id === product.id ? product : p));
    setProducts(newProducts);
  }

  return (
    <ProductContext.Provider
      value={{
        addProduct,
        getAllProducts,
        getProductById,
        removeProduct,
        saveToRepo,
        replaceProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
