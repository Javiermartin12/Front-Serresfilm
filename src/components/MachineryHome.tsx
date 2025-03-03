import { Box, Typography } from "@mui/material";
import React from "react";

function MachineryHome() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          justifyContent: "center",
          border: "1px solid #e0e0e0",
          width: "100%",
          backgroundColor: "#fff",
          padding: 2,
        }}
      >
        <Box
          sx={{
            border: "1px solid #e0e0e0",
            width: "100%",
            minHeight: "30vh",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Innovacion
          </Typography>
          <Typography variant="h2" fontWeight="bold">
            Explora nuestro rango de maquinaria
          </Typography>
          <Typography>
            Toda la maquinaria que ves acontinuacion es fabricado por nostros.
          </Typography>
        </Box>
        {/* Box for image of machinery */}
        <Box
          sx={{
            border: "1px solid #e0e0e0",
            width: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            justifyContent: "center",

            minHeight: "70vh",
          }}
        ></Box>
      </Box>
    </>
  );
}

export default MachineryHome;
