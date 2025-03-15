import { Box, Typography } from "@mui/material";
import React from "react";

const sections = [
  {
    title: "Innovación",
    heading: "Información de maquinaria",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, corporis consequuntur. Sequi, repellat. Dignissimos soluta nemo, perspiciatis qui hic commodi alias dolores sunt eaque veniam repellendus, reiciendis dolorem. Ex, quibusdam.",
  },
  {
    title: "Eficiencia",
    heading: "Datos de producción",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus pariatur corrupti quis ullam, fugit tenetur soluta tempore odio quae quibusdam ad sunt saepe dignissimos modi, amet similique molestias possimus distinctio?",
  },
  {
    title: "Calidad",
    heading: "Certificaciones",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate possimus impedit, deserunt doloribus earum veniam nisi voluptate natus, hic asperiores, laudantium in velit ut? Pariatur mollitia dolor ullam odio eos.",
  },
];

function InformationMachinery() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        p: { xs: 2, md: 5 },
      }}
    >
      {/* Sección superior */}
      <Box
        sx={{
          minHeight: "40vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: { xs: "center", md: "left" },
          px: { xs: 2, md: 5 },
        }}
      >
        <Typography variant="h5" color="primary">
          Innovación
        </Typography>
        <Typography variant="h3" fontWeight="bold">
          Información de maquinaria
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel,
          corporis consequuntur. Sequi, repellat. Dignissimos soluta nemo,
          perspiciatis qui hic commodi alias dolores sunt eaque veniam
          repellendus, reiciendis dolorem. Ex, quibusdam.
        </Typography>
      </Box>

      {/* Sección inferior con columnas */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          textAlign: "center",
        }}
      >
        {sections.map((section, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              p: 3,
              borderRadius: 2,
              boxShadow: 2,
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="h5" color="secondary" fontWeight="bold">
              {section.title}
            </Typography>
            <Typography variant="h4" fontWeight="bold" mt={1}>
              {section.heading}
            </Typography>
            <Typography variant="h6" color="textSecondary" mt={1}>
              {section.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default InformationMachinery;
