import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ScreenshotPlace = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        py: 6,
        px: 3,
        borderRadius: 4,
        textAlign: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        maxWidth: 900,
        mx: "auto",
        mt: 6,
        mb: 6,
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        ¿Dónde nos encontramos?
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={4}>
        Estamos ubicados en El Ejido, Almería. Puedes visitarnos o ponerte en
        contacto para más información.
      </Typography>

      {/* Mapa embebido */}
      <Box
        sx={{
          width: "100%",
          height: { xs: 300, sm: 400 },
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 2,
        }}
      >
        <iframe
          title="Ubicación de la empresa"
          src="https://maps.google.com/maps?q=Calle%20XII%2041%20El%20Ejido&t=&z=17&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </Box>

      <Box mt={4}>
        <Typography variant="h6" fontWeight="medium" gutterBottom>
          <LocationOnIcon sx={{ verticalAlign: "middle", mr: 1 }} />
          El Ejido, Almería, España
        </Typography>
        <Button
          href="https://www.google.com/maps/place/El+Ejido,+Almería"
          target="_blank"
          variant="contained"
          color="primary"
        >
          Abrir en Google Maps
        </Button>
      </Box>
    </Box>
  );
};

export default ScreenshotPlace;
