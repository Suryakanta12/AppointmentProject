import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "ContextOrRedux/ThemeProvider.js";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Badge from "@mui/material/Badge";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Collapse from "@mui/material/Collapse";
import HotelIcon from "@mui/icons-material/Hotel";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import FlatwareIcon from "@mui/icons-material/Flatware";
import GarageIcon from "@mui/icons-material/Garage";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShareIcon from '@mui/icons-material/Share';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
const drawerWidth = 300;
const sidebarData = {
    sections: [
      {
        name: "Hostels",
        items: [
          { name: "Manage Hostels Locations", url: "/ManageHostelsLocations" },
          { name: "Manage Rooms", url: "/ManageRooms" },
          { name: "Customer Management", url: "/CustomerManagement" },
          { name: "Bookings", url: "/Bookings" },
          { name: "Staff Management", url: "/StaffManagement" },
          { name: "Billing", url: "/Billing" },
          { name: "Food Catering", url: "/FoodCatering" },
          { name: "Reports", url: "/Reports" },
        ],
        icon: <HotelIcon />,
      },
      {
        name: "Hospitals",
        items: [
          { name: "Overview", url: "/HospitalOverview" },
          { name: "Manage Doctors", url: "/ManageDoctors" },
          { name: "Appointments", url: "/HospitalAppointments" },
          { name: "Patient Management", url: "/PatientManagement" },
          { name: "Billing", url: "/HospitalBilling" },
          { name: "Reports", url: "/HospitalReports" },
        ],
        icon: <LocalHospitalIcon />,
      },
      {
        name: "Garages",
        items: [
          { name: "Services Offered", url: "/GarageServices" },
          { name: "Technician Management", url: "/TechnicianManagement" },
          { name: "Customer Management", url: "/GarageCustomerManagement" },
          { name: "Bookings", url: "/GarageBookings" },
          { name: "Reports", url: "/GarageReports" },
        ],
        icon: <GarageIcon />,
      },
      {
        name: "Beauty & Tattoo",
        items: [
          { name: "Artists", url: "/Artists" },
          { name: "Appointments", url: "/TattooAppointments" },
          { name: "Customer Profiles", url: "/TattooCustomerProfiles" },
          { name: "Reports", url: "/TattooReports" },
        ],
        icon: <FaceRetouchingNaturalIcon />,
      },
      {
        name: "Food Catering",
        items: [
          { name: "Menu Management", url: "/MenuManagement" },
          { name: "Bookings", url: "/FoodCateringBookings" },
          { name: "Reports", url: "/FoodCateringReports" },
        ],
        icon: <FlatwareIcon />,
      },
      {
        name: "Fashion Design",
        items: [
          { name: "Designers", url: "/FashionDesigners" },
          { name: "Orders", url: "/FashionOrders" },
          { name: "Reports", url: "/FashionReports" },
        ],
        icon: <ContentCutIcon />,
      },
      {
        name: "Professional Services",
        items: [
          { name: "Experts", url: "/Experts" },
          { name: "Bookings", url: "/ProfessionalServiceBookings" },
          { name: "Reports", url: "/ProfessionalServiceReports" },
        ],
        icon: <HomeRepairServiceIcon />,
      },
    ],
  };
  
export default function CoAdminHeader () {
  const theme = useTheme();
  const navigate = useNavigate();
  const themeMode = useContext(ThemeContext);
  const darkMode = themeMode.state.darkMode;
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(isMobile ? false : true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedService, setSelectedService] = useState({});
  const openProfile = Boolean(anchorEl);
  const handleToggle = (sectionName) => {
    setSelectedService((prevState) => ({
      ...prevState,
      [sectionName]:!prevState[sectionName]? !prevState[sectionName]:false,
    }));
  };
  const handleProfileOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleItemClick = (url) => {
    navigate(url);  // Perform navigation to the given URL
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <MuiAppBar
        position="fixed"
        style={{
          backgroundColor: darkMode ? "#1E1E2C" : "#ffffff",
          color: darkMode ? "#ffffff" : "#333",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderBottom: "2px solid",
          borderColor: darkMode ? "#444" : "#eee",
          zIndex: theme.zIndex.drawer + 1,
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(["width", "margin"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 5, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Logo
          </Typography>
          <Box
            sx={{ display: "flex", flexGrow: 1, justifyContent: "flex-end" }}
          >
            <Tooltip
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
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

            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={handleProfileOpen}
                //   size="small"
                //   sx={{ ml: 2 }}
                //   aria-controls={openProfile ? 'account-menu' : undefined}
                //   aria-expanded={openProfile ? 'true' : undefined}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openProfile}
                onClose={handleProfileClose}
                onClick={handleProfileClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleProfileClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleProfileClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleProfileClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleProfileClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleProfileClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </MuiAppBar>
      <MuiDrawer
        // variant="permanent"
        variant={isMobile ? "persistent" : "permanent"}
        // variant={{xs:"persistent", sm:"persistent", md:"permanent",lg:"permanent", xl:"permanent"}}
        open={open}
        sx={{
          width: isMobile ? "0px" : drawerWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          //   display:{xs:"none", sm:"none", md:"flex",lg:"flex", xl:"flex"},
          ...(open
            ? {
                width: isMobile ? "0px" : drawerWidth,
                transition: theme.transitions.create("width", {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.enteringScreen,
                }),
                overflowX: "hidden",
              }
            : {
                transition: theme.transitions.create("width", {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
                overflowX: "hidden",
                width: isMobile ? "0px" : `calc(${theme.spacing(7)} + 1px)`,
                [theme.breakpoints.up("sm")]: {
                  width: isMobile ? "0px" : `calc(${theme.spacing(8)} + 1px)`,
                },
              }),
        }}
        PaperProps={{
          style: open
            ? {
                width: drawerWidth,
                overflowX: "hidden",
              }
            : {
                overflowX: "hidden",
                width: isMobile ? "0px" : `calc(${theme.spacing(7)} + 1px)`,
                [theme.breakpoints.up("sm")]: {
                  width: isMobile ? "0px" : `calc(${theme.spacing(8)} + 1px)`,
                },
              },
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </Box>
        <Divider />
        <List>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <Divider />
          {open && (
            <Typography variant="body1" sx={{ px: 2, mt: 2 }}>
              Services
            </Typography>
          )}

          {sidebarData.sections.map((section) => (
            <Box key={section.name}>
              {/* Toggle for each section */}
              <ListItemButton onClick={() => handleToggle(section.name)}>
                <ListItemIcon>{section.icon}</ListItemIcon>
                <ListItemText primary={section.name} />
                {selectedService[section.name] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )}
              </ListItemButton>

              {/* Collapsible items within the section */}
              <Collapse
                in={selectedService[section.name]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {section.items.map((item, index) => (
                    <ListItemButton key={index} sx={{ paddingLeft: 4 }}  onClick={() => handleItemClick(item.url)}>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </Box>
          ))}
        </List>
        <Divider />
        <List>
          {["Share", "News Post"].map((text, index) => (
            <ListItem key={text} disablePadding style={{ display: "block" }}>
              <ListItemButton
                style={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  paddingLeft: theme.spacing(2.5),
                }}
              >
                <ListItemIcon
                  style={{
                    minWidth: 0,
                    marginRight: open ? theme.spacing(3) : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <ShareIcon /> : <NewspaperIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  style={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </MuiDrawer>
    </React.Fragment>
  );
};

