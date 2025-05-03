import { Box, Typography } from "@mui/material";
import React from "react";

const images = [
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/volquete_dfemvj.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105834/carrosilla_kvy7wj.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/carroestandar_lesal9.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/carrodelagoma_iijrf3.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/carrobobinas_eo6jos.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/armariodospuertas_jkeqhy.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105832/carroandamio_igfye4.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105832/carro4patas_jwq6fd.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/aramriotrespuertas_mu4cr7.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105832/4patassuministros_l0v6he.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105832/carroancho_i2ut3i.jpg",
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
        <Box
          sx={{
            width: "90%",
            maxWidth: "800px", // Limita el ancho máximo del texto en pantallas grandes
            height: { xs: "50%", sm: "40%" }, // Ajuste para responsividad
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            paddingTop: 8,
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
            sx={{ color: "darkgreen" }}
          >
            Maquinaria y Equipo
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: 2, fontSize: { xs: "1rem", md: "1.2rem" } }}
          >
            Nuestra maquinaria están diseñados para maximizar la utilidad y la
            eficiencia en el trabajo.
          </Typography>
        </Box>
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
