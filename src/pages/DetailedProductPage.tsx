import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Container } from "@mui/material";
import Image from "mui-image";
import { useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useProductContext } from "../context/ProductContext";

const DetailedProductPage = () => {
  const params = useParams<{ productId: string }>();
  const { getProductById } = useProductContext();
  const product = getProductById(params.productId || "");
  const { addOneToCart } = useCartContext();
  const nav = useNavigate();

  if (!product) {
    return <p>Product does not exist</p>;
  }

  return (
    <Box sx={{ width: "100%", overflowX: "auto", marginTop: "75px" }}>
      {}
      <Box>
        <Button onClick={() => nav("/")}>{<ArrowBack />}</Button>
      </Box>
      <Container
        sx={{ mx: "auto", display: "flex", flexDirection: "row", border: 1, marginTop: "4%" }}
      >
        <Box sx={{ mx: "auto", display: "block" }}>
          <Image
            src={product.imageUrl}
            height='500px'
            fit='fill'
            duration={1000}
            errorIcon={true}
          />
        </Box>
        <Box
          sx={{
            mx: "auto",
            display: "inline-block",
            margin: "3%",
            marginTop: "8vh",
            textDecoration: "bold",
          }}
        >
          <Box>Name:</Box>
          <Box>Manufactor: </Box>
          <Box>Color: </Box>
          <Box>Speed: </Box>
          <Box>Glide: </Box>
          <Box>Turn: </Box>
          <Box>Fade: </Box>
          <Box>Price: </Box>
          <Box>Type: </Box>
          <Box>Weight: </Box>
        </Box>
        <Box
          sx={{
            mx: "auto",
            display: "inline-block",
            margin: "dense",
            marginTop: "8vh",
            textDecoration: "bold",
          }}
        >
          <Box>{product.name}</Box>
          <Box>{product.brand}</Box>
          <Box>{product.color}</Box>
          <Box>{product.speed}</Box>
          <Box>{product.glide}</Box>
          <Box>{product.turn}</Box>
          <Box>{product.fade}</Box>
          <Box>{product.price}</Box>
          <Box>{product.type}</Box>
          <Box>{product.weight}</Box>
        </Box>
        <Button onClick={() => addOneToCart(product.id)}>Add one to cart</Button>
      </Container>
    </Box>
  );
};

export default DetailedProductPage;
