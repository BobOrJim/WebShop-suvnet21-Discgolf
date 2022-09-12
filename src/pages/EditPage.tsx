import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { ProductForm } from "../components/product/ProductForm";
import { useProductContext } from "../context/ProductContext";

const Edit = () => {
  const { getProductById } = useProductContext();

  const params = useParams<{ productId: string }>();
  const product = getProductById(params.productId || "");

  return (
    <Box sx={{ width: "100%", overflowX: "auto", marginTop: "95px" }}>
      <ProductForm product={product} />
    </Box>
  );
};

export default Edit;
