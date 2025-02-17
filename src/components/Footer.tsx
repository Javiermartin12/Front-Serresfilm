"use client";
import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333", // Color de fondo
        color: "white", // Color del texto
        py: 3, // Padding vertical
        px: 2, // Padding horizontal
        mt: "auto", // Empuja el footer al final de la página
      }}
    >
      <Container maxWidth="lg">
        {/* Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 1,
          }}
        >
          <Link href="#" color="inherit" underline="hover">
            Términos y Condiciones
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Política de Privacidad
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Contacto
          </Link>
        </Box>
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} Tu Empresa. Todos los derechos
          reservados.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
