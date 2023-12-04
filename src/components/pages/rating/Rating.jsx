import { Box, Typography } from "@mui/material";
import React from "react";
import rate from "../../../assets/assets/Star.png";
import { styled } from "@mui/system";

function Rating() {
  const Main_box = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    [theme.breakpoints.down("md")]: {},
  }));
  const Message = styled(Typography)(({ theme }) => ({
    marginLeft: "150px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "10px",
    },
  }));
  const Star = styled(Box)(({ theme }) => ({
    marginRight: "150px",

    [theme.breakpoints.down("md")]: {
      marginRight: "10px",
    },
  }));
  return (
    <div>
      <Main_box>
        <Box>
          <Message>More than 1000+ trusted users</Message>
        </Box>
        <Star>
          <img src={rate} alt="" />
        </Star>
      </Main_box>
    </div>
  );
}

export default Rating;
