import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import fb from "../../assets/assets/facebook.png";
import insta from "../../assets/assets/instagram.png";
import twiter from "../../assets/assets/twitter.png";
function Footer() {
  const Head = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
  }));
  const Content = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    color: "gray",
    cursor: "pointer",
    "&:hover": {
      color: "blue",
    },
  }));
  const Main_box = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "200px",
    marginTop: "auto",
    backgroundColor: "#F9EF93",
    padding: "50px",
    [theme.breakpoints.down("md")]: {
      gap: "50px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
    },
  }));
  const Icon_box = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    justifyContent: "center",
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));
  return (
    <div>
      <Main_box>
        <Box>
          <Head variant="h6">Featured</Head>
          <Box>
            <Content>Guids</Content>
            <Content>Services</Content>
            <Content>Contact Us</Content>
          </Box>
        </Box>
        <Box>
          <Box>
            <Head variant="h6">Overview</Head>
            <Box>
              <Content>Location</Content>
              <Content>Partnership</Content>
              <Content>Terms of Use & Privacy Policies</Content>
            </Box>
          </Box>
        </Box>
        <Box>
        
          <Box>
            <Head variant="h6">Get in touch</Head>
            <Icon_box>
              <img
                src={fb}
                alt=""
                style={{ cursor: "pointer" }}
                width={"20px"}
              />
              <img
                src={insta}
                alt=""
                style={{ cursor: "pointer" }}
                width={"20px"}
              />
              <img
                src={twiter}
                alt=""
                style={{ cursor: "pointer" }}
                width={"20px"}
              />
            </Icon_box>
          </Box>
        </Box>
      </Main_box>
    </div>
  );
}

export default Footer;
