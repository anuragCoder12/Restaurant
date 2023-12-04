import React from "react";
import { styled } from "@mui/system";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import combo from "../../../assets/assets/Food1.jpg";
import snack from "../../../assets/assets/Food2.jpg";
import shawarma from "../../../assets/assets/Food3.jpeg";
function Dishes() {
  const data = [
    {
      image: combo,
      price: "Starts from $20",
      name: "Combo Dishes",
    },
    {
      image: snack,
      price: "Starts from $10",
      name: "Snacks",
    },
    {
      image: shawarma,
      price: "Starts from $12",
      name: "Shawarmas",
    },
  ];
  const Cards = styled(Box)(({ theme }) => ({
    marginTop: "30px",
    width: "400px",
    height: "auto",
    border: "1px",
    marginBottom: "20px",
    boxShadow: " 0 4px 8px 0 rgba(0,0,0,0.2)",
    "&:hover": {
      boxShadow: " 0 8px 16px 0 rgba(0,0,0,0.2)",
    },
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  }));
  const Card_box = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
    },
  }));
  const Image = styled("img")(({ theme }) => ({
    width: "400px",
    height: "300px",
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  }));
  return (
    <div>
      <Box sx={{ marginBottom: "100px" }}>
        <Box sx={{ marginLeft: "100px" }}>
          <Typography variant="h5">Feautered Dishes</Typography>
          <Typography variant="body3">Explore variety Dishes</Typography>
        </Box>
        <Card_box>
          {data.map((data, index) => (
            <Cards>
              <Box>
                <Image src={data.image} alt="" />
              </Box>
              <Box>{data.price}</Box>
              <Box
                sx={{
                  marginTop: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {data.name}
                <Button
                  variant=""
                  sx={{
                    color: "#3019C5",
                  }}
                >
                  Show
                </Button>
              </Box>
            </Cards>
          ))}
        </Card_box>
      </Box>
    </div>
  );
}

export default Dishes;
