"use client";

import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Box,
  Typography,
  Toolbar,
  MenuItem,
  Collapse,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import {
  ContactMail,
  Home,
  Info,
  Storefront,
  ExpandMore,
  ExpandLess,
  Phone,
} from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "/", icon: <Home /> },
  {
    label: "Productos",
    href: "#",
    icon: <Storefront />,
    subItems: [
      { label: "Invernaderos", href: "/greenHouse" },
      { label: "Almacenes", href: "/wareHouse" },
      { label: "Maquinaria", href: "/machinery" },
    ],
  },
  { label: "Conócenos", href: "/about", icon: <Info /> },
  { label: "Contacto", href: "/contact", icon: <ContactMail /> },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const theme = useTheme();

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleDrawerToggle = (state: boolean) => () => setOpen(state);

  const toggleExpand = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar principal */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 0.3)",
          backdropFilter: scrolled ? "blur(10px)" : "blur(5px)",
          boxShadow: scrolled ? theme.shadows[4] : "none",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          borderBottom: scrolled
            ? "none"
            : `1px solid ${theme.palette.divider}`,
          height: { xs: 70, md: 90 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2, md: 4 },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              height: { xs: 40, md: 50 },
              display: "flex",
              alignItems: "center",
            }}
          >
            <Logo />
          </Box>

          {/* Menú hamburguesa en móviles */}
          <IconButton
            aria-label="menu"
            sx={{
              display: { xs: "flex", md: "none" },
              color: "text.primary",
              p: 1,
              "&:hover": {
                backgroundColor: "rgba(46, 125, 50, 0.1)",
              },
            }}
            onClick={handleDrawerToggle(true)}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          {/* Navegación en escritorio */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
              height: "100%",
            }}
          >
            {navLinks.map((link, index) => (
              <Box
                key={`${link.href}-${index}`}
                sx={{
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {link.subItems ? (
                  <>
                    <Button
                      component={Link}
                      href={link.href}
                      aria-label={`Ir a ${link.label}`}
                      sx={{
                        color: "text.primary",
                        textTransform: "none",
                        fontWeight: 500,
                        fontSize: "1rem",
                        px: 2,
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: 0,
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: "primary.main",
                        },
                      }}
                      endIcon={
                        hoveredItem === index ? <ExpandLess /> : <ExpandMore />
                      }
                    >
                      {link.label}
                    </Button>

                    {/* Menú desplegable */}
                    <AnimatePresence>
                      {hoveredItem === index && (
                        <Box
                          component={motion.div}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.2 }}
                          sx={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            width: 220,
                            backgroundColor: "background.paper",
                            boxShadow: 3,
                            borderRadius: 1,
                            overflow: "hidden",
                            zIndex: theme.zIndex.appBar + 1,
                            py: 1,
                          }}
                        >
                          {link.subItems.map((subItem, subIndex) => (
                            <MenuItem
                              key={subIndex}
                              component={Link}
                              href={subItem.href}
                              sx={{
                                px: 3,
                                py: 1.5,
                                "&:hover": {
                                  backgroundColor: "rgba(46, 125, 50, 0.08)",
                                },
                              }}
                            >
                              <Typography variant="body1">
                                {subItem.label}
                              </Typography>
                            </MenuItem>
                          ))}
                        </Box>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Button
                    component={Link}
                    href={link.href}
                    aria-label={`Ir a ${link.label}`}
                    sx={{
                      color: "text.primary",
                      textTransform: "none",
                      fontWeight: 500,
                      fontSize: "1rem",
                      px: 2,
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 0,
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "primary.main",
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                )}

                {/* Efecto de subrayado animado */}
                <Box
                  component={motion.div}
                  initial={{ width: 0 }}
                  animate={{
                    width: hoveredItem === index ? "100%" : 0,
                    backgroundColor:
                      hoveredItem === index
                        ? theme.palette.primary.main
                        : "transparent",
                  }}
                  transition={{ duration: 0.3 }}
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: 3,
                    borderRadius: 3,
                  }}
                />
              </Box>
            ))}

            {/* Botón de contacto destacado */}
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              startIcon={<Phone />}
              sx={{
                ml: 2,
                px: 3,
                py: 1,
                borderRadius: 2,
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "0.9rem",
                boxShadow: "none",
                "&:hover": {
                  boxShadow: theme.shadows[4],
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Contactar
            </Button>
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
            width: { xs: "100%", sm: 300 },
            backgroundColor: "background.paper",
            boxShadow: theme.shadows[16],
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "hidden",
          }}
        >
          {/* Encabezado del drawer */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              borderBottom: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Box sx={{ height: 40 }}>
              <Logo />
            </Box>
            <IconButton onClick={handleDrawerToggle(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Contenido del drawer */}
          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              py: 1,
            }}
          >
            {navLinks.map((link, index) => (
              <Box key={`${link.href}-drawer-${index}`}>
                {link.subItems ? (
                  <>
                    <Button
                      fullWidth
                      sx={{
                        justifyContent: "space-between",
                        px: 3,
                        py: 1.5,
                        textTransform: "none",
                        fontSize: "1rem",
                        color: "text.primary",
                        "&:hover": {
                          backgroundColor: "rgba(46, 125, 50, 0.08)",
                        },
                      }}
                      onClick={() => toggleExpand(index)}
                      endIcon={
                        expandedItem === index ? <ExpandLess /> : <ExpandMore />
                      }
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box sx={{ mr: 1, display: "flex" }}>{link.icon}</Box>
                        <Typography>{link.label}</Typography>
                      </Box>
                    </Button>

                    <Collapse in={expandedItem === index}>
                      <Box sx={{ pl: 4 }}>
                        {link.subItems.map((subItem, subIndex) => (
                          <Button
                            key={subIndex}
                            component={Link}
                            href={subItem.href}
                            fullWidth
                            sx={{
                              justifyContent: "flex-start",
                              px: 3,
                              py: 1.5,
                              textTransform: "none",
                              fontSize: "0.95rem",
                              color: "text.secondary",
                              "&:hover": {
                                color: "primary.main",
                                backgroundColor: "rgba(46, 125, 50, 0.05)",
                              },
                            }}
                            onClick={handleDrawerToggle(false)}
                          >
                            {subItem.label}
                          </Button>
                        ))}
                      </Box>
                    </Collapse>
                  </>
                ) : (
                  <Button
                    component={Link}
                    href={link.href}
                    fullWidth
                    sx={{
                      justifyContent: "flex-start",
                      px: 3,
                      py: 1.5,
                      textTransform: "none",
                      fontSize: "1rem",
                      color: "text.primary",
                      "&:hover": {
                        color: "primary.main",
                        backgroundColor: "rgba(46, 125, 50, 0.08)",
                      },
                    }}
                    onClick={handleDrawerToggle(false)}
                  >
                    <Box sx={{ mr: 1, display: "flex" }}>{link.icon}</Box>
                    <Typography>{link.label}</Typography>
                  </Button>
                )}
              </Box>
            ))}
          </Box>

          {/* Pie del drawer */}
          <Box
            sx={{
              p: 3,
              borderTop: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Button
              component={Link}
              href="/contact"
              variant="contained"
              fullWidth
              size="large"
              startIcon={<Phone />}
              sx={{
                py: 1.5,
                borderRadius: 2,
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "1rem",
                boxShadow: "none",
                "&:hover": {
                  boxShadow: theme.shadows[4],
                },
              }}
              onClick={handleDrawerToggle(false)}
            >
              Contacto Rápido
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default NavBar;
