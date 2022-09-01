//import { formatCurrency } from "../utilities/formatCurrency";
import { FC, CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import { Disc } from "./disc";
import Grid2 from '@mui/material/Unstable_Grid2'; 

interface DiscCardProps {
  disc: Disc;
}

export const DiscCard: FC<DiscCardProps> = (props: DiscCardProps): JSX.Element => {
  //const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  //const quantity = getItemQuantity(id);

  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={2}>
        <div style={tmpDivStyle}>
          <p>{props.disc.name}</p>
          <p>{props.disc.price}</p>
          <img height="200px" width="200px" src={props.disc.imageUrl}/>
          <NavLink to={props.disc.id.toString()}>
          <p>SHOW DETAILS</p>
          </NavLink>
        </div>
      </Grid2>
    </Grid2>
  );
};

const tmpDivStyle: CSSProperties = {
  display: "flex",
  border: "1px solid #CCC",
  borderRadius: "0.5rem",
  margin: "0.5rem",
};
