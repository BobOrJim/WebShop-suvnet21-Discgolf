import { Button } from "@mui/material";
import { useCartContext } from "../../context/CartContext";
import { Product } from "../product/product";

type AddProductToCartButtonProps = {
  item: Product;
};

export default function AddProduct({ item }: AddProductToCartButtonProps) {
  const { addOneToCart } = useCartContext();

  return (
    <Button variant='text' color='inherit' onClick={() => addOneToCart(item.id)}>
      <span>+</span>
    </Button>
  );
}
