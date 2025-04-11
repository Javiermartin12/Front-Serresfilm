import { Box, IconButton, Typography, useTheme } from "@mui/material";
import React, { useRef, useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import CardMachinery from "../CardMachinery";
import { motion, useInView } from "framer-motion";

const machinery = [
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/carroestandar_lesal9.jpg",
    title: "Carro de  recolección",
    description:
      "Carro de recolección con rueda de aire para recoger genero, verdura, frutas, etc.",
    alt: "Carro de recolección con rueda de aire para recoger genero, verdura, frutas, etc.",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105832/carroancho_i2ut3i.jpg",
    title: "Carro ancho",
    description:
      "Carro de recolección con rueda de aire para recoger genero, verdura, frutas, etc.",
    alt: "Carro de recolección con rueda de aire para recoger genero, verdura, frutas, etc.",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/carrobobinas_eo6jos.jpg",
    title: "Carro bobinas",
    description: "Carro para desliar bobinas de plastico.",
    alt: "Carro para desliar bobinas de plastico.",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/armariodospuertas_jkeqhy.jpg",
    title: "Armario dos puertas",
    description:
      "Armario de dos puertas para guardar herramientas, accesorios, venenos, etc.",
    alt: "Armario de dos puertas para guardar herramientas, accesorios, venenos, etc.",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/aramriotrespuertas_mu4cr7.jpg",
    title: "Armario tres puertas",
    description:
      "Armario de tres puertas para guardar herramientas, accesorios, venenos, etc.",
    alt: "Armario de tres puertas para guardar herramientas, accesorios, venenos, etc.",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105832/carroandamio_igfye4.jpg",
    title: "Carro andamio",
    description:
      "Carro andamio para colgar perchas, trabajar tomate o culaquier uso disponible.",
    alt: "Carro andamio para colgar perchas, trabajar tomate o culaquier uso disponible.",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105832/carro4patas_jwq6fd.jpg",
    title: "Carro plataforma",
    description:
      "Carro de cuatro patas para cargar y transportar genero, verdura, material, etc.",
    alt: "Carro de cuatro patas para cargar y transportar genero, verdura, frutas, etc.",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105832/4patassuministros_l0v6he.jpg",
    title: "Carro 4 patas pequeño",
    description:
      " Carro de cuatro patas para cargar y transportar genero, verdura, material, etc.",
    alt: "Carro de cuatro patas para cargar y transportar genero, verdura, frutas, etc.",
  },

  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/volquete_dfemvj.jpg",
    title: "Volquete",
    description:
      "Volquete para transporte de material, escombros, deshechos, etc.",
    alt: "Volquete para transporte de material, escombros, deshechos, etc.",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105834/carrosilla_kvy7wj.jpg",
    title: "Carro silla",
    description:
      "Carro silla para no trabajar agachado y evitar dolores de espalda, etc.",
    alt: "ICarro silla para no trabajar agachado y evitar dolores de espalda, etc.",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/carrosandias_fzymkg.jpg",
    title: "Carretilla obra",
    description: "Carro de sandias para recolección de sandias, melones, etc.",
    alt: "Carro de sandias para recolección de sandias, melones, etc.",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741105833/carrodelagoma_iijrf3.jpg",
    title: "Carro goma sulfato",
    description:
      "Carro de goma para liar la gomade sulfato o cualquier tipo de goma.",
    alt: "Carro de goma para liar la gomade sulfato o cualquier tipo de goma.",
  },
];
function MachineryHome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-150px" });

  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = machinery.length - 1;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  return (
    <Box
      ref={sectionRef}
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
      {/* ---------- Encabezado ---------- */}
      <Box
        sx={{
          textAlign: "center",
          paddingBottom: theme.spacing(4),
          maxWidth: "800px",
        }}
      >
        <Typography
          component={motion.h6}
          variant="h6"
          fontWeight="bold"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Innovación
        </Typography>

        <Typography
          component={motion.h3}
          variant="h3"
          fontWeight="bold"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
        >
          Explora nuestro rango de artículos
        </Typography>

        <Typography
          component={motion.p}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
        >
          Todo lo que ves a continuación es fabricado por nosotros.
        </Typography>
      </Box>

      {/* ---------- Carrusel ---------- */}
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
        {/* Botón izquierdo */}
        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            left: { xs: 25, md: "2%" },
            backgroundColor: "white",
            boxShadow: 2,
            zIndex: 2,
            "&:hover": { backgroundColor: "#f0f0f0" },
          }}
        >
          <ArrowBack />
        </IconButton>

        {/* Contenedor de tarjeta única */}
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.9s ease-in-out, opacity 0.5s ease-in-out",
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${machinery.length * 100}%`,
            opacity: 1,
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
                alt={item.alt}
              />
            </Box>
          ))}
        </Box>

        {/* Botón derecho */}
        <IconButton
          onClick={nextSlide}
          sx={{
            position: "absolute",
            right: { xs: 25, md: "2%" },
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
