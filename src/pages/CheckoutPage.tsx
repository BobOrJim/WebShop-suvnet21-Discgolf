import Checkout from "../components/checkout/Checkout";
import { useProductContext } from "../context/ProductContext";

const CheckoutPage = () => {
  const { getAllProducts } = useProductContext();

  return (
    <div>
      {/* {getAllProducts().map((product) => (
        <div key={product.id}>
          <p>{product.id}</p>
        </div>
      ))} */}
      <Checkout></Checkout>
    </div>
  );
};

export default CheckoutPage;
