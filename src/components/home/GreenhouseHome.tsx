import { Box, Button, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const GreenhouseHome = React.memo(function GreenhouseHome() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

  return (
    <Box
      ref={sectionRef}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        minHeight: { md: "100vh" },
        height: "auto",
        width: "100%",
        backgroundColor: "#fff",
        padding: { xs: 4, md: 4 },
      }}
    >
      {/* Sección de texto */}
      <Box sx={{ margin: 3, padding: 3, maxWidth: "600px", width: "100%" }}>
        <Typography
          component={motion.h2}
          variant="h2"
          fontWeight="bold"
          sx={{ color: "darkgreen" }}
          mb={5}
          fontSize={{ xs: 22, md: 36 }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Explora nuestros invernaderos.
        </Typography>

        <Typography
          sx={{ fontSize: { xs: 14, md: 18 }, lineHeight: 1.5, mb: 3 }}
          component={motion.p}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          Ideales para una producción más refinada. Su diseño hermético permite
          un excelente control del clima y una mayor eficiencia en la
          producción.
        </Typography>

        {/* Características con animación escalonada */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {[
            {
              title: "✔ Diseño duradero y resistente.",
              desc: "Estructuras diseñadas para durar años.",
            },
            {
              title: "✔ Opciones de personalización.",
              desc: "Adaptamos los invernaderos a tus necesidades.",
            },
          ].map((feature, index) => (
            <Box
              key={index}
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.4 + index * 0.2, // Retrasa cada uno progresivamente
              }}
            >
              <Typography fontWeight="bold" fontSize={18} mb={1}>
                {feature.title}
              </Typography>
              <Typography
                sx={{ fontSize: { xs: 14, md: 16 }, lineHeight: 1.5 }}
              >
                {feature.desc}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Botón animado con retraso */}
        <Button
          component={motion.a}
          href="/greenHouse"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
          variant="contained"
          size="medium"
          sx={{ m: 5, backgroundColor: "green", color: "#fff" }}
        >
          Más información
        </Button>
      </Box>
      {/* Imagen */}
      <Box
        component={motion.img}
        src="https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741106533/9f68465c-6edd-45ac-83b3-6d3d1c7f3a19_wle1db.jpg"
        alt="Invernadero"
        loading="lazy"
        sx={{
          width: { xs: "100%", md: "50%" },
          height: { xs: "auto", md: "65%" },
          borderRadius: 2,
          transition: {
            xs: "transform 0.5s ease-in-out",
            sm: "transform 0.5s ease-in-out",
          },

          "&:hover": {
            boxShadow: { xs: "none", md: "0px 0px 100px rgba(0, 0, 0, 0.9)" },

            transform: {
              xs: "scale(1.4)",
              sm: "scale(1.3) ",
              md: "scale(1.6) translateX(-20%)",
            },
          },

          objectFit: "cover",
          flexShrink: 0,
        }}
      />
    </Box>
  );
});

export default GreenhouseHome;
