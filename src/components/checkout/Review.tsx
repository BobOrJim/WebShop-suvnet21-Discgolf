import { Box, Button, Container, List, ListItem, Typography } from "@mui/material";
import Image from "mui-image";
import React from "react";
import { useCartContext } from "../../context/CartContext";
import { useProductContext } from "../../context/ProductContext";
import { formatCurrency } from "../../utils/formatCurrency";

interface Props {
  submit: () => void;
}

type CheckoutItem = {
  name: string;
  price: number;
  amount: number;
  imageUrl: string;
};

export default function Review({ submit }: Props) {
  const { cartItems } = useCartContext();
  const { getAllProducts } = useProductContext();
  const checkoutItems: CheckoutItem[] = [];

  function createCheckoutItem() {
    cartItems.map((item) => {
      const newCheckoutItem: CheckoutItem = {
        name: "",
        price: 0,
        amount: 0,
        imageUrl: "",
      };
      newCheckoutItem.amount = item.quantity;
      const product = getAllProducts().find((i) => i.id === item.id);
      if (product) {
        newCheckoutItem.name = product.name;
        newCheckoutItem.price = product.price;
        newCheckoutItem.imageUrl = product.imageUrl;
      }
      checkoutItems.push(newCheckoutItem);
    });
  }

  createCheckoutItem();
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>

      <List>
        {checkoutItems.map((item, index) => (
          <ListItem key={index}>
            <Image src={item.imageUrl} style={{ minWidth: "100px", paddingRight: "1rem" }} />
            <Box style={{ minWidth: "100px", height: "100px" }}>{item.name}</Box>
            <Container sx={{ display: "flex", justifyContent: "end", gap: "0.5rem" }}>
              <Box>{item.price}kr</Box>
              <Box> x{item.amount}</Box>
            </Container>
          </ListItem>
        ))}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          Total amount:{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = getAllProducts().find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0),
          )}
        </Box>
      </List>

      <Button type='submit' onClick={submit}>
        Confirm
      </Button>
    </React.Fragment>
  );
}
