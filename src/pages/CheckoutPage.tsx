import { Box } from "@mui/material";
import Checkout from "../components/checkout/Checkout";

const CheckoutPage = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "auto", marginTop: "75px" }}>
      <Checkout></Checkout>
    </Box>
  );
};

export default CheckoutPage;
