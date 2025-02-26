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

        backgroundColor: "#fff",
      }}
    >
      <Box sx={{ margin: 3 }}>
        <Typography
          variant="h5"
          color="initial"
          sx={{ fontWeight: "bold", marginBottom: 1 }}
        >
          Explora nuestra variedad de invernaderos hechos hasta hoy dia.
        </Typography>
        <Typography color="initial" sx={{ fontSize: 16, marginBottom: 1 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          iure, laudantium aspernatur est voluptas aut mollitia odit odio vero
          aliquam nesciunt,
        </Typography>
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
          }}
        >
          <Typography
            color="initial"
            sx={{ fontSize: 16, fontWeight: "bold", marginBottom: 1 }}
          >
            Diseño duradero y resistente.
            <Typography color="initial" sx={{ fontSize: 16, marginBottom: 1 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium iure,
            </Typography>
          </Typography>
          <Typography
            color="initial"
            sx={{ fontSize: 16, fontWeight: "bold", marginBottom: 1 }}
          >
            Opciones de personalizacion.
            <Typography color="initial" sx={{ fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium iure,
            </Typography>
          </Typography>
        </Box>
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
