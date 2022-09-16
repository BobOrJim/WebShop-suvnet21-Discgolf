import { Box, Stack } from "@mui/material";
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
    <Stack direction='row'>
      <img src={item.imageUrl} height='100px' />
      <Stack direction='column' sx={{ alignItems: "center", minWidth: "250px" }}>
        <Box>{item.name}</Box>
        <Box>{quantity > 1 && <span>{quantity} x </span>}</Box>
        <Box>{formatCurrency(item.price)}</Box>
        Subtotal:
        {formatCurrency(item.price * quantity)}
        <Stack direction='row'>
          <AddProductToCartButton item={item} />
          <RemoveProductFromCartButton item={item} />
        </Stack>
        <RemoveAllProductsFromCartButton item={item} />
      </Stack>
    </Stack>
  );
}
