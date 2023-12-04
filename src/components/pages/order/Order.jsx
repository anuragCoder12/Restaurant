import { Button, styled } from "@mui/material";
import { Box, Typography } from "@mui/material";
import React from "react";
import delivery from "../../../assets/assets/DeliveryImg.png";

function Order() {
  const Main_box = styled(Box)(({ theme }) => ({
    marginTop: "100px",
    marginBottom: "200px",
    padding: "20px",
    backgroundColor: "#E1C242",
    width: "70rem",
    height: "280px",
    borderRadius: "10px",
    display: "flex",
    paddingLeft:"200px",

    alignItems: "center",
    gap: "20rem",

    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      height: "480px",
      gap: "3rem",
      paddingLeft:"100px"
    },
  }));
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Main_box>
          <Box >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#F3E8E8",
              }}
            >
              Super Fast Home Delivery
            </Typography>

            <Typography>Door to Door Delivery!!</Typography>
            <Box>
              <Button
                variant="contained"
                sx={{
                  marginTop: "20px",
                  background: "#ffff",
                  color: "#3019C5",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#3019C5",
                    color: "#ffff",
                  },
                }}
              >
                order now
              </Button>
            </Box>
          </Box>

          <Box sx={{ width: "200px" }}>
            <img src={delivery} alt="" style={{ height: "280px" }} />
          </Box>
          <Box></Box>
        </Main_box>
      </Box>
    </div>
  );
}

export default Order;
