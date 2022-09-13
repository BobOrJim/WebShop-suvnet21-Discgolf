import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { ShoppingCart } from "./ShoppingCart";

export default function TempDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { cartQuantity } = useCartContext();

  return (
    <>
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='logo'
        onClick={() => setIsDrawerOpen(true)}
      >
        <ShoppingCartRoundedIcon />
        {cartQuantity}
      </IconButton>
      <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} width='250px' textAlign='center' role='presentation'>
          <Typography variant='h6' component='div'>
            <ShoppingCart />
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
