"use client";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
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
  { label: "Unete", href: "/joinUs", icon: <Storefront /> },
  { label: "Contacto", href: "/contact", icon: <ContactMail /> },
];

function NavBar() {
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerToggle = (state: boolean) => () => setOpen(state);

  return (
    <>
      {/* Navbar principal */}

      <AppBar
        color="default"
        sx={{
          position: "absolute",
          flexDirection: "row",
          width: "100%",
          height: { xs: "8%", sm: "11%", md: "7%", lg: "7%", xl: "7%" },
        }}
      >
        <Toolbar
          sx={{
            display: { xs: "block", md: "none" },
            width: "50%",
            alignContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Menú hamburguesa en móviles */}

          <IconButton
            aria-label="menu"
            sx={{
              color: "text.primary",
              overflow: "hidden",

              display: {
                xs: "block",
                md: "none",
              },
            }}
            onClick={handleDrawerToggle(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        {/* Logo serresfilm en móviles */}
        <Box
          sx={{
            height: "100%",
            width: "60%",
            alignContent: "center",
          }}
        >
          <Box sx={{ height: "100%", width: "60%", alignContent: "center" }}>
            <Logo />
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignContent: "center",
            marginRight: "5%",
            width: { md: "none", lg: "60%", xl: "60%" },
            height: { md: "none", lg: "100%", xl: "100%" },
          }}
        >
          {navLinks.map((link, index) => (
            <Button
              key={`${link.href}-${index}`}
              component={Link}
              href={link.href}
              sx={{
                color: "text.primary",
                "&:hover": { backgroundColor: "rgba(172, 172, 172, 0.5)" },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </AppBar>
      {/* Drawer (Menú lateral en móviles) */}
      <Drawer
        anchor="left"
        PaperProps={{
          sx: {
            width: 250,
            backgroundColor: "#f4f4f4",
            transition: "transform 0.9s easeInOut",
          },
        }}
        open={open}
        onClose={handleDrawerToggle(false)}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 3,
            gap: 2,
            marginTop: 4,
          }}
        >
          {navLinks.map((link, index) => (
            <Button
              key={`${link.href}-drawer-${index}`} // Clave única con sufijo
              component={Link}
              href={link.href}
              color="inherit"
              sx={{
                display: "flex",
                alignItems: "center",
                "&:hover": { backgroundColor: "rgba(172, 172, 172, 0.2)" },
              }}
            >
              {link.icon}
              <Typography sx={{ marginLeft: 1 }}>{link.label}</Typography>
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
}

export default NavBar;
