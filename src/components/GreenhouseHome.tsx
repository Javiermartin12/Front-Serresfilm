"use client";
import { Box, Typography } from "@mui/material";
import React from "react";

function GreenhouseHome() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        },

        alignItems: "center",

        border: "1px solid black",

        height: {
          xs: "100vh",
          sm: "100vh",
          md: "100vh",
          lg: "100vh",
          xl: "100vh",
        },
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
        },
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <Box>
        <Typography variant="h2" color="initial">
          Invernaderos
        </Typography>
        <Typography variant="h6" color="initial">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          iure, laudantium aspernatur est voluptas aut mollitia odit odio vero
          aliquam nesciunt, accusamus cum. Earum, veritatis itaque non obcaecati
          libero doloribus?
        </Typography>
      </Box>
      <Box
        component="img"
        src="/Greenhouse/Greenhouse-1.jpg"
        alt="invernadero"
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "100vh",
          objectFit: "cover",
          py: 2,
        }}
      />
    </Box>
  );
}

export default GreenhouseHome;
