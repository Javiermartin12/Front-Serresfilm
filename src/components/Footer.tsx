import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";

const socialLinks = [
  {
    href: "https://www.facebook.com/Invernaderos-Serresfilm-100057513666305/",
    icon: <FacebookIcon />,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/serresfilm_invernaderos/",
    icon: <InstagramIcon />,
    label: "Instagram",
  },
  {
    href: "https://wa.me/34633615900",
    icon: <WhatsAppIcon />,
    label: "WhatsApp",
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        padding: "2rem",
        marginTop: "auto",
      }}
    >
      {/* Contenedor principal */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "space-around", // 📌 Centra las secciones
          alignItems: { xs: "center", sm: "left", md: "start" }, // 📌 Centra en el eje Y
          gap: 3,
        }}
      >
        {/* Sección de contacto y logo */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: { xs: "100%", sm: "25%" },
            textAlign: { xs: "center", sm: "center", md: "left" },
          }}
        >
          <Typography
            variant="h3"
            color="primary.main"
            gutterBottom
            sx={{ mt: 2 }}
          >
            Serresfilm SL
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Dirección:
          </Typography>
          <Typography variant="body2">
            Calle XII, Nave 41, Polg Ind De La Redonda
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            Contacto:
          </Typography>
          <Link
            href="mailto:jmmserres@gmail.com"
            sx={{
              fontSize: 15,
              textDecoration: "none",
              display: "block",
              mt: 1,
            }}
          >
            jmmserres@gmail.com
          </Link>
          <Link
            href="tel:+34633615900"
            sx={{ fontSize: 15, textDecoration: "none", display: "block" }}
          >
            +34 633 615 900
          </Link>
          <Link
            href="tel:+34649961062"
            sx={{ fontSize: 15, textDecoration: "none", display: "block" }}
          >
            +34 649 961 062
          </Link>
        </Box>

        {/* Sección de enlaces */}
        {[
          {
            title: "Información",
            links: [
              "Product Catalog",
              "Customer Support",
              "About Us",
              "Contact Us",
            ],
          },
          { title: "Recursos", links: ["Our Team", "Careers", "Testimonials"] },
          {
            title: "Legal",
            links: [
              "Privacy Policy",
              "Terms of Service",
              "Cookies Settings",
              "Site Map",
              "Accessibility Statement",
            ],
          },
        ].map((section, index) => (
          <Box
            key={index}
            sx={{
              maxWidth: { xs: "100%", sm: "20%" },
              textAlign: { xs: "center", sm: "center", md: "left" }, // 📌 Centra la sección
            }}
          >
            <Typography variant="h5" gutterBottom>
              {section.title}
            </Typography>
            <Stack
              spacing={1}
              alignItems={{ xs: "left", md: "left" }}
              sx={{ padding: 2 }} // 📌 Centra los enlaces
            >
              {" "}
              {/* 📌 Centra los enlaces */}
              {section.links.map((link, i) => (
                <Link
                  key={i}
                  href="#"
                  color="inherit"
                  sx={{
                    textDecoration: "none",
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
          </Box>
        ))}
      </Box>

      {/* Derechos de autor y redes sociales */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center", // 📌 Centra en el eje Y
          justifyContent: "center", // 📌 Centra en el eje X
          marginTop: "5rem",
          paddingTop: "1rem",
          borderTop: "1px solid #e0e0e0",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © 2025 Serresfilm SL. Derechos reservados.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
          {socialLinks.map(({ href, icon, label }, index) => (
            <Link key={index} href={href} color="inherit" aria-label={label}>
              <Box
                sx={{
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.4)" },
                }}
              >
                {icon}
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
