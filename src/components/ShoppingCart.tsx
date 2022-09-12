import { useCartContext } from "../context/CartContext";
import { useProductContext } from "../context/ProductContext";
import { formatCurrency } from "../utils/formatCurrency";
import { CartItem } from "./CartItem";

/*
type ShoppingCartProps = {
  isOpen: boolean;
};*/

//export function ShoppingCart({ isOpen }: ShoppingCartProps) {
export function ShoppingCart() {
  const { cartItems } = useCartContext();
  const { getAllProducts } = useProductContext();
  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div>
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
