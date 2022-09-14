import { ArrowBack } from "@mui/icons-material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
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
        <Box p={0} width='360px' textAlign='center' role='presentation'>
          <Typography variant='h6' component='div'>
            <Box>
              <Button onClick={() => setIsDrawerOpen(false)}>{<ArrowBack />}</Button>
            </Box>
            <ShoppingCart />
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
