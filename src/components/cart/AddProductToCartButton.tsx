import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton } from "@mui/material";
import { useCartContext } from "../../context/CartContext";
import { Product } from "../product/product";

type AddProductToCartButtonProps = {
  item: Product;
};

export default function AddProduct({ item }: AddProductToCartButtonProps) {
  const { addOneToCart } = useCartContext();

  return (
    <IconButton onClick={() => addOneToCart(item.id)}>
      <AddCircleIcon />
    </IconButton>
  );
}
