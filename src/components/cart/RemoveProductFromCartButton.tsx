import { Button } from "@mui/material";
import { useCartContext } from "../../context/CartContext";
import { Product } from "../product/product";

type RemoveProductFromCartButtonProps = {
  item: Product;
};

export default function RemoveProductFromCartButton({ item }: RemoveProductFromCartButtonProps) {
  const { removeOneFromCart } = useCartContext();

  return (
    <Button variant='text' color='inherit' onClick={() => removeOneFromCart(item.id)}>
      <span>-</span>
    </Button>
  );
}
