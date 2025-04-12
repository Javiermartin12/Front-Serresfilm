import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

function CallToAction() {
  return (
    <Box
      sx={{
        minHeight: { xs: "auto", md: "35vh" },
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f7fa",
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, md: 0 },
        px: { xs: 2, md: 0 },
      }}
    >
      {/* Efecto de fondo decorativo */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(46,125,50,0.1) 0%, rgba(255,255,255,1) 100%)",
          zIndex: 0,
        }}
      />

      {/* Contenido de texto */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        sx={{
          width: { xs: "100%", md: "60%" },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-end" },
          justifyContent: "center",
          textAlign: { xs: "center", md: "right" },
          pr: { md: 6 },
          pl: { xs: 2, md: 0 },
          zIndex: 1,
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
            color: "primary.main",
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          Get Your Greenhouse Today!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.1rem" },
            color: "text.secondary",
            maxWidth: "500px",
            mb: { xs: 3, md: 0 },
          }}
        >
          Contact us now for a personalized quote.
        </Typography>
      </Box>

      {/* Botones de acción */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        sx={{
          width: { xs: "100%", md: "40%" },
          display: "flex",
          flexDirection: { xs: "row", sm: "row" },
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-start" },
          gap: 3,
          pl: { md: 6 },
          pr: { xs: 2, md: 0 },
          zIndex: 1,
          mt: { xs: 3, md: 0 },
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            px: { xs: 3, md: 4 },
            py: 1.5,
            fontSize: "1rem",
            backgroundColor: "primary.main",
            color: "white",
            minWidth: "120px",
            "&:hover": {
              backgroundColor: "primary.dark",
              transform: "translateY(-2px)",
              boxShadow: 3,
            },
            transition: "all 0.3s ease",
          }}
        >
          Request
        </Button>
        <Button
          variant="outlined"
          size="large"
          sx={{
            px: { xs: 3, md: 4 },
            py: 1.5,
            fontSize: "1rem",
            borderColor: "primary.main",
            color: "primary.main",
            minWidth: "120px",
            "&:hover": {
              borderColor: "primary.dark",
              color: "primary.dark",
              backgroundColor: "rgba(46, 125, 50, 0.04)",
              transform: "translateY(-2px)",
              boxShadow: 3,
            },
            transition: "all 0.3s ease",
          }}
        >
          Inquire
        </Button>
      </Box>
    </Box>
  );
}

export default CallToAction;
