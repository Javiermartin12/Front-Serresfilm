import { Box, Typography, Container, Grid } from "@mui/material";
import React from "react";

const OurHistory = () => {
  return (
    <Box sx={{ py: 6, bgcolor: "background.default" }}>
      <Container>
        {/* Sección de la historia */}
        <Grid container spacing={4} alignItems="center">
          {/* Imagen */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://via.placeholder.com/500" // Reemplázala con la imagen real
              alt="Historia de la empresa"
              sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}
            />
          </Grid>

          {/* Texto de la historia */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Nuestra Historia
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Fundada en el año XXXX, nuestra empresa ha crecido hasta
              convertirse en un referente en el sector de la maquinaria. Desde
              nuestros inicios, nos hemos comprometido con la innovación y la
              calidad en cada uno de nuestros productos.
            </Typography>
            <Typography variant="body1" color="text.secondary" mt={2}>
              Con más de XX años de experiencia, seguimos apostando por la
              excelencia y la satisfacción de nuestros clientes, ofreciendo
              soluciones personalizadas para cada necesidad.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurHistory;
