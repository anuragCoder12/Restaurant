import React from "react";
import { styled } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import cart from "../../../assets/assets/buy_icon.png";
import buy from "../../../assets/assets/sell_icon.png";
function Guides() {
  const Main_box = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "160px",
    marginBottom:"70px"
  }));
  const Guides = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing("16rem"),
    marginTop: "60px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      gap: "4rem",
    },
  }));
  const Guide=styled(Typography)(({theme})=>({
        color:"blue",
        cursor:"pointer"
        
  }))

  return (
    <div>
      <Main_box>
        <Box>
          <Typography variant="h5">How to Book</Typography>
          <Typography>Every thing you need to know</Typography>
        </Box>
        <Guides>
          <Box>
            <img src={cart} alt="" />
            <Box>
              Order Guides <br />
              <Guide>How to order</Guide>
            </Box>
          </Box>
          <Box>
            <img src={buy} alt="" />
            <Box>
              Booking Guides <br />
              <Guide>How to Book</Guide>
            </Box>
          </Box>
          <Box>
            <img src={buy} alt="" />
            <Box>
              Payment Guides <br />
              <Guide>Payment Methods</Guide>
            </Box>
          </Box>
        </Guides>

        <Box>
          <Button
            variant="contained"
            disableRipple
            sx={{
              marginTop: "30px",
              backgroundColor: "#3019C5",
            }}
          >
            See full guids
          </Button>
        </Box>
      </Main_box>
    </div>
  );
}

export default Guides;
