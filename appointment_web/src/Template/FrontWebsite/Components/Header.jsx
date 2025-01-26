import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Button,
  TextField,
  InputAdornment,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Switch,
  Tooltip,
  FormControlLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeContext } from "ContextOrRedux/ThemeProvider.js";

const pages = ["Home", "About", "Our Businesses","News Room", "ContactUs"];
const settings = ["Profile", "Orders", "Logout"];

export default function Header() {
  const themeMode = useContext(ThemeContext);
  const darkMode = themeMode.state.darkMode;
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };
  const handleNavigation = (page) => {
    page === "Home" ? navigate("/") : navigate("/" + page);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="stick"
      sx={{
        backgroundColor: darkMode ? "#1E1E2C" : "#ffffff",
        color: darkMode ? "#ffffff" : "#333",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderBottom: "2px solid",
        borderColor: darkMode ? "#444" : "#eee",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h5"
            component="a"
            href="#"
            sx={{
              fontWeight: "bold",
              color: darkMode ? "#FFA726" : "#FB8C00",
              textDecoration: "none",
              flexGrow: 1,
            }}
          >
            MyBrand
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNavigation(page.replace(/\s+/g, ''))}
                sx={{
                  mx: 1,
                  color: darkMode ? "#fff" : "#333",
                  fontWeight: "500",
                  "&:hover": {
                    color: "#FFA726",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Dark/Light Mode Toggle */}
          {/* <Tooltip title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
              <FormControlLabel
                control={
                  <Switch
                    icon={<Brightness7Icon />} // Light mode icon
                    checkedIcon={<Brightness4Icon />} // Dark mode icon
                    onClick={() => {
                      darkMode
                        ? themeMode.dispatch({ type: "LIGHTMODE" })
                        : themeMode.dispatch({ type: "DARKMODE" });
                    }}
                  />
                }
              />
            </Tooltip> */}
            <Box sx={{ mr:2 }}>
            <Tooltip title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
          <IconButton
          color="inherit"
            onClick={() =>
              themeMode.dispatch({
                type: darkMode ? "LIGHTMODE" : "DARKMODE",
              })
            }
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          </Tooltip>
          </Box>

          {/* Sign In and Sign Up Buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button variant="outlined" color="primary" onClick={() => navigate('/SignIn')}>
              Sign In
            </Button>
            <Button variant="contained" color="primary" onClick={() => navigate('/SignUp')}>
              Sign Up
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            background: darkMode ? "#333" : "#fff",
            height: "100%",
            color: darkMode ? "#fff" : "#000",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2,
              py: 1,
              background: darkMode ? "#444" : "#f5f5f5",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Menu
            </Typography>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {pages.map((page) => (
              <ListItem button key={page} onClick={() => handleNavigation(page)}>
                <ListItemText primary={page} />
              </ListItem>
            ))}
            <Divider />
            <ListItem button>
              <Button variant="outlined" color="inherit" fullWidth>
                Sign In
              </Button>
            </ListItem>
            <ListItem button>
              <Button variant="contained" color="primary" fullWidth>
                Sign Up
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
