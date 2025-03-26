import { Box, Typography, Grid } from "@mui/material";
import React from "react";

const values = [
  {
    icon: "🌱",
    title: "Sostenibilidad",
    description:
      "Nos preocupamos por el medio ambiente y trabajamos con materiales sostenibles y procesos eficientes.",
    image: "https://via.placeholder.com/150", // URL de la imagen temporal
  },
  {
    icon: "💡",
    title: "Innovación",
    description:
      "Siempre buscamos mejorar y desarrollar nuevas tecnologías para nuestros clientes.",
    image: "https://via.placeholder.com/150",
  },
  {
    icon: "👥",
    title: "Compromiso",
    description:
      "Nuestro equipo está dedicado a ofrecer la mejor calidad y servicio en cada proyecto.",
    image: "https://via.placeholder.com/150",
  },
];

const CompanyValues = () => {
  return (
    <Box sx={{ textAlign: "center", minHeight: "100vh", py: 5 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Nuestros Valores
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {values.map((value, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                p: 3,
                borderRadius: 2,
                boxShadow: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {value.icon} {value.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {value.description}
              </Typography>

              {/* Caja de imagen */}
              <Box
                sx={{
                  mt: 2,
                  width: "100%",
                  height: 250,
                  borderRadius: 2,
                  backgroundImage: `url(${value.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: 2,
                }}
              />
              <Typography variant="body2" color="text.secondary">
                {value.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {value.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CompanyValues;
