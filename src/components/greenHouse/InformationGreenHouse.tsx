import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function InformationGreenHouse() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.5,
    margin: "0px 0px -50px 0px",
    initial: false,
  });

  return (
    <Box
      ref={sectionRef}
      sx={{
        minHeight: { xs: "auto", md: "100vh" }, // Cambiado a minHeight para móviles
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4, md: 0 }, // Padding vertical para móviles
      }}
    >
      {/* Sección 1 - Contenido */}
      <Box
        sx={{
          height: { md: "100%" },
          width: { xs: "100%", md: "50%" },
          display: "flex",
          padding: { xs: 2, sm: 4, md: 6, lg: 10 }, // Padding responsive
          flexDirection: "column",
          justifyContent: "center",
          order: { xs: 2, md: 1 }, // Cambia orden en móviles si es necesario
        }}
      >
        <Typography
          component={motion.h2}
          variant="h2"
          fontWeight="bold"
          sx={{ color: "darkgreen" }}
          mb={{ xs: 3, md: 5 }}
          fontSize={{
            xs: "1.5rem",
            sm: "1.75rem",
            md: "2.25rem",
            lg: "2.5rem",
          }} // Escalado mejorado
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Invernaderos Tipo Capilla Cultivo Eficiente y Duradero
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
            lineHeight: 1.5,
            mb: { xs: 2, md: 3 },
          }}
          component={motion.p}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
        >
          &quot;Maximiza tu producción agrícola con nuestros invernaderos tipo
          capilla, diseñados para ofrecer resistencia, climatización óptima y
          alto rendimiento en cualquier temporada. ¡Ideales para pequeños y
          medianos productores!&quot;
        </Typography>

        {/* Características */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 1, md: 2 },
          }}
        >
          {[
            {
              title: "✔ Diseño duradero y resistente.",
              desc: "Diseño en forma de arco que soporta vientos y lluvias intensas.",
              desc2:
                "✅ Control climático eficiente – Ventilación natural y distribución uniforme de temperatura.",
              desc3:
                "✅ Versatilidad de cultivo – Perfecto para hortalizas, flores y berries.",
              desc4:
                "✅ Materiales duraderos – Cubierta en policarbonato o plástico UV protegido.",
            },
            {
              title: "✔ Opciones de personalización.",
              desc: "Adaptamos los invernaderos a tus necesidades.",
              desc1: "✅ Fácil instalación – Adaptable a terrenos irregulares.",
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
                delay: 0.4 + index * 0.2,
              }}
              sx={{ mb: { xs: 1.5, md: 2 } }}
            >
              <Typography
                fontWeight="bold"
                fontSize={{ xs: "1rem", md: "1.125rem" }}
                mb={0.5}
              >
                {feature.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.8125rem", md: "1rem" },
                  lineHeight: 1.5,
                }}
              >
                {feature.desc}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Botón */}
        <Button
          component={motion.a}
          href="/greenHouse"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
          variant="contained"
          size="medium"
          sx={{
            mt: { xs: 3, md: 5 },
            mb: { xs: 2, md: 0 },
            backgroundColor: "green",
            color: "#fff",
            alignSelf: { xs: "center", md: "flex-start" },
          }}
        >
          Más información
        </Button>
      </Box>

      {/* Sección 2 - Imagen */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: 2, md: 4 },
          order: { xs: 1, md: 2 }, // Imagen arriba en móviles
        }}
      >
        <Box
          component="img"
          src="https://res.cloudinary.com/dd5zkfvbo/image/upload/v1744211589/planos%20inver/xsyfvcunpesgcyvkemfi.png"
          alt="Invernadero tipo capilla"
          sx={{
            width: "100%",
            maxWidth: "600px",
            height: "auto",
            objectFit: "contain",
            borderRadius: { xs: 0, md: 2 },
          }}
        />
      </Box>
    </Box>
  );
}

export default InformationGreenHouse;
