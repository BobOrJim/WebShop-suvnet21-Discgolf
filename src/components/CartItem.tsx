import { useProductContext } from "../context/ProductContext";
import { formatCurrency } from "../utils/formatCurrency";
import AddProductToCartButton from "./cart/AddProductToCartButton";
import RemoveAllProductsFromCartButton from "./cart/RemoveAllProductsFromCartButton";
import RemoveProductFromCartButton from "./cart/RemoveProductFromCartButton";

type CartItemProps = {
  id: string;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { getAllProducts } = useProductContext();
  const item = getAllProducts().find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div>
      <div>
        <div>
          <img src={item.imageUrl} height='100px' />
        </div>
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
      <AddProductToCartButton item={item} />
      <RemoveProductFromCartButton item={item} />
      <RemoveAllProductsFromCartButton item={item} />
    </div>
  );
}
