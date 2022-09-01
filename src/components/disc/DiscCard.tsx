//import { formatCurrency } from "../utilities/formatCurrency";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CSSProperties, FC } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { Disc } from "./disc";

interface DiscCardProps {
  disc: Disc;
}

export const DiscCard: FC<DiscCardProps> = (
  props: DiscCardProps
): JSX.Element => {
  //const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  //const quantity = getItemQuantity(id);

  const { addToCart, removeFromCart } = useCartContext();

  return (
    <div style={tmpDivStyle}>
      <div style={discNameDiv}> {props.disc.name}</div>
      <div style={discPriceDiv}>{props.disc.price} Kr</div>
      <div style={discImageDiv}>{SimpleMediaQuery(props)}</div>
      <button onClick={() => addToCart(props.disc)}>+</button>
      <button onClick={() => removeFromCart(props.disc.id)}>-</button>
      <NavLink to={"/detailedproductpage/" + props.disc.id.toString()}>
        SHOW DETAILS
      </NavLink>
    </div>
  );
};

export default function SimpleMediaQuery(props: any) {
  let size = 200;

  const matches = useMediaQuery("(min-width:675px)");
  if (!matches) {
    size = 100;
  }
  return (
    <img height={size + "px"} width={size + "px"} src={props.disc.imageUrl} />
  );
}

const tmpDivStyle: CSSProperties = {
  display: "grid",
  border: "1px solid #CCC",
  borderRadius: "0.5rem",
  margin: "0",
};

const discNameDiv: CSSProperties = {
  fontWeight: "bold",
  fontSize: "1.5rem",
  margin: "auto",
};

const discPriceDiv: CSSProperties = {
  fontWeight: "bold",
  fontSize: "1.5rem",
  margin: "auto",
};

const discImageDiv: CSSProperties = {
  margin: "auto",
};
