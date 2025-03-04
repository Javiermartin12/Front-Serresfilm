import { Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import React from "react";

interface CardMachineryProps {
  image: string;
  title: string;
  description: string;
}
const CardMachinery: React.FC<CardMachineryProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        boxShadow: 3,
        maxWidth: "100%",
        maxHeight: "100%",
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        style={{ width: "100%", height: "auto" }}
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
