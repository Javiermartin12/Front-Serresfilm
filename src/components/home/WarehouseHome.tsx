import { Box, Button, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const WarehouseHome = React.memo(function WarehouseHome() {
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
      {/* Imagen con efectos visuales mejorados */}
      <Box
        component={motion.img}
        src="https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741106789/1d34500b-bc09-4c52-915a-27f76aa0004b_c0mvt4.jpg"
        alt="Almacén de chapa"
        loading="lazy"
        sx={{
          zIndex: 1,
          width: { xs: "100%", md: "65%" },
          height: { xs: "auto", md: "65%" },
          borderRadius: 2,
          transition: "transform 0.5s ease-in-out",
          "&:hover": {
            boxShadow: { xs: "none", md: "0px 0px 100px rgba(0, 0, 0, 0.9)" },
            transform: {
              xs: "scale(1.1)",
              sm: "scale(1.2)",
              md: "scale(1.2) translateX(20%)",
            },
          },
          objectFit: "cover",
          flexShrink: 0,
        }}
      />
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
          Protege y optimiza tu almacenamiento.
        </Typography>

        <Typography
          sx={{ fontSize: { xs: 14, md: 18 }, lineHeight: 1.5, mb: 3 }}
          component={motion.p}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          Nuestros almacenes de chapa ofrecen la mejor protección para tus
          herramientas, insumos y productos agrícolas. Diseñados con materiales
          de alta calidad, garantizan resistencia, durabilidad y un ambiente
          seguro para el almacenamiento de tus bienes.
        </Typography>

        {/* Características con animación escalonada */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {[
            {
              title: "✔ Resistencia y durabilidad.",
              desc: "Fabricados con materiales de alta calidad que soportan condiciones extremas.",
            },
            {
              title: "✔ Máxima seguridad.",
              desc: "Diseño robusto para proteger tus herramientas y productos de factores externos.",
            },
            {
              title: "✔ Adaptabilidad a tu espacio.",
              desc: "Diferentes tamaños y configuraciones para ajustarse a tus necesidades.",
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
          href="/wareHouse"
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
    </Box>
  );
});

export default WarehouseHome;
