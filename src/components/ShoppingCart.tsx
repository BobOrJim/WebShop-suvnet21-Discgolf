import { useMediaQuery } from "@mui/material";
import { useCartContext } from "../context/CartContext";
import { useProductContext } from "../context/ProductContext";
import { formatCurrency } from "../utils/formatCurrency";
import { CartItem } from "./CartItem";

export function ShoppingCart() {
  const { cartItems } = useCartContext();
  const { getAllProducts } = useProductContext();

  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div style={{ fontSize: SimpleFontMediaQuery() }}>
        Total cart amount:{" "}
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = getAllProducts().find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0),
        )}
      </div>
    </div>
  );
}

function SimpleFontMediaQuery() {
  let fontSize = 1;

  const matches = useMediaQuery("(min-width:675px)");
  if (!matches) {
    fontSize = 0.8;
  }
  return fontSize + "rem";
}
