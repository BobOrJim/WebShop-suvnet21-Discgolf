import { Stack } from "@mui/system";
import { useCartContext } from "../context/CartContext";
import products from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";
import { CartItem } from "./CartItem";
type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useCartContext();
  return (
    <Stack>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div>
        Total amount{" "}
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = products.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)
        )}
      </div>
    </Stack>
  );
}
