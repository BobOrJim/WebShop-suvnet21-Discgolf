import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { IconButton } from "@mui/material";
import { useCartContext } from "../../context/CartContext";
import { Product } from "../product/product";

type RemoveProductFromCartButtonProps = {
  item: Product;
};

export default function RemoveProductFromCartButton({ item }: RemoveProductFromCartButtonProps) {
  const { removeOneFromCart } = useCartContext();

  return (
    <IconButton onClick={() => removeOneFromCart(item.id)}>
      <RemoveCircleIcon />
    </IconButton>
  );
}
