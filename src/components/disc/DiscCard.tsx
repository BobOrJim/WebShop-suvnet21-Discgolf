//import { formatCurrency } from "../utilities/formatCurrency";
import { FC, CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import { Disc } from "./Disc";

interface DiscCardProps {
  disc: Disc;
}

export const DiscCard: FC<DiscCardProps> = (props: DiscCardProps): JSX.Element => {
  //const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  //const quantity = getItemQuantity(id);

  return (
    <div style={tmpDivStyle}>
      <p>{props.disc.name}</p>
      <p>{props.disc.price}</p>
      <p>{props.disc.imageUrl}</p>
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
