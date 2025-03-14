"use client";

import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Box,
  Typography,
  Divider,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import {
  ContactMail,
  Home,
  Info,
  Storefront,
  Warehouse,
} from "@mui/icons-material";

const navLinks = [
  { label: "Inicio", href: "/", icon: <Home /> },
  { label: "Invernaderos", href: "/greenHouse", icon: <Storefront /> },
  { label: "Almacenes", href: "/wareHouse", icon: <Warehouse /> },
  { label: "Maquinaria", href: "/machinery", icon: <Storefront /> },
  { label: "Conócenos", href: "/about", icon: <Info /> },
  { label: "Contacto", href: "/contact", icon: <ContactMail /> },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = (state: boolean) => () => setOpen(state);

  // Efecto para cambiar el navbar cuando se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar principal */}
      <AppBar
        color="transparent"
        elevation={scrolled ? 4 : 0} // Sombra cuando hay scroll
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          transition:
            "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.8)"
            : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transform: scrolled ? "translateY(0)" : "translateY(-10px)",
          height: "70px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: "1200px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
          }}
        >
          {/* Menú hamburguesa en móviles */}
          <IconButton
            aria-label="menu"
            sx={{
              display: { xs: "block", md: "none" },
              color: "text.primary",
              p: 1.5,
            }}
            onClick={handleDrawerToggle(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          {/* Logo */}
          <Box
            sx={{
              height: "50px",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Logo />
          </Box>

          {/* Navegación en escritorio */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              pr: 4,
            }}
          >
            {navLinks.map((link, index) => (
              <Button
                key={`${link.href}-${index}`}
                component={Link}
                href={link.href}
                sx={{
                  color: "text.primary",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  transition: "color 0.3s ease-in-out",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Menú lateral (Drawer) */}
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerToggle(false)}
        PaperProps={{
          sx: {
            width: 270,
            backgroundColor: "#f9f9f9",
            boxShadow: 3,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 2,
            height: "100%",
          }}
        >
          {/* Logo en el menú */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Logo />
          </Box>

          <Divider />

          {/* Enlaces */}
          {navLinks.map((link, index) => (
            <Button
              key={`${link.href}-drawer-${index}`}
              component={Link}
              href={link.href}
              color="inherit"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                px: 2,
                py: 1.5,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": { backgroundColor: "rgba(172, 172, 172, 0.1)" },
              }}
              onClick={handleDrawerToggle(false)}
            >
              {link.icon}
              <Typography sx={{ ml: 1 }}>{link.label}</Typography>
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
}

export default NavBar;
