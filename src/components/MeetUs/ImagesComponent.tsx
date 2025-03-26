import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ImagesComponent = () => {
  return (
    <Box
      sx={{
        minHeight: { xs: "40vh", md: "60vh" },
        width: "100%",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">Crecimeinto</Typography>
      <Typography variant="h6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum esse
        aperiam, laudantium officiis explicabo quo eum itaque repellat eius.
        Optio, veniam quos. Minus, iure ut quasi veritatis recusandae qui.
        Adipisci!
      </Typography>
      <Button variant="contained">Ver más</Button>
    </Box>
  );
};

export default ImagesComponent;
