import { Box, Typography } from "@mui/material";
import React from "react";

function GreenhouseHome() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        minHeight: "100vh", // Cambiado para evitar problemas en pantallas pequeñas
        width: "100%",
        backgroundColor: "#fff",
        padding: 2, // Aseguramos que haya un padding consistente
      }}
    >
      {/* Box for text of greenhouse */}
      <Box sx={{ margin: 3, maxWidth: "100px", minWidth: "600px" }}>
        <Typography variant="h5" fontWeight="bold" marginBottom={1}>
          Explora nuestra variedad de invernaderos hechos hasta hoy día.
        </Typography>

        <Typography sx={{ fontSize: 16, marginBottom: 2 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          iure, laudantium aspernatur est voluptas aut mollitia odit odio vero
          aliquam nesciunt.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2, // Espaciado entre los elementos
          }}
        >
          <Box>
            <Typography fontWeight="bold" marginBottom={1}>
              Diseño duradero y resistente.
            </Typography>
            <Typography component="div" sx={{ fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium iure.
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold" marginBottom={1}>
              Opciones de personalización.
            </Typography>
            <Typography component="div" sx={{ fontSize: 16 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium iure.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Box for image of greenhouse */}
      <Box
        component="img"
        src="https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741106540/839b26ef-4c77-439f-864c-da66143c6086_jtyjsp.jpg"
        alt="Invernadero"
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#f5f5f5",
          border: "1px solid #e0e0e0",
          py: 2,
        }}
      />
    </Box>
  );
}

export default GreenhouseHome;
