import { Box, Button, Typography } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

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
        variant="h2"
        sx={{
          position: "absolute",
          top: { xs: "40%", sm: "35%", md: "48%", lg: "45%", xl: "23%" },
          left: { xs: "40%", sm: "40%", md: "40%", lg: "40.3%", xl: "23%" },
          transform: "translate(-50%, -50%)",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          fontSize: {
            xs: "2.1rem",
            sm: "3rem",
            md: "3rem",
            lg: "3rem",
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
          bottom: { xs: "26%", sm: "35%", md: "25%", lg: "30%", xl: "35%" },
          left: { xs: "34%", sm: "23%", md: "19.3%", lg: "18.3%", xl: "23%" },
          transform: "translate(-50%, -50%)",
        }}
      >
        Invernaderos
      </Button>
    </motion.div>
  );
}

export default BackGroundPrincipal;
