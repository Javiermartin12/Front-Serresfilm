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

// const navLinks = [
//   { title: "Home", path: "/" },
//   { title: "About", path: "/aboutUs" },
//   { title: "Contact", path: "/contact" },
//   { title: "Join Us", path: "/joinUs" },
//   { title: "Greenhouse", path: "/greenhouse" },
//   { title: "Warehouse", path: "/warehouse" },
// ];

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
      <Box sx={{ display: "flex", justifyContent: "center", margin: 1 }}>
        <AppBar
          position="sticky"
          sx={{
            width: "80%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            border: "1px solid #ccc",
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
              width={1}
              sx={{
                flexGrow: 1,
                textShadow: "1px 5px 10px rgba(0, 0, 0, 0.5)",
                textAlign: "center",
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
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                display: { xs: "none", md: "flex" },
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
      </Box>
    </>
  );
}

export default NavBar;
