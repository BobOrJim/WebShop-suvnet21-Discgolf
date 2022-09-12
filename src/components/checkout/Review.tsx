import { Button, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { useCartContext } from "../../context/CartContext";
import { useProductContext } from "../../context/ProductContext";

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
  // const [products, setProducts] = useState<Product[]>([]);
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
            <div>{item.name}</div>
            <div>{item.price}</div>
          </ListItem>
        ))}
      </List>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          {/* {checkoutItems.map((item, index) => {
              <ListItem key={index} sx={{ py: 1, px: 0 }}>
                {item.name}
              </ListItem>;
            })} */}
          {/* <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary='test' secondary='test 2' />

            <Typography variant='body2'></Typography>
            <ListItemText primary='Total' />
            <Typography variant='subtitle1' sx={{ fontWeight: 700 }}></Typography>
          </ListItem>
          <Typography gutterBottom>John Smith</Typography>
          {/* <Typography gutterBottom>{addresses.join(", ")}</Typography> */}
        </Grid>
      </Grid>
      <Button type='submit' onClick={submit}>
        Confirm
      </Button>
    </React.Fragment>
  );
}
