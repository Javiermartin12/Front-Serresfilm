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
          width: { xs: "90%", sm: "90%", md: "60%", lg: "51%", xl: "60%" },
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: 2,
        }}
      >
        <Toolbar sx={{ display: "flex" }}>
          {/* Menú hamburguesa en móviles */}
          <IconButton
            edge="start"
            color="inherit"
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
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",

              display: { xs: "none", md: "block" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button component={Link} href="/" color="inherit">
              Inicio
            </Button>
            <Button component={Link} href="/aboutUs" color="inherit">
              conocenos
            </Button>
            <Button component={Link} href="/joinUs" color="inherit">
              unete a nosotros
            </Button>
            <Button component={Link} href="/greenhouse" color="inherit">
              invernaderos
            </Button>
            <Button component={Link} href="/warehouse" color="inherit">
              almacenes
            </Button>
            <Button component={Link} href="/contact" color="inherit">
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
