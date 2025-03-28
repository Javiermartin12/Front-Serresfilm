import { Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import React from "react";

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
        justifyContent: "center",
        overflow: "hidden",
        alignItems: "center",

        borderRadius: "8px",
        boxShadow: 3,
        maxWidth: "30%",
        maxHeight: "100%",
      }}
    >
      <Box
        component="img"
        src={image}
        alt={alt}
        sx={{
          width: "100%",
          height: "auto",

          overflow: "hidden",
        }}
      />
      <Box sx={{ padding: 2, textAlign: "center" }}>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
};

export default CardMachinery;
