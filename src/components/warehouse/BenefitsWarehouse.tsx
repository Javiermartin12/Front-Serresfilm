import { Box, Typography } from "@mui/material";
import React from "react";

function BenefitsWarehouse() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
      }}
    >
      {/* Título */}
      <Box
        sx={{
          width: "100%",
          height: { md: "25%", xs: "15%" },
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Beneficios de Nuestros Invernaderos
        </Typography>
      </Box>

      {/* Contenido principal */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "100%", md: "75%" },
          border: "1px solid black",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
        }}
      >
        {/* Primer texto */}
        <Box
          sx={{
            height: { xs: "30%", md: "100%" },
            width: { xs: "100%", md: "30%" },
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            textAlign: "center",
          }}
        >
          <Typography variant="body1">
            Nuestros invernaderos ofrecen un entorno controlado para optimizar
            la producción agrícola.
          </Typography>
        </Box>

        {/* Imagen */}
        <Box
          component="img"
          src="https://source.unsplash.com/600x400/?greenhouse" // Imagen de ejemplo
          alt="Invernadero"
          sx={{
            height: { xs: "40%", md: "100%" },
            width: { xs: "100%", md: "40%" },
            objectFit: "cover",
            border: "1px solid black",
          }}
        />

        {/* Segundo texto */}
        <Box
          sx={{
            height: { xs: "30%", md: "100%" },
            width: { xs: "100%", md: "30%" },
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2, // Espaciado interno
            textAlign: "center",
          }}
        >
          <Typography variant="body1">
            Implementamos tecnología de vanguardia para mejorar la eficiencia y
            reducir costos.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default BenefitsWarehouse;
