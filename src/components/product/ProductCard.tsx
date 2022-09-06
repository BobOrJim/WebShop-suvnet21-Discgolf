import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { formatCurrency } from "../../utils/formatCurrency";

type ProductProps = {
  id: string;
  name: string;
  brand: string;
  speed: number;
  glide: number;
  turn: number;
  fade: number;
  weight: number;
  color: string;
  imageUrl: string;
  price: number;
  type: string;
};

export function ProductCard({
  id,
  name,
  brand,
  speed,
  glide,
  turn,
  fade,
  weight,
  color,
  imageUrl,
  price,
  type,
}: ProductProps) {
  const { getItemQuantity, addOneToCart, removeOneFromCart, removeAllFromCart } = useCartContext();
  const quantity = getItemQuantity(id);

  return (
    <div style={tmpDivStyle}>
      <div style={discNameDiv}> {name}</div>
      <div style={discPriceDiv}>{formatCurrency(price)}</div>
      <div style={discImageDiv}>
        <img src={imageUrl} height="200px"></img>
      </div>
      <Button onClick={() => addOneToCart(id)}>Add one to cart</Button>
      <Button onClick={() => removeOneFromCart(id)}>Remove one from cart</Button>
      <Button onClick={() => removeAllFromCart(id)}>Remove all</Button>
      <NavLink to={"/detailedproductpage/" + id.toString()} style={detailsStyle}>
        More Details
      </NavLink>
    </div>
  );
}

export default function SimpleMediaQuery(props: ProductProps) {
  let size = 200;

  const matches = useMediaQuery("(min-width:675px)");
  if (!matches) {
    size = 100;
  }
  return <img height={size + "px"} width={size + "px"} src={props.imageUrl} />;
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

const detailsStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};
