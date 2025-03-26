import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const ScreemshotPlace = () => {
  return (
    <Box
      sx={{
        border: "1px solid #000",
      }}
    >
      <Box
        sx={{
          border: "1px solid #000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Typography variant="h5">¿Donde nos encontramos?</Typography>
      </Box>
      <Box
        sx={{
          border: "1px solid #000",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ minHeight: 500, border: "1px solid #000" }}></Box>
      </Box>
    </Box>
  );
};

export default ScreemshotPlace;
