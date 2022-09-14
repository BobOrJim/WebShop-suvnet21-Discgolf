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
    <Box sx={{ width: "100%", overflowX: "auto", marginTop: "75px" }}>
      {}
      <Box>
        <Button onClick={() => nav("/")}>{<ArrowBack />}</Button>
      </Box>
      <Container
        sx={{ mx: "auto", display: "flex", flexDirection: "row", border: 1, marginTop: "4%" }}
      >
        <Box sx={{ mx: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Image
            src={product.imageUrl}
            height={SimpleImgMediaQuery()}
            fit='fill'
            duration={1000}
            errorIcon={true}
          />
        </Box>
        <Box sx={{ fontSize: SimpleFontMediaQuery(), display: "flex" }}>
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
            <Box>Manufacturer: </Box>
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
              fontSize: SimpleFontMediaQuery(),
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
    fontSize = 0.7;
  }
  return fontSize + "rem";
}

export default DetailedProductPage;
