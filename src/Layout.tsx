import { Button, Drawer } from "@mui/material";
import { CSSProperties } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useCartContext } from "./context/CartContext";

function Layout() {
  const { cartQuantity } = useCartContext();

  return (
    <div>
      <header style={rootStyle}>
        <NavLink style={linkStyle} to="">
          Home
        </NavLink>
        <NavLink style={linkStyle} to="adminpage">
          Admin
        </NavLink>
        <NavLink style={linkStyle} to="checkoutpage">
          Checkout
        </NavLink>
        <Button style={cartStyle}>
          <span>🛒{cartQuantity}</span>
        </Button>
        <Drawer></Drawer>
      </header>
      <Outlet />
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  height: "75px",
  width: "100%",
  backgroundColor: "lightgray",
};

interface LinkProps {
  isActive: boolean;
}

export const linkStyle = ({ isActive }: LinkProps): CSSProperties => ({
  padding: "0.4rem",
  textDecoration: "none",
  borderRadius: "1rem",
  color: "black",
  background: isActive ? "#CCCCFF" : undefined,
});

const cartStyle: CSSProperties = {
  display: "flex",
  paddingBottom: "50px",
  margin: 0,
  padding: "0.4rem",
  textDecoration: "none",
  borderRadius: "1rem",
  color: "black",
};

export default Layout;
