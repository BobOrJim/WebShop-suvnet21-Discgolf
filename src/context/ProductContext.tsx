import { createContext, ReactNode, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Product, ProductCreate } from "../components/product/product";
import { getProductsFromLocalStorage, saveProductsToLocalStorage } from "../data/productRepo";

interface ProductProviderProps {
  children: ReactNode;
}

interface IProductContext {
  addProduct: (product: ProductCreate) => void;
  getAllProducts: () => Product[];
  getProductById: (id: string) => Product;
  removeProduct: (id: string) => void;
  replaceProduct: (product: Product) => void;
}

const ProductContext = createContext({} as IProductContext);

export const useProductContext = (): IProductContext => useContext(ProductContext);

function ProductContextProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState<Product[]>(getProductsFromLocalStorage());

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
    saveProductsToLocalStorage([...products, newProduct]);
    setProducts([...products, newProduct]);
  }

  function removeProduct(id: string) {
    const newProducts = products.filter((item) => item.id !== id);
    setProducts(newProducts);
    saveProductsToLocalStorage(newProducts);
  }

  function replaceProduct(product: Product) {
    const newProducts = products.map((p) => (p.id === product.id ? product : p));
    setProducts(newProducts);
    saveProductsToLocalStorage(newProducts);
  }

  return (
    <ProductContext.Provider
      value={{
        addProduct,
        getAllProducts,
        getProductById,
        removeProduct,
        replaceProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
