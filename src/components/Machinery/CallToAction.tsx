import { Box, Typography, Button } from "@mui/material";
import React from "react";

export const CallToAction = () => {
  return (
    <Box
      sx={{
        minHeight: "30vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        p: 3,
        bgcolor: "background.default",
      }}
    >
      {/* Sección de texto */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          ¡No pierdas esta oportunidad!
        </Typography>
        <Typography variant="body1" color="textSecondary" mt={1}>
          Descubre nuestras últimas innovaciones en maquinaria y mejora tu
          productividad.
        </Typography>
      </Box>

      {/* Sección de imagen */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Button variant="contained" color="primary">
            Más información
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
