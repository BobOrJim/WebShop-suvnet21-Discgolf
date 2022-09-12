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

export default Layout;
