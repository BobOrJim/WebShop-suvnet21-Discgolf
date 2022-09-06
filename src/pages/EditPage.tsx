import { useParams } from "react-router-dom";
import { ProductForm } from "../components/product/ProductForm";
import { useProductContext } from "../context/ProductContext";

const Edit = () => {
  const { getProductById } = useProductContext();

  const params = useParams<{ productId: string }>();
  const product = getProductById(params.productId || "");

  return (
    <>
      <p>EDIT PAGE </p>
      <ProductForm product={product} />
    </>
  );
};

export default Edit;
