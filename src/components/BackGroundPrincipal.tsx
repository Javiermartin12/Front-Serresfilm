import { Box, Button, Typography } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

import { motion } from "framer-motion";
function BackGroundPrincipal() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 2 }}
    >
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
        variant="h2"
        sx={{
          position: "absolute",
          top: { xs: "57%", sm: "25%", md: "22%", lg: "17%", xl: "23%" },
          left: { xs: "46%", sm: "25%", md: "22%", lg: "17%", xl: "23%" },
          transform: "translate(-50%, -50%)",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          fontSize: {
            xs: "2rem", // Tamaño en pantallas pequeñas
            sm: "3rem", // Tamaño en pantallas medianas
            md: "4rem", // Tamaño en pantallas grandes
            lg: "5rem", // Tamaño en pantallas muy grandes
          },
        }}
      >
        Welcome to Serresfilm Greenhouse, the best place to grow your plants.
      </Typography>
      <Button
        variant="contained"
        size="large"
        color="primary"
        endIcon={<SendIcon />}
        sx={{
          position: "absolute",
          bottom: { xs: "22%", sm: "23%", md: "35%", lg: "35%", xl: "35%" },
          left: { xs: "27%", sm: "25%", md: "22%", lg: "17%", xl: "23%" },
          transform: "translate(-50%, -50%)",
        }}
      >
        Invernaderos
      </Button>
      <Box sx={{}}></Box>
    </motion.div>
  );
}

export default BackGroundPrincipal;
