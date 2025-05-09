import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
  Grow,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";

const AnimatedText: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const OurHistory = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="section"
      aria-labelledby="our-history-heading"
      sx={{
        py: { xs: 10, md: 16 },
        bgcolor: "background.default",
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(46,125,50,0.05) 0%, rgba(255,255,255,0) 50%)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="xl">
        <InView
          threshold={0.2}
          onChange={(inView) => inView && controls.start("visible")}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column-reverse", md: "row" },

              gap: { xs: 4, md: 8 },
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Texto con animaciones */}
            <Box sx={{ flex: 1, pr: { md: 4 } }}>
              <Typography
                variant={isMobile ? "h4" : "h3"}
                fontWeight="bold"
                gutterBottom
                id="our-history-heading"
                sx={{
                  color: "primary.main",
                  position: "relative",
                  mb: 4,
                  "&:after": {
                    content: '""',
                    display: "block",
                    width: "100px",
                    height: "4px",
                    backgroundColor: "secondary.main",
                    mt: 2,
                    transformOrigin: "left",
                    transform: hovered ? "scaleX(1.2)" : "scaleX(1)",
                    transition: "transform 0.3s ease",
                  },
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <AnimatedText>Nuestra Historia</AnimatedText>
              </Typography>

              <AnimatedText delay={0.2}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  paragraph
                  sx={{
                    lineHeight: 1.8,
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    mb: 3,
                  }}
                >
                  Serresfilm S.L. nace en el año 2013 de la mano de Jesús Martín
                  Martín, un emprendedor con más de dos décadas de experiencia
                  en el sector agrícola. Tras verse obligado a abandonar su
                  anterior empresa por la crisis económica de 2010, Jesús decide
                  apostar por un nuevo comienzo. Así surge Serresfilm, una
                  empresa familiar que desde el principio ha mantenido intactos
                  sus valores de calidad, cercanía y trato humano. Los inicios
                  fueron humildes: una nave de 200 m² en El Ejido (Almería),
                  donde se retomó la fabricación y venta de invernaderos y naves
                  agrícolas, productos que Jesús ya conocía a fondo desde 1995.
                  Gracias al esfuerzo constante y al compromiso con nuestros
                  clientes —mayoritariamente agricultores—, la empresa ha
                  experimentado un crecimiento sostenido hasta contar hoy con
                  2.500 m² de infraestructura propia. En 2015, dimos un paso más
                  incorporando la fabricación de maquinaria agrícola, una línea
                  que actualmente representa uno de los pilares más sólidos de
                  Serresfilm. A lo largo de estos años hemos tenido el
                  privilegio de participar en proyectos tanto nacionales como
                  internacionales, destacando el diseño, venta y montaje de
                  invernaderos en España, Dubái y Catar. Hoy, Serresfilm
                  continúa creciendo con la misma filosofía que la vio nacer:
                  trabajar con pasión, mantener una relación cercana con cada
                  cliente y ofrecer siempre un producto de máxima calidad
                  adaptado a las necesidades del campo actual.
                  {/* Texto truncado por brevedad */}
                </Typography>
              </AnimatedText>
            </Box>

            {/* Imagen con efectos */}
            <Box sx={{ flex: 1 }}>
              <Grow in timeout={800}>
                <Box
                  sx={{
                    position: "relative",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: theme.shadows[10],
                    height: { xs: "300px", md: "500px" },
                    "&:hover img": {
                      transform: "scale(1.05)",
                    },
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)",
                      zIndex: 1,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="https://res.cloudinary.com/dd5zkfvbo/image/upload/v1746540394/Invernaderos/fdmcydfvbr8qfwwmijbx.jpg"
                    alt="Invernaderos en Almería"
                    loading="lazy"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease, filter 0.3s ease",
                      transform: `translateY(${offsetY * 0.1}px)`,
                      filter: hovered ? "brightness(1.05)" : "brightness(1)",
                    }}
                  />
                  <Box
                    sx={{
                      zIndex: 2,
                      color: "white",
                      width: "100%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)",
                      px: 2,
                      py: 1,
                    }}
                  >
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      Campo de Almería, 1995
                    </Typography>
                  </Box>
                </Box>
              </Grow>
            </Box>
          </Box>
        </InView>
      </Container>
    </Box>
  );
};

export default OurHistory;
