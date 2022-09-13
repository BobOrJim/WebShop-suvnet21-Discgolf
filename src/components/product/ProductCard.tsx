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

export default function ProductCard({
  id,
  name,
  //brand,
  //speed,
  //glide,
  //turn,
  //fade,
  //weight,
  //color,
  imageUrl,
  price,
}: ProductProps) {
  const { addOneToCart } = useCartContext();
  //const quantity = getItemQuantity(id);

  return (
    <div style={tmpDivStyle}>
      <div style={productNameDiv}> {name}</div>
      <div style={productPriceDiv}>{formatCurrency(price)}</div>
      <div style={productImageDiv}>
        <img src={imageUrl} height={SimpleMediaQuery()}></img>
      </div>
      <Button onClick={() => addOneToCart(id)}>Add one to cart</Button>
      <NavLink to={"/detailedproductpage/" + id.toString()} style={detailsStyle}>
        More Details
      </NavLink>
    </div>
  );
}

function SimpleMediaQuery() {
  let size = 200;

  const matches = useMediaQuery("(min-width:675px)");
  if (!matches) {
    size = 100;
  }
  return size + "px";
}

const tmpDivStyle: CSSProperties = {
  display: "grid",
  border: "1px solid #CCC",
  borderRadius: "0.5rem",
  margin: "0",
};

const productNameDiv: CSSProperties = {
  fontWeight: "bold",
  fontSize: "1.5rem",
  margin: "auto",
};

const productPriceDiv: CSSProperties = {
  fontWeight: "bold",
  fontSize: "1.5rem",
  margin: "auto",
};

const productImageDiv: CSSProperties = {
  margin: "auto",
};

const detailsStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
};
