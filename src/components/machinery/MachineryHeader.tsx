import { Box } from "@mui/material";
import React from "react";

const images = [
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/volquete_dfemvj.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/volquete_dfemvj.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/volquete_dfemvj.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/volquete_dfemvj.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/volquete_dfemvj.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/volquete_dfemvj.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/volquete_dfemvj.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/volquete_dfemvj.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/volquete_dfemvj.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/volquete_dfemvj.jpg",
  "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/volquete_dfemvj.jpg",
]; // Sustituye con las URLs de tus imágenes reales

const MachineryHeader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid black",
      }}
    >
      {/* Sección superior */}
      <Box
        sx={{
          height: "30%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid black",
        }}
      >
        <h2>Machinery & Equipment</h2>
      </Box>

      {/* Sección de imágenes en movimiento */}
      <Box
        sx={{
          height: "70%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
        }}
      >
        {/* Primera fila de imágenes */}
        <Box
          sx={{
            height: "50%",
            width: "100%",
            display: "flex",
            overflow: "hidden",
            position: "relative",
            border: "1px solid black",
          }}
        >
          <Box
            sx={{
              display: "flex",
              animation: "scrollLeft 40s linear infinite",
              width: "200%",
              gap: "15px",
            }}
          >
            {images.concat(images).map((img, index) => (
              <Box
                component="img"
                key={index}
                src={img}
                alt={`machine-${index}`}
                style={{
                  width: "20%", // 5 imágenes por fila
                  height: "95%",
                  objectFit: "cover",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 7px 0 rgba(0, 0, 0, 0.2)",
                  margin: "3px",
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Segunda fila de imágenes (misma animación) */}
        <Box
          sx={{
            height: "50%",
            width: "100%",
            display: "flex",
            overflow: "hidden",
            position: "relative",
            border: "1px solid black",
            pl: "10%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              animation: "scrollLeft 40s linear infinite",
              width: "200%",
              gap: "15px",
            }}
          >
            {images.concat(images).map((img, index) => (
              <Box
                component="img"
                key={index}
                src={img}
                alt={`machine-${index}`}
                sx={{
                  width: "20%",
                  height: "95%",
                  borderRadius: "5px",
                  boxShadow: "2px 2px 7px 0 rgba(0, 0, 0, 0.2)",
                  margin: "3px",

                  objectFit: "cover",
                }}
              />
            ))}
          </Box>
        </Box>
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
