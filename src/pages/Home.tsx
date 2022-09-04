import Grid2 from "@mui/material/Unstable_Grid2";
import { CartItem } from "../components/CartItem";
import { useCartContext } from "../context/CartContext";

const Home = () => {
  const { cartItems } = useCartContext();
  return (
    <Grid2 container flexGrow={1} rowSpacing={4} columnSpacing={{ xs: 2, md: 2 }}>
      {cartItems.map((item) => (
        <Grid2 key={item.id} xs={4} md={4} lg={4}>
          <CartItem key={item.id} {...item} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Home;
