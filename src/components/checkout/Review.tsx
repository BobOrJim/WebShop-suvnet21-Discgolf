import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useCartContext } from "../../context/CartContext";
import { useProductContext } from "../../context/ProductContext";
import { CartItem } from "../CartItem";
import { Product } from "../product/product";

interface Props {
  submit: () => void;
}

export default function Review({ submit }: Props) {
  const { cartItems } = useCartContext();
  const { getAllProducts } = useProductContext();
  const [products, setProducts] = React.useState<Product[]>([]);

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        <>
          {cartItems.map((item) => {
            <CartItem key={item.id} {...item} />;
            const product = getAllProducts().find((i) => i.id === item.id);
            const addProducts = (product: Product) => {
              setProducts((prevState) => [...prevState, product]);
            };
          })}
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary='test' secondary='test 2' />
            <Typography variant='body2'>test 3</Typography>

            <ListItemText primary='Total' />
            <Typography variant='subtitle1' sx={{ fontWeight: 700 }}></Typography>
          </ListItem>
        </>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
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
