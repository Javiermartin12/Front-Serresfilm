"use client";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/aboutUs" },
  { title: "Contact", path: "/contact" },
  { title: "Join Us", path: "/joinUs" },
  { title: "Greenhouse", path: "/greenhouse" },
  { title: "Warehouse", path: "/warehouse" },
];

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
      <AppBar position="fixed" color="secondary">
        <Toolbar sx={{ display: "flex", borderRadius: 1 }}>
          {/* Menú hamburguesa en móviles */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Título */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
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

          {/* Links en escritorio */}
          <Box
            sx={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            {navLinks.map((item) => (
              <Button
                sx={{ textAlign: "center" }}
                key={item.path}
                color="inherit"
                component={Link}
                href={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer (Menú lateral en móviles) */}
      <Drawer
        anchor="left"
        PaperProps={{
          sx: { width: 250, backgroundColor: "#dedede", color: "white" },
        }}
        open={open}
        onClose={toggleDrawer(false)}
      >
        <List>
          {navLinks.map((item) => (
            <ListItem
              key={item.path}
              component={Link}
              href={item.path}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;
