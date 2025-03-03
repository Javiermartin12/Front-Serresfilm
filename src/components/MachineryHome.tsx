import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import CardMachinery from "./CardMachinery";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const machinery = [
  {
    image: "/images/machine1.jpg",
    title: "Maquinaria 1",
    description: "Descripción de la maquinaria 1",
  },
  {
    image: "/images/machine2.jpg",
    title: "Maquinaria 2",
    description: "Descripción de la maquinaria 2",
  },
  {
    image: "/images/machine3.jpg",
    title: "Maquinaria 3",
    description: "Descripción de la maquinaria 3",
  },
  {
    image: "/images/machine4.jpg",
    title: "Maquinaria 4",
    description: "Descripción de la maquinaria 4",
  },
];

function MachineryHome() {
  const theme = useTheme();
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === machinery.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? machinery.length - 1 : prevIndex - 1
  //   );
  // };
  return (
    <>
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
        <Box
          sx={{
            border: "1px solid #e0e0e0",
            width: "100%",
            minHeight: "30vh",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" component="h2" fontWeight="bold">
            Innovación
          </Typography>
          <Typography variant="h2" component="h1" fontWeight="bold">
            Explora nuestro rango de maquinaria
          </Typography>
          <Typography>
            Toda la maquinaria que ves a continuación es fabricada por nosotros.
          </Typography>
        </Box>
        {/* Box for image of machinery */}
        <Box
          sx={{
            border: "1px solid #e0e0e0",
            width: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            gap: theme.spacing(2),
            minHeight: "70vh",
          }}
        >
          {/* Botón Izquierda */}
          <IconButton
            sx={{
              position: "absolute", // 🔹 Cambio a position absolute
              top: "90%",
              left: { xs: "10%", sm: "0", md: "0", lg: "10%", xl: "0" },
              transform: "translateY(-50%)",
              backgroundColor: "white",
              boxShadow: 2,
              zIndex: 2,
            }}
          >
            <ArrowBack />
          </IconButton>
          {/* Tarjetas de maquinaria */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: {
                xs: "20%",
                sm: "30%",
                md: "30%",
                lg: "25%",
                xl: "50%",
              },
              padding: theme.spacing(2),
            }}
          >
            {machinery.map((item) => (
              <Box
                key={item.image}
                sx={{
                  overflow: "hidden",
                  position: "relative",
                  top: { xs: "0", sm: "0", md: "0", lg: "10%", xl: "0" }, // Desplaza el componente 20px hacia abajo
                  left: {
                    xs: "10%",
                    sm: "23%",
                    md: "15%",
                    lg: "20%",
                    xl: "10%",
                  },
                  transform: "translate(110, 0)",
                  border: "1px solid #e0e0e0",
                  minWidth: {
                    xs: "80%",
                    sm: "59%",
                    md: "70%",
                    lg: "60%",
                    xl: "70%",
                  },
                  maxHeight: {
                    xs: "80%",
                    sm: "80%",
                    md: "80%",
                    lg: "70%",
                    xl: "70%",
                  },
                  minHeight: {
                    xs: "20%",
                    sm: "0%",
                    md: "80%",
                    lg: "70%",
                    xl: "70%",
                  },
                }}
              >
                <CardMachinery
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              </Box>
            ))}
            {/* Botón Derecha */}
            <IconButton
              sx={{
                position: "absolute",
                right: { xs: "10%", sm: "0", md: "0", lg: "10%", xl: "0" },
                top: "90%",
                transform: "translateY(-50%)",
                zIndex: 2,
                backgroundColor: "white",
                boxShadow: 2,
              }}
            >
              <ArrowForward />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MachineryHome;
