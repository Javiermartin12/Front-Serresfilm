"use client";

import {
  Box,
  Typography,
  Container,
  useTheme,
  Grid,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import WorkerTeamCard from "../WorkerTeamCard";
import { motion } from "framer-motion";

const Workers = [
  {
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Jesús Martín",
    job: "CEO",
    description:
      "Con más de 20 años de experiencia, lidera la visión y estrategia global de la empresa.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "María del Carmen",
    job: "CFO",
    description:
      "Responsable de la planificación financiera y el crecimiento económico sostenible.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Javier Martin",
    job: "CTO",
    description:
      "Encargado de la innovación tecnológica y la supervisión de todos los desarrollos técnicos.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Elena Martin",
    job: "CMO",
    description:
      "Especialista en marketing y comunicación estratégica para posicionar nuestra marca.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Jesus Martin",
    job: "CIO",
    description:
      "Encargado de procesos de elaboracion de material y capacitacion del personal.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Abdellah Nasiri",
    job: "Encargado taller",
    description:
      "Tecnico encargado de realizar procesos de elaboracion de material y capacitacion de nuevo personal.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const OurTeam = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        backgroundColor: theme.palette.background.paper,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, transparent 100%)`,
          opacity: 0.05,
          zIndex: 0,
        },
      }}
    >
      <Container
        maxWidth="xl"
        component={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: isMobile ? "-100px" : "-200px" }}
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Box textAlign="center" mb={10}>
          <Typography
            variant="h2"
            fontWeight="bold"
            color="text.primary"
            component={motion.h2}
            variants={itemVariants}
            sx={{
              mb: 4,
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -10,
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "4px",
                background: theme.palette.primary.main,
                borderRadius: "2px",
              },
            }}
          >
            Nuestro Equipo
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            component={motion.p}
            variants={itemVariants}
            mt={4}
            sx={{
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Conoce al talentoso equipo que impulsa nuestra visión y hace
            realidad cada proyecto con dedicación y experiencia.
          </Typography>
        </Box>

        <Grid container spacing={6} justifyContent="center">
          {Workers.map((worker, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2.4}
              component={motion.div}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <WorkerTeamCard
                avatar={worker.avatar}
                name={worker.name}
                job={worker.job}
                description={worker.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurTeam;
