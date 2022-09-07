import { Box, Button, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import Image from 'mui-image';
import { useCartContext } from "../context/CartContext";

const DetailedProductPage = () => {
  const params = useParams<{ productId: string }>();
  const { getProductById } = useProductContext();
  const product = getProductById(params.productId || "");

  if (!product) {
    return <p>Product does not exist</p>;
  }

  const { addOneToCart} = useCartContext();

  return (
    <>
      {/* skapar en rad */}
    <Container sx={{mx: "auto", display:"flex", flexDirection: "row", border: 1, marginTop:"4%"}}>   

        <Box sx={{mx: "auto", display:"block"}} >
          <Image src={product.imageUrl} height="500px" fit="fill" duration={1000} errorIcon={true}/>
        </Box>
        <Box sx={{mx: "auto", display:"inline-block", margin:"3%", marginTop:"8vh", textDecoration:"bold"}} >
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
        <Box sx={{mx: "auto", display:"inline-block", margin:"dense", marginTop:"8vh", textDecoration:"bold"}} >
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

    </>
  );
};

export default DetailedProductPage;
