"use client";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

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
        sx={{
          top: "5%",
          position: "absolute",
          left: { xs: "50%", sm: "50%", md: "50%", lg: "70%", xl: "10%" },
          marginTop: "1%",

          height: { xs: "8%", sm: "6%", md: "8%", lg: "8%", xl: "10%" },
          width: { xs: "90%", sm: "90%", md: "60%", lg: "54%", xl: "60%" },
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(55, 55, 55, 0.8)",
          borderRadius: 2,
        }}
      >
        <Toolbar sx={{ display: "flex" }}>
          {/* Menú hamburguesa en móviles */}
          <IconButton
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Título */}
          <Typography
            variant="h6"
            color="secondary"
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              textShadow: "1px 5px 10px rgba(0, 0, 0, 0.5)",
              textAlign: "center",
              marginRight: 4,
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
          >
            Serrefilm
          </Typography>

          {/* Barra en escritorio */}
          <Box
            sx={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",

              display: { xs: "none", md: "flex" },
              gap: 1,
            }}
          >
            <Button
              component={Link}
              href="/"
              color="secondary"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(172, 172, 172, 0.5)",
                  color: "white",
                },
              }}
            >
              Inicio
            </Button>
            <Button
              component={Link}
              href="/greenhouse"
              color="secondary"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(172, 172, 172, 0.5)",
                  color: "white",
                },
              }}
            >
              Invernaderos
            </Button>
            <Button
              component={Link}
              href="/warehouse"
              color="secondary"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(172, 172, 172, 0.5)",
                  color: "white",
                },
              }}
            >
              Almacenes
            </Button>
            <Button
              component={Link}
              href="/aboutUs"
              color="secondary"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(172, 172, 172, 0.5)",
                  color: "white",
                },
              }}
            >
              Conócenos
            </Button>
            <Button
              component={Link}
              href="/joinUs"
              color="secondary"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(172, 172, 172, 0.5)",
                  color: "white",
                },
              }}
            >
              Únete a nosotros
            </Button>
            <Button
              component={Link}
              href="/contact"
              color="secondary"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(172, 172, 172, 0.5)",
                  color: "white",
                },
              }}
            >
              Contacto
            </Button>
          </Box>
        </Toolbar>
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
