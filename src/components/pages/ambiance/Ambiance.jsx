import React from "react";
import { styled } from "@mui/system";
import { Box, Container, Typography } from "@mui/material";
import pic from "../../../assets/assets/ambience.jpg";

function Ambiance() {
  const Pic = styled("img")(({ theme }) => ({
    width: "400px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  }));
  const Main_box = styled(Box)(({ theme }) => ({
    marginTop: "30px",
    display: "flex",
    gap: theme.spacing(4),
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      gap: "3rem",
    },
  }));
  const Num_box = styled(Box)(({ theme }) => ({
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing("16rem"),

    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      gap: "3rem",
      alignItems: "center",
    },
  }));
  return (
    <div>
      <Container
      sx={{
        marginTop:"200px"
      }}
      >
        <Main_box>
          <Pic src={pic} alt="" />
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Just found an ambiance you love.
            </Typography>
            <Box>
              <Typography sx={{ marginTop: "10px" }}>
                Discover a wide variety of mouth watering items
              </Typography>
            </Box>
          </Box>
        </Main_box>
      </Container>

      <Container>
        <Num_box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              250+
            </Typography>

            <Box>
              <Typography>dishes</Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              300+
            </Typography>

            <Box>
              <Typography>Trusted clients</Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              350+
            </Typography>

            <Box>
              <Typography>Delivery per Day</Typography>
            </Box>
          </Box>
        </Num_box>
      </Container>
    </div>
  );
}

export default Ambiance;
