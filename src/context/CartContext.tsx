import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Disc } from "../components/disc/disc";

interface ContextValue {
  cart: Disc[];
  addToCart: (product: Disc) => void;
  removeFromCart: (product: Disc) => void;
}

const CartContext = createContext<ContextValue>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  //add more functions later like removing all products from cart
});

interface Props {
  children: ReactNode;
}

function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Disc[]>([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Disc) => {
    setCart((prevState) => [...prevState, product]);
  };

  const removeFromCart = (item: Disc) => {
    //BUG: currently removes all items from cart, no matter the type
    setCart(cart.filter((item) => item.id !== item.id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

/** Custom hook to consume the cart context */
export const useCart = () => useContext(CartContext);

export default CartProvider;
