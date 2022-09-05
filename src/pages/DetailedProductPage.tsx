import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

const DetailedProductPage = () => {
  const params = useParams<{ productId: string }>();
  const distId = params.productId || "";
  const { getProductById } = useProductContext();
  const product = getProductById(Number(distId));

  if (!product) {
    return <p>Product does not exist</p>;
  }
  return (
    <div>
      <p>{product.id}</p>
      <p>{product.brand}</p>
      <p>{product.color}</p>
      <p>{product.fade}</p>
      <p>{product.glide}</p>
      <p>{product.imageUrl}</p>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.speed}</p>
      <p>{product.turn}</p>
      <p>{product.type}</p>
      <p>{product.weight}</p>
    </div>
  );
};

export default DetailedProductPage;
