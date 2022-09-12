import { Button, List } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
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
    const newCheckoutItem: CheckoutItem = {
      name: "",
      price: 0,
      amount: 0,
      imageUrl: "",
    };
    cartItems.map((item) => {
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
    <>
      <Typography variant='h6' gutterBottom>
        Order summary
      </Typography>

      {checkoutItems.map((item, index) => {
        <div key={index}>{item.name}</div>;
      })}

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <List>
            {/* {checkoutItems.map((item, index) => {
              <ListItem key={index} sx={{ py: 1, px: 0 }}>
                {item.name}
              </ListItem>;
            })} */}
          </List>
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
    </>
  );
}
