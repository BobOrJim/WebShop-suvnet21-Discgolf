//import { formatCurrency } from "../utilities/formatCurrency";
import { CSSProperties, FC } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Disc } from "./disc";

interface DiscCardProps {
  disc: Disc;
}

export const DiscCard: FC<DiscCardProps> = (props: DiscCardProps): JSX.Element => {
  //const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  //const quantity = getItemQuantity(id);

  const { addToCart } = useCart();
  const { removeFromCart } = useCart();

  return (
    <div style={tmpDivStyle}>
      <p>{props.disc.name}</p>
      <p>{props.disc.price}</p>
      <p>{props.disc.imageUrl}</p>
      <button onClick={() => addToCart(props.disc)}>Add to cart</button>
      <button onClick={() => removeFromCart(props.disc)}>Remove from cart</button>
      <NavLink to={props.disc.id.toString()}>
        <div>
          <p>SHOW DETAILS</p>
        </div>
      </NavLink>
    </div>
  );
};

const tmpDivStyle: CSSProperties = {
  display: "flex",
  border: "1px solid #CCC",
  borderRadius: "0.5rem",
  margin: "0.5rem",
};
