import { Box, Typography } from "@mui/material";
import React from "react";

function InformationWarehouse() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        border: "1px solid black",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Sección 1 */}
      <Box
        sx={{
          height: "100%",
          width: { xs: "100%", md: "50%" },
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Typography variant="h4">Información sobre alameces</Typography>
      </Box>

      {/* Sección 2 */}
      <Box
        sx={{
          height: "100%",
          width: { xs: "100%", md: "50%" },
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Typography variant="body1">
          Aquí puedes colocar más información sobre los alamecenes o una imagen.
        </Typography>
      </Box>
    </Box>
  );
}

export default InformationWarehouse;
