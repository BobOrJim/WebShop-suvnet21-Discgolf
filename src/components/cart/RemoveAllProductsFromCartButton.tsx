import { Button } from "@mui/material";
import { useCartContext } from "../../context/CartContext";
import { Product } from "../product/product";

type RemoveAllProductsFromCartButtonProps = {
  item: Product;
};

export default function RemoveAllProductsFromCartButton({
  item,
}: RemoveAllProductsFromCartButtonProps) {
  const { removeAllFromCart } = useCartContext();

  return (
    <Button variant='text' color='inherit' onClick={() => removeAllFromCart(item.id)}>
      <span>Remove all products of this kind</span>
    </Button>
  );
}
