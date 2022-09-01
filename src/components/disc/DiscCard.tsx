//import { formatCurrency } from "../utilities/formatCurrency";
import { CSSProperties, FC } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Disc } from "./disc";
import Grid2 from '@mui/material/Unstable_Grid2'; 

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
         <div style={discNameDiv}> {props.disc.name}</div>
          <div style={discPriceDiv}>{props.disc.price} Kr</div>
          <div style={discImageDiv}>
          <img height="200px" width="200px" src={props.disc.imageUrl}/>
          </div>
          <NavLink to={props.disc.id.toString()}>
          SHOW DETAILS
          </NavLink>
        </div>
  );
};

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
