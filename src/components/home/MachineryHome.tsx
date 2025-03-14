import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import CardMachinery from "../CardMachinery";

const machinery = [
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/carroestandar_lesal9.jpg",
    title: "Maquinaria 1",
    description: "Descripción de la maquinaria 1",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/volquete_dfemvj.jpg",
    title: "Maquinaria 2",
    description: "Descripción de la maquinaria 2",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105834/carrosilla_kvy7wj.jpg",
    title: "Maquinaria 3",
    description: "Descripción de la maquinaria 3",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/carrosandias_fzymkg.jpg",
    title: "Maquinaria 4",
    description: "Descripción de la maquinaria 4",
  },
];

function MachineryHome() {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === machinery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? machinery.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        justifyContent: "center",
        border: "1px solid #e0e0e0",
        width: "100%",
        backgroundColor: "#fff",
        padding: theme.spacing(2),
      }}
    >
      {/* Encabezado */}
      <Box
        sx={{
          textAlign: "center",
          paddingBottom: theme.spacing(4),
          maxWidth: "800px",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Innovación
        </Typography>
        <Typography variant="h3" fontWeight="bold">
          Explora nuestro rango de maquinaria
        </Typography>
        <Typography>
          Toda la maquinaria que ves a continuación es fabricada por nosotros.
        </Typography>
      </Box>

      {/* Carrusel */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          minHeight: "60vh",
        }}
      >
        {/* Botón Izquierda */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            left: "2%",
            backgroundColor: "white",
            boxShadow: 2,
            zIndex: 2,
            "&:hover": { backgroundColor: "#f0f0f0" },
          }}
        >
          <ArrowBack />
        </IconButton>

        {/* Contenedor de tarjetas */}
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${machinery.length * 100}%`,
          }}
        >
          {machinery.map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: theme.spacing(2),
              }}
            >
              <CardMachinery
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </Box>
          ))}
        </Box>

        {/* Botón Derecha */}
        <IconButton
          onClick={nextSlide}
          sx={{
            position: "absolute",
            right: "2%",
            backgroundColor: "white",
            boxShadow: 2,
            zIndex: 2,
            "&:hover": { backgroundColor: "#f0f0f0" },
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
}

export default MachineryHome;
