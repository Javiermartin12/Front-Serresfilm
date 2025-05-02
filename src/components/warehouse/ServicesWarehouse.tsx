import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
  useTheme,
  Stack,
  Container,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

function ServicesWarehouse() {
  const theme = useTheme();

  const services = [
    {
      title: "Mantenimiento Integral de Estructuras y Cubiertas",
      description:
        "Nuestro equipo técnico realiza mantenimiento especializado en techos, chapas y estructuras metálicas, asegurando que tu almacén conserve su resistencia y funcionalidad a lo largo del tiempo. Evita filtraciones, deformaciones o deterioros que puedan afectar tu producción.",
      icon: "🛠️",
      color: theme.palette.primary.light,
    },
    {
      title: "Puertas automatizadas, sistemas de apertura y seguridad a medida",
      description:
        "Moderniza tu almacén con automatismos adaptados a tu operativa diaria: puertas enrollables, batientes o correderas con motor, sensores de seguridad y sistemas de control remoto. Mejora la eficiencia y reduce el esfuerzo manual.",
      icon: "⚙️",
      color: theme.palette.secondary.light,
    },
    {
      title: "Soluciones en Materiales de Alta Eficiencia",
      description:
        "Cada proyecto requiere un tipo de material diferente. Te asesoramos e instalamos la opción más adecuada: Panel sándwich para un aislamiento térmico y acústico superior.        Policarbonato para mayor iluminación natural.Cubiertas textiles para soluciones ligeras y flexibles.Nos encargamos de todo el proceso, desde la selección hasta la instalación final.",
      icon: "🔧",
      color: theme.palette.info.light,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 4 },
        backgroundColor: "background.paper",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "400px",
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          zIndex: 0,
          borderRadius: "0 0 20% 20%",
          [theme.breakpoints.down("md")]: {
            height: "300px",
            borderRadius: "0 0 15% 15%",
          },
        },
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: "800px",
            mx: "auto",
            textAlign: "center",
            mb: { xs: 6, md: 8 },
            px: { xs: 0, sm: 2 },
          }}
        >
          <Typography
            component={motion.div}
            variants={itemVariants}
            variant="h2"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              color: "common.white",
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Servicios
          </Typography>
          <Typography
            component={motion.div}
            variants={itemVariants}
            variant="h5"
            sx={{
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              color: "rgba(255,255,255,0.9)",
              mb: 3,
            }}
          >
            Eleva tu experiencia de almacenamiento con nuestros servicios
            especializados. Desde el mantenimiento de estructuras hasta la
            instalación de sistemas automatizados.
          </Typography>

          {/* CTA Buttons */}
          <Stack
            component={motion.div}
            variants={itemVariants}
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 5,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: 2,
                boxShadow: theme.shadows[4],
                "&:hover": {
                  boxShadow: theme.shadows[8],
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Contacto
            </Button>
          </Stack>
        </Box>

        {/* Services Grid */}
        <Box
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
          sx={{
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: { xs: 3, md: 4 },
            mt: { xs: 4, md: 6 },
            maxWidth: "1400px",
            mx: "auto",
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              component={motion.div}
              variants={itemVariants}
              sx={{
                height: "100%",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: theme.shadows[6],
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: theme.shadows[12],
                },
                border: "none",
                background: theme.palette.background.paper,
              }}
            >
              <Box
                sx={{
                  height: "8px",
                  width: "100%",
                  background: service.color,
                }}
              />
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
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: `${service.color}20`,
                    borderRadius: "50%",
                    mb: 3,
                    fontSize: "2.5rem",
                  }}
                >
                  {service.icon}
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                    mb: 2,
                    color: "text.primary",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    color: "text.secondary",
                    mb: 3,
                  }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Additional Content Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{
            position: "relative",
            zIndex: 1,
            maxWidth: "800px",
            mx: "auto",
            textAlign: "center",
            mt: { xs: 8, md: 12 },
            mb: { xs: 2, md: 0 },
            px: { xs: 0, sm: 2 },
            backgroundColor: "background.paper",
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            boxShadow: theme.shadows[2],
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              mb: 3,
              color: "text.primary",
            }}
          >
            ¿Por que nos eligen?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              color: "text.secondary",
              mb: 4,
            }}
          >
            Con más de 25 años de experiencia en soluciones para invernaderos,
            combinamos tecnología de vanguardia con prácticas sostenibles para
            ofrecer resultados excepcionales. Nuestro equipo de profesionales
            certificados está comprometido con la excelencia en cada proyecto.
          </Typography>
          <Divider sx={{ my: 3, mx: "auto", width: "80%" }} />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
              gap: 3,
              mt: 4,
            }}
          >
            {["25+ Years Experience", "100% Satisfaction", "Economic"].map(
              (item, i) => (
                <Box key={i} sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, color: theme.palette.primary.main }}
                  >
                    {item.split(" ")[0]}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.split(" ").slice(1).join(" ")}
                  </Typography>
                </Box>
              )
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default ServicesWarehouse;
