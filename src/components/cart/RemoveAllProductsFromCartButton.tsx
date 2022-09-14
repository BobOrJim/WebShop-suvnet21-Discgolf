import { Button, useMediaQuery } from "@mui/material";
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
    <Button
      variant='text'
      color='inherit'
      onClick={() => removeAllFromCart(item.id)}
      sx={{ fontSize: SimpleFontMediaQuery() }}
    >
      <span>Remove product</span>
    </Button>
  );
}

function SimpleFontMediaQuery() {
  let fontSize = 1;

  const matches = useMediaQuery("(min-width:675px)");
  if (!matches) {
    fontSize = 0.8;
  }
  return fontSize + "rem";
}
