import { Box, Button, Typography } from "@mui/material";
import React from "react";

function GetWarehouse() {
  return (
    <Box
      sx={{
        height: { xs: "30vh", md: "35vh" },
        border: "1px solid black",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          height: {
            xs: "75%",
            md: "100%",
          },
          width: {
            xs: "100%",
            md: "70%",
          },
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <Typography>Obten tu presupuesto ya</Typography>
        <Typography>Obten tu presupuesto ya</Typography>
      </Box>
      <Box
        sx={{
          height: {
            xs: "25%",
            md: "100%",
          },
          width: {
            xs: "100%",
            md: "30%",
          },
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <Button>Obten tu presupuesto ya</Button>
      </Box>
    </Box>
  );
}

export default GetWarehouse;
