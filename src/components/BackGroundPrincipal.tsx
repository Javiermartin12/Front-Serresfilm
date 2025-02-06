import { Box } from "@mui/material";
import React from "react";

function BackGroundPrincipal() {
  return (
    <Box
      position="relative"
      sx={{
        height: "100vh",
        width: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "rgba(22, 22, 22, 0.5)",
        transition: "all 1s",
      }}
    />
  );
}

export default BackGroundPrincipal;
