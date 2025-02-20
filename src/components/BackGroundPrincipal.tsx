import { Box, Typography } from "@mui/material";
import React from "react";

import { motion } from "framer-motion";
import NavBar from "./NavBar";
function BackGroundPrincipal() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 2 }}
    >
      <NavBar />
      <Box
        component="img"
        src="/Greenhouse/Greenhouse-1.jpg"
        alt="invernadero"
        sx={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
        }}
      />
      <Typography
        variant="h5"
        component={motion.h5}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 10 }}
        transition={{ duration: 1, ease: "backIn" }}
        sx={{
          position: "absolute",
          top: { xs: "40%", sm: "35%", md: "48%", lg: "33%", xl: "23%" },
          left: { xs: "40%", sm: "40%", md: "40%", lg: "3%", xl: "23%" },
          transform: "translate(-50%, -50%)",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",

          fontSize: {
            xs: "2.1rem",
            sm: "2rem",
            md: "3rem",
            lg: "1.7rem",
            xl: "3rem",
          },
        }}
      >
        Mas eficiencia en tus cultivos.
      </Typography>
      <Typography
        variant="h2"
        component={motion.h2}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 10 }}
        transition={{ duration: 1, ease: "backIn" }}
        sx={{
          position: "absolute",
          top: { xs: "40%", sm: "35%", md: "48%", lg: "45%", xl: "23%" },
          left: { xs: "40%", sm: "40%", md: "40%", lg: "35.5%", xl: "23%" },
          transform: "translate(-50%, -50%)",
          fontWeight: "bold",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "translate(-41%, -50%) scale(1.1)",
          },
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          fontSize: {
            xs: "2.1rem",
            sm: "2rem",
            md: "3rem",
            lg: "3rem",
            xl: "3rem",
          },
        }}
      >
        Aumenta tu producción, cultiva tus plantas a otro nivel.
      </Typography>
    </motion.div>
  );
}

export default BackGroundPrincipal;
