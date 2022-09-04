import { useProductContext } from "../context/ProductContext";

const CheckoutPage = () => {
  const { getAllProducts } = useProductContext();

  return (
    <div>
      {getAllProducts().map((product) => (
        <div key={product.id}>
          <p>{product.id}</p>
        </div>
      ))}
    </div>
  );
};

export default CheckoutPage;
