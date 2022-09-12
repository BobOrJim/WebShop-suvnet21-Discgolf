import { Box } from "@mui/material";
import Checkout from "../components/checkout/Checkout";
//import { useProductContext } from "../context/ProductContext";

const CheckoutPage = () => {
  //const { getAllProducts } = useProductContext();

  return (
    <Box sx={{ width: "100%", overflowX: "auto", marginTop: "75px" }}>
      {/* {getAllProducts().map((product) => (
        <div key={product.id}>
          <p>{product.id}</p>
        </div>
      ))} */}
      <Checkout></Checkout>
    </Box>
  );
};

export default CheckoutPage;
