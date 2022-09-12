import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Link, Outlet } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const pages = ["adminpage", "checkoutpage"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position='fixed'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            {/* IKON DESKTOP */}
            <DonutLargeIcon sx={{ display: { xs: "none", md: "flex" }, mr: 3 }} />
            {/* IKON DESKTOP END */}

            {/* LOGO DESKTOP */}
            <Typography
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                color: "white",
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              DISC SHOP
            </Typography>
            {/* LOGO DESKTOP END */}

            {/* HAMBURGER MENU MOBILE */}
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
                    <Link
                      to={page}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {page.charAt(0).toUpperCase() + page.slice(1).replace("page", "")}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* HAMBURGER MENU MOBILE END */}

            {/* IKON MOBILE */}
            <DonutLargeIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            {/* IKON MOBILE END */}

            {/* LOGO MOBILE */}
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              DISC SHOP
            </Typography>
            {/* LOGO MOBILE END */}

            {/* NAVIGATION DESKTOP */}
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
                  <Link to={`/${page}`}>
                    <Typography
                      sx={{
                        color: "white",
                        fontWeight: 700,
                        letterSpacing: ".2rem",
                        underline: "none",
                        textDecoration: "none",
                      }}
                    >
                      {page.substring(0, page.length - 4)}
                    </Typography>
                  </Link>
                </Button>
              ))}
            </Box>
            {/* NAVIGATION DESKTOP END */}

            {/* Cart Stuff*/}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title='Cart'>
                <IconButton onClick={() => console.log("open cart här?")} sx={{ p: 0 }}>
                  <ShoppingCartIcon
                    sx={{ display: { md: "flex" }, mr: 3, fontSize: 50, color: "whitesmoke" }}
                  />
                  <Typography>
                    <Box
                      sx={{
                        display: {
                          md: "flex",
                          position: "absolute",
                          top: 8,
                          right: 30,
                        },
                        color: "darkred",
                        fontWeight: 900,
                        letterSpacing: ".2rem",
                        underline: "none",
                        textDecoration: "none",
                      }}
                    >
                      66
                    </Box>
                  </Typography>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
export default Header;
