import { Box, Typography } from "@mui/material";
import React from "react";

const images = [
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/volquete_dfemvj.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/volquete_dfemvj.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/volquete_dfemvj.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/volquete_dfemvj.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/volquete_dfemvj.jpg",
]; // Puedes agregar más imágenes reales aquí

const scrollAnimation = (duration: number) => ({
  display: "flex",
  animation: `scrollLeft ${duration}s linear infinite`,
  width: "200%",
  gap: "15px",
});

const ImageRow = ({
  images,
  duration,
}: {
  images: string[];
  duration: number;
}) => (
  <Box
    sx={{
      height: "50%",
      width: "100%",
      display: "flex",
      overflow: "hidden",
      position: "relative",
    }}
  >
    <Box sx={scrollAnimation(duration)}>
      {images.concat(images).map((img, index) => (
        <Box
          component="img"
          key={index}
          src={img}
          alt={`machine-${index}`}
          sx={{
            width: { xs: "50%", sm: "33%", md: "20%" }, // Responsive
            height: "95%",
            objectFit: "cover",
            borderRadius: "5px",
            boxShadow: "2px 2px 7px rgba(0, 0, 0, 0.2)",
            margin: "3px",
          }}
        />
      ))}
    </Box>
  </Box>
);

const MachineryHeader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Título */}
      <Box
        sx={{
          height: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" textAlign="center">
          Machinery & Equipment
        </Typography>
      </Box>

      {/* Sección de imágenes en movimiento */}
      <Box sx={{ height: "70%" }}>
        <ImageRow images={images} duration={40} />
        <ImageRow images={images} duration={35} />
      </Box>

      {/* Definimos la animación en CSS */}
      <style>
        {`
          @keyframes scrollLeft {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default MachineryHeader;
