import { Box, Typography } from "@mui/material";
import React from "react";

import { motion } from "framer-motion";
import NavBar from "../NavBar";
function HeaderHome() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 2 }}
    >
      <NavBar />
      <Box
        component="img"
        src="https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741107306/Greenhouse-1_atu5vj.jpg"
        alt="invernadero"
        sx={{
          width: "100%",
          filter: "brightness(0.9)", //Sombreado interior
          height: "100vh",
          objectFit: "cover",
        }}
      />
      <Typography
        variant="h2"
        component={motion.h2}
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: { xs: "20%", sm: "35%", md: "25%", lg: "23%", xl: "23%" },
          left: { xs: "5%", sm: "2%", md: "5%", lg: "3%", xl: "23%" },
          width: { xs: "70%", sm: "60%", md: "60%", lg: "70%", xl: "60%" },
          transform: "translate(-50%, -50%)",
          fontWeight: "bold",
          textShadow: "0px 2px 2px rgba(0, 0, 0, 0.7)",
          color: "darkgreen",

          fontSize: {
            xs: "2.5rem",
            sm: "2rem",
            md: "4rem",
            lg: "4rem",
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
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: { xs: "45%", sm: "55%", md: "50%", lg: "45%", xl: "23%" },
          left: { xs: "5%", sm: "2%", md: "5%", lg: "3%", xl: "23%" },
          width: { xs: "70%", sm: "70%", md: "60%", lg: "70%", xl: "60%" },
          transform: "translate(-50%, -50%)",
          color: "darkgreen",
          fontWeight: "bold",
          textShadow: "0px 1.5px 1.5px rgba(0, 0, 0, 0.7)",
          fontSize: {
            xs: "1.3rem",
            sm: "1.3rem",
            md: "1.5rem",
            lg: "1.5rem",
            xl: "1.5rem",
          },
        }}
      >
        Aumenta tu producción, cultiva tus plantas a otro nivel.
      </Typography>
    </motion.div>
  );
}

export default HeaderHome;
