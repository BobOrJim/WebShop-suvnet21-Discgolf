import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Disc } from "../components/disc/disc";

interface CartProviderProps {
  children: ReactNode;
}

interface ICartContext {
  // cart: Disc[];
  getAllCartItems: () => Disc[];
  addToCart: (product: Disc) => void;
  removeFromCart: (id: string) => void;
}

const CartContext = createContext({} as ICartContext);
//add more functions later like removing all products from cart

/** Custom hook to consume the cart context */
export const useCartContext = (): ICartContext => useContext(CartContext);

function CartContextProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Disc[]>([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function getAllCartItems(): Disc[] {
    return cart;
  }

  const addToCart = (product: Disc) => {
    setCart((currItems) => [...currItems, product]);
  };

  const removeFromCart = (id: string) => {
    setCart((currItems) => currItems.filter((item) => item.id !== id));
    //BUG: currently removes all items with the same id from cart, no matter the type
  };

  return (
    <CartContext.Provider
      value={{ getAllCartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
