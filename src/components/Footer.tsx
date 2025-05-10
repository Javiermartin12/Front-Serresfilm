import React from "react";
import { Box, Typography, Link, Stack, Button, Divider } from "@mui/material";
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://www.facebook.com/Invernaderos-Serresfilm-100057513666305/",
    icon: <FacebookIcon fontSize="medium" />,
    label: "Facebook",
    color: "#1877F2",
  },
  {
    href: "https://www.instagram.com/serresfilm_invernaderos/",
    icon: <InstagramIcon fontSize="medium" />,
    label: "Instagram",
    color: "#E4405F",
  },
  {
    href: "https://wa.me/34633615900",
    icon: <WhatsAppIcon fontSize="medium" />,
    label: "WhatsApp",
    color: "#25D366",
  },
];

const footerLinks = [
  {
    title: "Productos",
    links: [
      { label: "Invernaderos", href: "/greenHouse" },
      { label: "Almacenes", href: "/wareHouse" },
      { label: "Maquinaria", href: "/machinery" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { label: "Contacto", href: "/contact" },
      { label: "Conócenos", href: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Política de privacidad", href: "/privacyPolicy" },
      { label: "Aviso legal", href: "/legalNotice" },
      { label: "Cookies", href: "/cookiesPolicy" },
    ],
  },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f8f9fa",
        padding: { xs: "2rem 1rem", md: "3rem 2rem" },
        marginTop: "auto",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "4px",
          background:
            "linear-gradient(90deg, #2e7d32 0%, #81c784 50%, #2e7d32 100%)",
        },
      }}
    >
      <Box
        component={motion.div}
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          right: "5%",
          top: "10%",
          opacity: 0.1,
          fontSize: "8rem",
          zIndex: 0,
          display: { xs: "none", md: "block" },
        }}
      >
        🌿
      </Box>

      <Box
        sx={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: 3, md: 4 },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Contacto */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          sx={{ gridColumn: { xs: "1", sm: "1 / span 2", md: "1" } }}
        >
          <Typography
            variant="h4"
            component="h2"
            color="primary.main"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 3, display: "flex", gap: 1 }}
          >
            Serresfilm SL
          </Typography>

          <Stack spacing={2}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <LocationIcon color="primary" />
              <Typography variant="body1">
                Calle XII, Nave 41,
                <br />
                Polg Ind De La Redonda
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <EmailIcon color="primary" />
              <Link
                href="mailto:jmmserres@gmail.com"
                sx={{
                  textDecoration: "none",
                  color: "text.primary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                jmmserres@gmail.com
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <PhoneIcon color="primary" />
              <Link
                href="tel:+34633615900"
                sx={{
                  textDecoration: "none",
                  color: "text.primary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                +34 633 615 900
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <PhoneIcon color="primary" />
              <Link
                href="tel:+34649961062"
                sx={{
                  textDecoration: "none",
                  color: "text.primary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                +34 649 961 062
              </Link>
            </Box>

            <Button
              variant="outlined"
              size="small"
              href="https://www.google.com/maps/place/C.+XII,+41,+04710+El+Ejido,+Almer%C3%ADa/@36.7867406,-2.7476513,186m/data=!3m2!1e3!4b1!4m6!3m5!1s0xd70684ee93a8f71:0x7b4a12c2baafed23!8m2!3d36.7867406!4d-2.7470076!16s%2Fg%2F11c5npjkqp?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                mt: 2,
                alignSelf: "flex-start",
                borderColor: "primary.main",
                color: "primary.main",
                "&:hover": {
                  backgroundColor: "primary.main",
                  color: "white",
                },
              }}
            >
              Ver en mapa
            </Button>
          </Stack>
        </Box>

        {/* Enlaces del footer */}
        {footerLinks.map((section, index) => (
          <Box
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{
                fontWeight: "bold",
                mb: 3,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                component="span"
                sx={{
                  width: "30px",
                  height: "3px",
                  backgroundColor: "primary.main",
                  display: "inline-block",
                }}
              />
              {section.title}
            </Typography>

            <Stack spacing={1.5}>
              {section.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  component={motion.a}
                  whileHover={{ x: 5 }}
                  sx={{
                    textDecoration: "none",
                    color: "text.secondary",
                    "&:hover": {
                      color: "primary.main",
                      fontWeight: "500",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Box>
        ))}
      </Box>

      <Divider sx={{ my: { xs: 3, md: 4 }, borderColor: "rgba(0,0,0,0.1)" }} />

      {/* Pie inferior */}
      <Box
        sx={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Serresfilm SL. Todos los derechos
          reservados.
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          {socialLinks.map(({ href, icon, label, color }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              sx={{
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: "background.paper",
                color: color,
                boxShadow: 1,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: 3,
                  backgroundColor: color,
                  color: "white",
                },
              }}
            >
              {icon}
            </Link>
          ))}
        </Box>

        <Typography variant="body2" color="textSecondary">
          Diseñado con ♥ por Serresfilm
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
