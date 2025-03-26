import { Box, Typography } from "@mui/material";
import React from "react";

export const VideosMachinery = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        border: "1px solid red",
      }}
    >
      <Box sx={{ minHeight: "30vh", border: "1px solid blue" }}>
        <Typography variant="h5" color="primary">
          Titulo del componente
        </Typography>
      </Box>
      <Box sx={{ minHeight: "70vh", border: "1px solid blue" }}>
        videos de los prodictos
      </Box>
    </Box>
  );
};
