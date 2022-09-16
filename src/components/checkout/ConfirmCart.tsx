import { Box, Button } from "@mui/material";
import { ShoppingCart } from "../ShoppingCart";

interface Props {
  submit: () => void;
}

export default function ConfirmCart({ submit }: Props) {
  return (
    <Box sx={{ width: "100%", overflowX: "auto", marginTop: "75px" }}>
      <ShoppingCart></ShoppingCart>
      <Button type='submit' onClick={submit}>
        NEXT
      </Button>
    </Box>
  );
}
