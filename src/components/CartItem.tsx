import { Button } from "@mui/material";
import { useCartContext } from "../context/CartContext";
import products from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeAllFromCart } = useCartContext();
  const item = products.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div>
      <div>
        {item.name} {quantity > 1 && <span> x{quantity}</span>}
        {formatCurrency(item.price)}
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button onClick={() => removeAllFromCart(item.id)}>remove </Button>
    </div>
  );
}
