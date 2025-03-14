import { Box, Typography } from "@mui/material";
import React from "react";
const products = [
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/carroestandar_lesal9.jpg",
    title: "Maquinaria 1",
    description: "Descripción de la maquinaria 1",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/carroestandar_lesal9.jpg",
    title: "Maquinaria 1",
    description: "Descripción de la maquinaria 1",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/carroestandar_lesal9.jpg",
    title: "Maquinaria 1",
    description: "Descripción de la maquinaria 1",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/carroestandar_lesal9.jpg",
    title: "Maquinaria 1",
    description: "Descripción de la maquinaria 1",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/carroestandar_lesal9.jpg",
    title: "Maquinaria 1",
    description: "Descripción de la maquinaria 1",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/carroestandar_lesal9.jpg",
    title: "Maquinaria 1",
    description: "Descripción de la maquinaria 1",
  },
  {
    image:
      "https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741105833/carroestandar_lesal9.jpg",
    title: "Maquinaria 1",
    description: "Descripción de la maquinaria 1",
  },
];

function Products() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "20%",
          width: "100%",
          border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <Typography variant="h2" color="initial">
          {" "}
          Productos
        </Typography>
      </Box>
      <Box
        sx={{
          height: "80%",
          width: "100%",
          border: "1px solid black",
          display: "flex",
          flexFlow: "wrap",
        }}
      >
        {products.map((product, index) => (
          <Box key={index}></Box>
        ))}
      </Box>
    </Box>
  );
}

export default Products;
