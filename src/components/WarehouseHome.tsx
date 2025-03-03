import { Box, Typography } from "@mui/material";
import React from "react";

function WarehouseHome() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#fff",
        padding: 2, // Aseguramos que haya un padding consistente
      }}
    >
      {/* Image Box */}
      <Box
        component="img"
        alt="Invernadero"
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "100%",
          marginLeft: { xs: 0, md: 3 },
          objectFit: "cover",
          backgroundColor: "#f5f5f5",
          border: "1px solid #e0e0e0",
          flexShrink: 0, // Evita que la imagen se deforme en responsive
          py: 2,
        }}
      />

      {/* Text Box */}
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
            gap: 2,
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
    </Box>
  );
}

export default WarehouseHome;
