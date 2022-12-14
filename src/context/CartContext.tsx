import { createContext, ReactNode, useContext, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}

type CartItem = {
  id: string;
  quantity: number;
};

type CartContext = {
  getItemQuantity: (id: string) => void;
  addOneToCart: (id: string) => void;
  removeOneFromCart: (id: string) => void;
  removeAllFromCart: (id: string) => void;
  clearCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

const CartContext = createContext({} as CartContext);

/** Custom hook to consume the cart context */
export function useCartContext() {
  return useContext(CartContext);
}

export function CartContextProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function addOneToCart(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeOneFromCart(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  const removeAllFromCart = (id: string) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        clearCart,
        getItemQuantity,
        addOneToCart,
        removeOneFromCart,
        removeAllFromCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
