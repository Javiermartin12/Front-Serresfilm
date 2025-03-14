import { Box, Typography } from "@mui/material";
import React from "react";

function GreenhouseHome() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        minHeight: { md: "100vh" }, // En móviles, usamos height: "auto"
        height: "auto",
        width: "100%",
        backgroundColor: "#fff",
        padding: { xs: 4, md: 4 }, // Ajuste de padding para mejor UX
      }}
    >
      {/* Sección de texto */}
      <Box sx={{ margin: 3, maxWidth: "600px", width: "100%" }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          mb={2}
          fontSize={{ xs: 20, md: 24 }}
        >
          Explora nuestra variedad de invernaderos hechos hasta hoy día.
        </Typography>

        <Typography
          sx={{ fontSize: { xs: 14, md: 16 }, lineHeight: 1.5, mb: 3 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          iure, laudantium aspernatur est voluptas aut mollitia odit odio vero
          aliquam nesciunt.
        </Typography>

        {/* Características */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          {[
            {
              title: "Diseño duradero y resistente.",
              desc: "Estructuras diseñadas para durar años.",
            },
            {
              title: "Opciones de personalización.",
              desc: "Adaptamos los invernaderos a tus necesidades.",
            },
          ].map((feature, index) => (
            <Box key={index}>
              <Typography fontWeight="bold" mb={1}>
                {feature.title}
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 14, md: 16 }, lineHeight: 1.5 }}
              >
                {feature.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Imagen */}
      <Box
        component="img"
        src="https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741106540/839b26ef-4c77-439f-864c-da66143c6086_jtyjsp.jpg"
        alt="Invernadero"
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "auto",
          maxHeight: "500px",
          objectFit: "cover",
          flexShrink: 0,
          py: 2,
        }}
      />
    </Box>
  );
}

export default GreenhouseHome;
