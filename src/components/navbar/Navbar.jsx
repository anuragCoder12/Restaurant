import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo_res from "../../assets/Restaurant-Logo-PNG-Photo.png";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import ContactsIcon from "@mui/icons-material/Contacts";
import { useNavigate } from "react-router-dom";




function Navbar() {
  
  const navigate=useNavigate()
  
  const [drawer, setDrawer] = useState({ left: false });
  //objects
  const nav = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/dishes",
      title: "Dishes",
    },
    {
      path: "/services",
      title: "Services",
    },
    {
      path: "/about us",
      title: "About Us",
    },
  ];

  //drawer functionalities
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      (event.type === "keydown" && event.type === "Tab") ||
      event.type === "Shift"
    ) {
      return;
    }

    setDrawer({ ...drawer, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {nav.map((nav, index) => (
          <ListItem key={index} disablePadding onClick={()=>navigate(nav.path)}>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <FeaturedPlayListIcon />}
                {index === 2 && <MiscellaneousServicesIcon />}
                {index === 3 && <ContactsIcon />}
              </ListItemIcon>
              <ListItemText primary={nav.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  //styling
  const NavLink = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(4),
    marginRight: "900px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  const Links = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    cursor: "pointer",
    
    "&:hover": {
      color: "#ffff",
    },
  }));
  const NavButton = styled(Button)(({ theme }) => ({
    padding: "10px",
    height: "2.4rem",
    borderRadius: "10px",
    backgroundColor:"#3019C5",
    fontSize: "10px",
    alignItems: "center",
    display: "flex",
    marginTop: "30px",
    
  }));
  const Menu = styled(MenuIcon)(({ theme }) => ({
    marginLeft: "20px",
    margintop: "40px",
    cursor: "pointer",
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        bgcolor: "#E1C242",
        padding: "10px",
        height: "100px",
      }}
    >
      <Menu onClick={toggleDrawer("left", true)} />
      <Drawer
        anchor="left"
        open={drawer["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
      
      <Box
        sx={{
          display: "flex",
          cursor: "pointer",
        }}
      >
        <img src={logo_res} alt="" />
      </Box>
      <NavLink>
        {nav.map((nav, index) => (
          <Links onClick={()=>navigate(nav.path)}>
          {nav.title}</Links>
        ))}
      </NavLink>
      <Box>
        <NavButton variant="contained">
          Login
        </NavButton>
      </Box>
    </Box>
  );
}

export default Navbar;
