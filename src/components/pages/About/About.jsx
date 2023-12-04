import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import image from "../../../assets/download.jpeg";

function About() {
  const Container = styled(Box)(({ theme }) => ({}));
  const Main_box = styled(Box)(({ theme }) => ({
    display: "flex",
    marginTop: "150px",
    justifyContent: "center",
    marginBottom: "200px",
    gap:theme.spacing("4rem"),

    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "20px",
    },
  }));
  return (
    <div>
      <Container>
        <Main_box>
          <Box>
            <img src={image} alt="" />
          </Box>
          <Box sx={{width:"300px"}}>
            <Typography variant="h5">About us</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis,
              molestias! Dolorum recusandae dolorem perferendis commodi tempore,
              tempora similique deleniti explicabo labore repellendus quidem
              ullam, aliquid quos qui totam culpa omnis!
            </Typography>

          </Box>
        </Main_box>
      </Container>
    </div>
  );
}

export default About;
