import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

function ServicesGreenhouse() {
  const services = [
    {
      title: "Mantenimiento de Plásticos y Mallas",
      description:
        "Extracción e instalación eficiente de plásticos y mallas protectoras. Nos encargamos del recambio y colocación de plásticos y mallas, asegurando una correcta protección y aislamiento del invernadero en todo momento.",
      icon: "🔄",
    },
    {
      title: "Mantenimiento de Automatismos y Control Climático",
      description:
        "Revisión de sistemas de clima, riego y componentes eléctricos. Realizamos el mantenimiento de automatismos como controladores de clima, finales de carrera, sistemas de riego y más, para garantizar un funcionamiento óptimo y sin fallos.",
      icon: "⚙️ ",
    },
    {
      title: "Mantenimiento de Ventanas, Perfiles y Estructura Metálica",
      description:
        "Cuidado integral de ventanas, perfiles de aluminio y estructuras de hierro. Conservamos la integridad estructural de tu invernadero mediante la revisión y reparación de sus componentes clave, evitando el deterioro y prolongando su vida útil.",
      icon: "🧱",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
        backgroundColor: "#f8fafc",
      }}
    >
      {/* Header Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        sx={{
          width: "100%",
          maxWidth: "800px",
          textAlign: "center",
          mb: { xs: 4, md: 6 },
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "1.75rem", md: "2.5rem" },
            color: "primary.main",
            mb: 2,
          }}
        >
          Servicios
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            color: "text.secondary",
            mb: 3,
          }}
        >
          {"Soluciones integrales para la necesidad de su invernadero "}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.1rem" },
            lineHeight: 1.6,
            color: "text.primary",
            mb: 4,
          }}
        >
          Ofrecemos una gama de servicios diseñados para mejorar su experiencia
          en el invernadero. Desde la instalación hasta el mantenimiento,
          nuestro equipo de expertos está aquí para ayudarle en cada paso del
          proceso.
        </Typography>

        {/* CTA Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            size="large"
            href="tel:+34649961062"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              backgroundColor: "primary.main",
              "&:hover": { backgroundColor: "primary.dark" },
            }}
          >
            Contactar
          </Button>
        </Box>
      </Box>

      <Divider sx={{ width: "80%", my: 2, borderColor: "divider" }} />

      {/* Services Grid */}
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: { xs: 3, md: 4 },
          mt: { xs: 3, md: 6 },
          maxWidth: "1200px",
        }}
      >
        {services.map((service, index) => (
          <Card
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            sx={{
              height: "100%",
              borderRadius: 3,
              boxShadow: 3,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent
              sx={{
                p: { xs: 3, md: 4 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "3rem",
                  mb: 2,
                  lineHeight: 1,
                }}
              >
                {service.icon}
              </Typography>
              <Typography
                variant="h5"
                component="h3"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  color: "primary.dark",
                  mb: 2,
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  color: "text.secondary",
                }}
              >
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default ServicesGreenhouse;
