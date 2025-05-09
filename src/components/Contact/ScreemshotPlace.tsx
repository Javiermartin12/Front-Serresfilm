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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.788285863803!2d-2.8082193846648646!3d36.77726267995802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7073d1661fa71f%3A0x7031d9c3a1912ad5!2sEl%20Ejido%2C%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1689946791902!5m2!1ses!2ses"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
