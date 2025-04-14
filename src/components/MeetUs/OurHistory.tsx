import {
  Box,
  Typography,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
  Button,
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

  // Efecto parallax para la imagen
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
        py: { xs: 8, md: 12 },
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
          <Grid
            container
            spacing={{ xs: 4, md: 8 }}
            alignItems="center"
            direction={isMobile ? "column-reverse" : "row"}
            sx={{ position: "relative", zIndex: 1 }}
          >
            {/* Texto con animaciones */}
            <Grid item xs={12} md={6}>
              <Box sx={{ pr: { md: 4 } }}>
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
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      mb: 3,
                    }}
                  >
                    Fundada en{" "}
                    <Box
                      component="span"
                      sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                      1995
                    </Box>
                    , nuestra empresa ha crecido hasta convertirse en líder del
                    sector con presencia en 12 países. Desde nuestros inicios,
                    hemos revolucionado el mercado con innovación y calidad
                    excepcional.
                  </Typography>
                </AnimatedText>

                <AnimatedText delay={0.4}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                    sx={{
                      lineHeight: 1.8,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      mb: 4,
                    }}
                  >
                    Con más de{" "}
                    <Box
                      component="span"
                      sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                      25 años
                    </Box>{" "}
                    de experiencia, nuestro equipo de 150+ expertos desarrolla
                    soluciones personalizadas que han beneficiado a más de 5,000
                    clientes satisfechos en todo el mundo.
                  </Typography>
                </AnimatedText>

                <AnimatedText delay={0.6}>
                  <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size={isMobile ? "medium" : "large"}
                      sx={{
                        fontWeight: "bold",
                        px: 4,
                        py: 1.5,
                        borderRadius: "8px",
                        boxShadow: theme.shadows[4],
                        "&:hover": {
                          boxShadow: theme.shadows[8],
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Conoce nuestro equipo
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      size={isMobile ? "medium" : "large"}
                      sx={{
                        fontWeight: "bold",
                        px: 4,
                        py: 1.5,
                        borderRadius: "8px",
                        "&:hover": {
                          bgcolor: "secondary.light",
                          color: "white",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Ver línea de tiempo
                    </Button>
                  </Box>
                </AnimatedText>
              </Box>
            </Grid>

            {/* Imagen con efectos */}
            <Grid item xs={12} md={6}>
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
                    src="/images/about/history.jpg" // Ruta optimizada para Next.js
                    alt="Equipo fundador de la empresa en sus primeras instalaciones en 1995"
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
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      p: 3,
                      zIndex: 2,
                      color: "white",
                      width: "100%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                    }}
                  >
                    <Typography variant="caption" sx={{ opacity: 0.8 }}>
                      Nuestro primer taller en Barcelona, 1995
                    </Typography>
                  </Box>
                </Box>
              </Grow>
            </Grid>
          </Grid>
        </InView>
      </Container>
    </Box>
  );
};

export default OurHistory;
