"use client";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Box,
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { motion } from "framer-motion";

function NavBar() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        "key" in event &&
        (event.key === "Tab" || event.key === "Shift")
      )
        return;
      setOpen(open);
    };

  return (
    <>
      {/* Navbar principal */}

      <AppBar
        color="default"
        sx={{
          position: "absolute",
          flexDirection: "row",
          width: { xs: "100%", md: "100%" },
          height: { xs: "8%", sm: "11%", md: "7%", lg: "7%", xl: "7%" },
          borderBottomLeftRadius: 1,
          borderBottomRightRadius: 1,
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
            onClick={toggleDrawer(true)}
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
          <Box
            component={motion.img}
            src="/SerresfilmLogo.png"
            alt="Serresfilm-Inveraderos"
            whileHover={{ scale: 1.1 }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            sx={{
              cursor: "pointer",
              overflow: "hidden",
              marginTop: {
                xs: "3%",
                sm: "1%",
                md: "0.5%",
                lg: "0.5%",
                xl: "0.5%",
              },
              marginLeft: {
                xs: "0%",
                sm: "%",
                md: "3%",
                lg: "2%",
                xl: "2%",
              },
              width: { xs: "20%", sm: "13%", md: "7%", lg: "6%", xl: "10%" },
              height: { xs: "70%", sm: "70%", md: "70%", lg: "70%", xl: "70%" },
            }}
          />
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
          <Button
            component={Link}
            href="/"
            sx={{
              color: "text.primary",
              "&:hover": {
                backgroundColor: "rgba(172, 172, 172, 0.5)",
                color: "paper",
              },
            }}
          >
            Inicio
          </Button>
          <Button
            component={Link}
            href="/"
            sx={{
              color: "text.primary",
              "&:hover": {
                backgroundColor: "rgba(172, 172, 172, 0.5)",
                color: "paper",
              },
            }}
          >
            Invernaderos
          </Button>
          <Button
            component={Link}
            href="/"
            sx={{
              color: "text.primary",
              "&:hover": {
                backgroundColor: "rgba(172, 172, 172, 0.5)",
                color: "paper",
              },
            }}
          >
            Almacenes
          </Button>
          <Button
            component={Link}
            href="/"
            sx={{
              color: "text.primary",
              "&:hover": {
                backgroundColor: "rgba(172, 172, 172, 0.5)",
                color: "paper",
              },
            }}
          >
            Maquinaria
          </Button>
          <Button
            component={Link}
            href="/"
            sx={{
              color: "text.primary",
              "&:hover": {
                backgroundColor: "rgba(172, 172, 172, 0.5)",
                color: "paper",
              },
            }}
          >
            Conocenos
          </Button>
          <Button
            component={Link}
            href="/"
            sx={{
              color: "text.primary",
              "&:hover": {
                backgroundColor: "rgba(172, 172, 172, 0.5)",
                color: "paper",
              },
            }}
          >
            Contacto
          </Button>
        </Box>
      </AppBar>

      {/* Drawer (Menú lateral en móviles) */}
      <Drawer
        anchor="left"
        PaperProps={{
          sx: { width: 250, backgroundColor: "#dedede" },
        }}
        open={open}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 3,
            gap: 2,
          }}
        >
          <Button component={Link} href="/" color="inherit">
            Home
          </Button>
          <Button component={Link} href="/aboutUs" color="inherit">
            About
          </Button>
          <Button component={Link} href="/contact" color="inherit">
            Contact
          </Button>
          <Button component={Link} href="/joinUs" color="inherit">
            Join Us
          </Button>
          <Button component={Link} href="/greenhouse" color="inherit">
            Greenhouse
          </Button>
          <Button component={Link} href="/warehouse" color="inherit">
            Warehouse
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

export default NavBar;
