import { Box } from "@mui/material";
import React from "react";

function ServicesWarehouse() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        border: "1px solid black",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          border: "1px solid black",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Box
          sx={{
            height: { xs: "32%", md: "100%" },
            width: { xs: "100%", md: "32%" },
            border: "1px solid black",
          }}
        >
          title and description
        </Box>
        <Box
          sx={{
            height: { xs: "34%", md: "100%" },
            width: { xs: "100%", md: "34%" },
            border: "1px solid black",
          }}
        >
          {" "}
          benefits
        </Box>
        <Box
          sx={{
            height: { xs: "34%", md: "100%" },
            width: { xs: "100%", md: "34%" },
            border: "1px solid black",
          }}
        >
          benefits
        </Box>
      </Box>
    </Box>
  );
}

export default ServicesWarehouse;
