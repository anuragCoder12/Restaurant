import React from "react";
import Rating from "../rating/Rating";
import food_image from "../../../assets/assets/welcome.png";
import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import Guides from "../guids/Guides";
import Dishes from "../dishes/Dishes";
import Ambiance from "../ambiance/Ambiance";
import Order from "../order/Order";

function Body() {
  const Box_head = styled(Box)(({ theme }) => ({
    width: "40%",
    alignItems: "center",
    marginLeft: "160px",

    [theme.breakpoints.down("md")]: {
      marginLeft: "80px",
      paddingTop: "10px",
      width: "70%",
    },
  }));
  const Heading = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {},
  }));
  const Para = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
  }));
  const About = styled(Button)(({ theme }) => ({
    marginLeft: "100px",
    borderRadius: "10px",
    fontWeight: "bold",
    height: "2.4rem",
    color: "#3019C5",
    border: "2px solid #3019C5",
    backgroundColor: "#ffff",
    "&:hover": {
      color: "#ffff",
      backgroundColor: "#3019C5",
    },

    [theme.breakpoints.down("md")]: {
      marginLeft: "40px",
    },
  }));
  const Main_box = styled(Box)(({ theme }) => ({
    backgroundColor: "#E1C242",
    minHeight: "80vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",

    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
    },
  }));
  return (
    <Box>
    <Main_box>
      <Box_head>
        <Heading variant="h3">
          Discover a place where you'll love to eat.
        </Heading>

        <Box
          sx={{
            padding: "20px",
          }}
        >
          <Para>
            immersre yourself in the elegant ambiance as you savour each
            bite,accompanied by our extensive collection of dishes.
          </Para>
        </Box>
        <About variant="contained" disableElevation>
          More about us
        </About>
      </Box_head>

      <Box>
        <img src={food_image} alt="" style={{ width: "80%" }} />
      </Box>
     
    </Main_box>
    <Rating/>
    <Guides/>
    <Dishes/>
    <Ambiance/>
    <Order/>
    </Box>
   
  );
}

export default Body;
