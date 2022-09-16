import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Container, Typography, useMediaQuery } from "@mui/material";
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
      <Container
        sx={{
          mx: "auto",
          display: "flex",
          flexDirection: FlexDirectionMediaQuery(),
          marginTop: "4%",
          fontFamily: "Quicksand",
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Image
              src={product.imageUrl}
              height={SimpleImgMediaQuery()}
              fit='fill'
              duration={1500}
              errorIcon={true}
            />
            <Box
              sx={{
                display: "flex",
                border: "1px solid black",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  width: "25%",
                  borderRight: "1px solid black",
                }}
              >
                <Box sx={{ background: "lightgray" }}>Speed</Box>
                <Box sx={{ textAlign: "center", fontSize: "25px" }}>{product.speed}</Box>
              </Box>
              <Box
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  width: "25%",
                  borderRight: "1px solid black",
                }}
              >
                <Box sx={{ background: "lightgray" }}>Glide</Box>
                <Box sx={{ textAlign: "center", fontSize: "25px" }}>{product.glide}</Box>
              </Box>
              <Box
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  width: "25%",
                  borderRight: "1px solid black",
                }}
              >
                <Box sx={{ background: "lightgray" }}>Turn</Box>
                <Box sx={{ textAlign: "center", fontSize: "25px" }}>{product.turn}</Box>
              </Box>
              <Box
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  width: "25%",
                }}
              >
                <Box sx={{ background: "lightgray" }}>Fade</Box>
                <Box sx={{ textAlign: "center", fontSize: "25px" }}>{product.fade}</Box>
              </Box>
            </Box>
          </Box>
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
            <Typography variant='h5'>{product.name}</Typography>
            <Typography variant='h6'>{product.price}Kr</Typography>
            <Box sx={{ fontSize: "20px" }}>Brand: {product.brand}</Box>
            <Box sx={{ fontSize: "20px" }}>Color: {product.color}</Box>
            <Box sx={{ fontSize: "20px" }}>Type: {product.type}</Box>
            <Box sx={{ fontSize: "20px" }}>Weight: {product.weight}</Box>
            <Button
              variant='text'
              sx={{ color: "green", fontSize: "1.5rem" }}
              onClick={() => addOneToCart(product.id)}
            >
              Add to cart
            </Button>
          </Box>

          <Box>
            <Button onClick={() => nav("/")}>{<ArrowBack />}</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

function SimpleImgMediaQuery() {
  let size = 300;

  const matches = useMediaQuery("(min-width:675px)");
  if (!matches) {
    size = 250;
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
