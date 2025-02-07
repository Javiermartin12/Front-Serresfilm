import { Box } from "@mui/material";
import React from "react";

function BackGroundPrincipal() {
  return (
    <Box
      component="img"
      src="src/public/Greenhouse/Greenhouse-1.jpg"
      alt="invernadero"
      sx={{
        width: { xs: "100%", sm: "80%", md: "60%" },
        maxHeight: "400px",
        objectFit: "cover",
        height: "60%",

        backgroundColor: "rgba(22, 22, 22, 0.5)",
      }}
    />
  );
}

export default BackGroundPrincipal;
