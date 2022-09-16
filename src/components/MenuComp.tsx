import * as React from 'react'
import { AppBar, Container, Toolbar, Box, IconButton, MenuItem, Button, Menu} from '@mui/material';
import { NavLink, Link, Outlet } from 'react-router-dom';
import TempDrawer from './Drawer';
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MenuIcon from "@mui/icons-material/Menu";
import { CSSProperties } from "styled-components";
import { useCartContext } from '../context/CartContext';

let pages = ["admin", "checkout"];

const MenuComp = () => {
  const {cartQuantity} = useCartContext();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  if(cartQuantity === 0) {
    pages = ["admin"];
  } else {
    pages = ["admin", "checkout"];
  }
  
  return (
    <>
    <AppBar position='fixed'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <DonutLargeIcon sx={{ display: { xs: "none", md: "flex" }, mr: 3 }} />
            <Box
              sx={{
                mr: 2,
                color: "white",
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              <NavLink style={styleLink} to='/'>
                DISC SHOP
              </NavLink>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size='large'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu();
                    }}
                  >
                    <Link to={page} style={styleLinkHamburger}>
                      {page}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <DonutLargeIcon sx={{ display: { xs: "block", md: "none" }, mr: 1 }} />
              <Box>
                <NavLink style={styleLink} to='/'>
                  DISC SHOP
                </NavLink>
              </Box>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu;
                  }}
                  sx={{
                    mr: 2,
                  }}
                >
                  <Link style={styleLink} to={`/${page}`}>
                    {page}
                  </Link>
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <TempDrawer />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
      </>
  )
}

export default MenuComp

const styleLink: CSSProperties = {
    color: "white",
    fontWeight: 700,
    letterSpacing: ".3rem",
    textDecoration: "none",
    fontFamily: "sans-serif",
    fontSize: "1rem",
    alignItems: "center",
  };
  
  const styleLinkHamburger: CSSProperties = {
    color: "blue",
    fontWeight: 700,
    letterSpacing: ".3rem",
    textDecoration: "none",
    fontFamily: "sans-serif",
    fontSize: "1rem",
    alignItems: "center",
  };
  
