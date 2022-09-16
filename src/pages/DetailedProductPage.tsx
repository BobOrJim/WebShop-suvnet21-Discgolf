import { ArrowBack } from "@mui/icons-material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Button, Container, IconButton, useMediaQuery } from "@mui/material";
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
    <Box sx={{ width: "100wh", overflowX: "auto", marginTop: "75px" }}>
      {}
      <Box>
        <Button onClick={() => nav("/")}>{<ArrowBack />}</Button>
      </Box>
      <Container
        sx={{
          mx: "auto",
          display: "flex",
          flexDirection: FlexDirectionMediaQuery(),
          border: 1,
          marginTop: "4%",
        }}
      >
        <Box
          sx={{
            mx: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
          }}
        >
          <Image
            src={product.imageUrl}
            height={SimpleImgMediaQuery()}
            fit='fill'
            duration={1000}
            errorIcon={true}
          />
        </Box>
        <Box
          sx={{
            fontSize: SimpleFontMediaQuery(),
            display: "flex",
          }}
        >
          <Box
            sx={{
              mx: "auto",
              display: "inline-block",
              margin: "dense",
              marginTop: "4vh",
              textDecoration: "bold",
              marginBottom: "2vh",
              fontSize: SimpleFontMediaQuery(),
            }}
          >
            <Box>Name: {product.name}</Box>
            <Box>Brand: {product.brand}</Box>
            <Box>Color: {product.color}</Box>
            <Box>Speed: {product.speed}</Box>
            <Box>Glide: {product.glide}</Box>
            <Box>Turn: {product.turn}</Box>
            <Box>Fade: {product.fade}</Box>
            <Box>Price: {product.price}</Box>
            <Box>Type: {product.type}</Box>
            <Box>Weight: {product.weight}</Box>
          </Box>
          <IconButton onClick={() => addOneToCart(product.id)}>
            <AddCircleIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

function SimpleImgMediaQuery() {
  let size = 200;

  const matches = useMediaQuery("(min-width:675px)");
  if (!matches) {
    size = 150;
  }
  return size + "px";
}

function SimpleFontMediaQuery() {
  let fontSize = 1;

  const matches = useMediaQuery("(min-width:675px)");
  if (!matches) {
    fontSize = 1;
  }
  return fontSize + "rem";
}

function FlexDirectionMediaQuery() {
  let flexDirection = "row";

  const matches = useMediaQuery("(min-width:675px)");
  if (!matches) {
    flexDirection = "column";
  }
  return flexDirection;
}

export default DetailedProductPage;
