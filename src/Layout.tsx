import { CssBaseline } from "@mui/material";
import { CSSProperties } from "react";
import { NavLink, Outlet } from "react-router-dom";
import TempDrawer from "./components/Drawer";

function Layout() {
  return (
    <div>
      <CssBaseline />
      <header style={rootStyle}>
        <NavLink style={linkStyle} to=''>
          Home
        </NavLink>
        <NavLink style={linkStyle} to='adminpage'>
          Admin
        </NavLink>
        <NavLink style={linkStyle} to='checkoutpage'>
          Checkout
        </NavLink>
        <TempDrawer />
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

const cartButtonStyle: CSSProperties = {
  display: "flex",
  margin: "end auto",
  width: "3rem",
  height: "3rem",
  padding: "0.4rem",
  textDecoration: "none",
  borderRadius: "1rem",
  color: "yellow",
  position: "relative",
};

const cartMiniButtonStyle: CSSProperties = {
  color: "blue",
  width: "2rem",
  height: "2rem",
  bottom: 0,
  right: 0,
  transform: "translate(25%, 0%)",
  position: "absolute",
};

export default Layout;
