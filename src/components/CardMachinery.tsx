import React from "react";
import { Box, Typography } from "@mui/material";

interface CardMachineryProps {
  image: string;
  title: string;
  description: string;
  alt?: string;
}

const CardMachinery: React.FC<CardMachineryProps> = ({
  image,
  title,
  description,
  alt = title,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden",
        textAlign: "center",
        backgroundColor: "#fff",
        width: {
          xs: "20%", // móviles
          sm: "20%", // tablets pequeñas
          md: 300, // portátiles
          lg: 320, // pantallas grandes
        },
        margin: "auto", // centrado si está en una columna
      }}
    >
      <Box
        component="img"
        src={image}
        alt={alt}
        sx={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          padding: 1,
        }}
      />
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </Box>
  );
};

export default CardMachinery;
