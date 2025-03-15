import { Box, Typography, Grid } from "@mui/material";
import React from "react";

const values = [
  {
    icon: "🌱",
    title: "Sostenibilidad",
    description:
      "Nos preocupamos por el medio ambiente y trabajamos con materiales sostenibles y procesos eficientes.",
  },
  {
    icon: "💡",
    title: "Innovación",
    description:
      "Siempre buscamos mejorar y desarrollar nuevas tecnologías para nuestros clientes.",
  },
  {
    icon: "👥",
    title: "Compromiso",
    description:
      "Nuestro equipo está dedicado a ofrecer la mejor calidad y servicio en cada proyecto.",
  },
];

const CompanyValues = () => {
  return (
    <Box sx={{ mt: 6, textAlign: "center" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Nuestros Valores
      </Typography>
      <Grid container spacing={3} mt={3}>
        {values.map((value, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Typography variant="h6" fontWeight="bold">
              {value.icon} {value.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {value.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CompanyValues;
