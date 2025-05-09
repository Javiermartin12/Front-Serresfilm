"use client";

import {
  Box,
  Container,
  Typography,
  useTheme,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const valores = [
  {
    title: "Compromiso con el Medio Ambiente",
    description:
      "Promovemos soluciones sostenibles que respetan el entorno natural, apostando por una agricultura eficiente y ecológica.",
    icon: "🌱",
  },
  {
    title: "Innovación y Tecnología",
    description:
      "Implementamos tecnologías de vanguardia en cada proyecto, adaptándonos a las nuevas necesidades del sector agrícola.",
    icon: "💡",
  },
  {
    title: "Cercanía y Confianza",
    description:
      "Mantenemos un trato directo y transparente con nuestros clientes, acompañándolos en todo el proceso.",
    icon: "🤝",
  },
];

export default function ValoresEmpresa() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
        py: { xs: 8, md: 12 },
        color: "common.white",
      }}
    >
      <Container
        maxWidth="lg"
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Typography
          component={motion.h2}
          variants={itemVariants}
          variant="h2"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            mb: 2,
            textAlign: "center",
          }}
        >
          Valores que nos definen
        </Typography>

        <Typography
          component={motion.p}
          variants={itemVariants}
          variant="h5"
          sx={{
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            color: "rgba(255,255,255,0.9)",
            textAlign: "center",
            mb: 6,
          }}
        >
          Trabajamos por un futuro más verde, justo e innovador
        </Typography>

        <Grid container spacing={4}>
          {valores.map((valor, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              component={motion.div}
              variants={itemVariants}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  p: 3,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderRadius: 4,
                  boxShadow: 4,
                }}
              >
                <Box
                  sx={{
                    fontSize: "3rem",
                    mb: 2,
                  }}
                >
                  {valor.icon}
                </Box>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {valor.title}
                  </Typography>
                  <Typography variant="body1" color="rgba(255,255,255,0.85)">
                    {valor.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
