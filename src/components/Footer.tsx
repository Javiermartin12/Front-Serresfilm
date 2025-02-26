import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "2rem",
        marginTop: "auto",
      }}
    >
      {/* Contenedor principal con Flexbox */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-around",
          gap: 4,
        }}
      >
        <Logo />
        {/* Columna 1: Información de la empresa */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Company Info
          </Typography>
          <Stack spacing={1}>
            <Link href="#" color="inherit">
              Product Catalog
            </Link>
            <Link href="#" color="inherit">
              Customer Support
            </Link>
            <Link href="#" color="inherit">
              About Us
            </Link>
            <Link href="#" color="inherit">
              Contact Us
            </Link>
            <Link href="#" color="inherit">
              FAQ Section
            </Link>
          </Stack>
        </Box>

        {/* Columna 2: Recursos */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Resources
          </Typography>
          <Stack spacing={1}>
            <Link href="#" color="inherit">
              Our Team
            </Link>
            <Link href="#" color="inherit">
              Careers
            </Link>
            <Link href="#" color="inherit">
              Blog Posts
            </Link>
            <Link href="#" color="inherit">
              Success Stories
            </Link>
            <Link href="#" color="inherit">
              Testimonials
            </Link>
          </Stack>
        </Box>

        {/* Columna 4: Legal */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Legal
          </Typography>
          <Stack spacing={1}>
            <Link href="#" color="inherit">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit">
              Terms of Service
            </Link>
            <Link href="#" color="inherit">
              Cookies Settings
            </Link>
            <Link href="#" color="inherit">
              Site Map
            </Link>
            <Link href="#" color="inherit">
              Accessibility Statement
            </Link>
          </Stack>
        </Box>
      </Box>

      {/* Derechos de autor */}
      <Box
        sx={{
          display: "flex",
          height: "50px",
          alignItems: "center",
          marginTop: "5rem",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Typography variant="body2" color="textSecondary" width="50%">
          © 2025 Serresfilm SL. Derechos reservados.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            gap: 2,
            width: "50%",
            alignContent: "end",
            justifyItems: "end",
          }}
        >
          <Link
            href="https://www.facebook.com/Invernaderos-Serresfilm-100057513666305/"
            color="inherit"
          >
            <Box
              sx={{
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.4)",
                },
              }}
            >
              <FacebookIcon
                sx={{
                  cursor: "pointer",
                }}
              />
            </Box>
          </Link>
          <Link
            href="https://www.instagram.com/serresfilm_invernaderos/"
            color="inherit"
          >
            <Box
              sx={{
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.4)",
                },
              }}
            >
              <InstagramIcon />
            </Box>
          </Link>
          <Link href="https://wa.me/34633615900" color="inherit">
            <Box
              sx={{
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.4)",
                },
              }}
            >
              <WhatsAppIcon />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
