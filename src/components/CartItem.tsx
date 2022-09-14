import { useMediaQuery } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
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
    <Grid2
      container
      flexGrow={1}
      rowSpacing={1}
      columnSpacing={{ xs: 2 }}
      sx={{ display: "flex", justifyContent: "center", fontSize: SimpleFontMediaQuery() }}
    >
      <img src={item.imageUrl} height='100px' />
      {item.name}
      {quantity > 1 && <span>{quantity} x </span>}
      {formatCurrency(item.price)}
      Subtotal:
      {formatCurrency(item.price * quantity)}
      <AddProductToCartButton item={item} />
      <RemoveProductFromCartButton item={item} />
      <RemoveAllProductsFromCartButton item={item} />
    </Grid2>
  );
}

function SimpleFontMediaQuery() {
  let fontSize = 1;

  const matches = useMediaQuery("(min-width:675px)");
  if (!matches) {
    fontSize = 0.7;
  }
  return fontSize + "rem";
}
