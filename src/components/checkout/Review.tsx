import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useCartContext } from "../../context/CartContext";
import { useProductContext } from "../../context/ProductContext";

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];

interface Props {
  submit: () => void;
  id: string;
}

export default function Review({ submit, id }: Props) {
  const { getAllProducts } = useProductContext();
  const { cartItems } = useCartContext();
  const item = getAllProducts().find((i) => i.id === id);

  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((item) => (
          <ListItem key={item.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={item.id} secondary={item.id} />
            <Typography variant='body2'>{item.quantity}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
      </Grid>
      <Button type='submit' onClick={submit}>
        Confirm
      </Button>
    </React.Fragment>
  );
}
