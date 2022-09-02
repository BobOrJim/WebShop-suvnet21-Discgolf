import { useCartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const { getAllCartItems } = useCartContext();

  return (
    <div>
      {getAllCartItems().map((disc) => (
        <div key={disc.id}>
          <p>{disc.id}</p>
        </div>
      ))}
    </div>
  );
};

export default CheckoutPage;
