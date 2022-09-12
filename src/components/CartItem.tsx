import { Button } from "@mui/material";
import { useCartContext } from "../context/CartContext";
import { useProductContext } from "../context/ProductContext";
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
  id: string;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { getAllProducts } = useProductContext();
  const { addOneToCart, removeOneFromCart, removeAllFromCart } = useCartContext();
  const item = getAllProducts().find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div>
      <div>
        {item.name}{" "}
        {quantity > 1 && (
          <span>
            {" "}
            <br></br>
            {quantity} x
          </span>
        )}
        {formatCurrency(item.price)}
        <br></br>
        <span>Subtotal:</span>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>

      <Button variant='text' color='inherit' onClick={() => addOneToCart(item.id)}>
        <span>+</span>
      </Button>
      <Button variant='text' color='inherit' onClick={() => removeOneFromCart(item.id)}>
        <span>-</span>
      </Button>
      <Button variant='text' color='inherit' onClick={() => removeAllFromCart(item.id)}>
        <span>Remove all products of this kind</span>
      </Button>
    </div>
  );
}
