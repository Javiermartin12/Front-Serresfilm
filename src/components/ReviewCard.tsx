import React from "react";
import { Box, Typography, Avatar, Rating, SxProps, Theme } from "@mui/material";

interface ReviewCardProps {
  avatarUrl: string;
  name: string;
  sx?: SxProps<Theme>;
  rating: number;
  comment: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  avatarUrl,
  sx,
  name,
  rating,
  comment,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 2,
        boxShadow: 3,
        borderRadius: 2,
        height: {
          xs: "300px",
          sm: "300px",
          md: "300px",
          lg: "300px",
          xl: "500px",
        },
        width: {
          xs: "300px",
          sm: "200px",
          md: "200px",
          lg: "200px",
          xl: "300px",
        },
        textAlign: "center",
        backgroundColor: "#fff",
        ...sx,
      }}
    >
      {/* Avatar */}
      <Avatar
        src={avatarUrl}
        alt={name}
        sx={{ width: 60, height: 60, mb: 1 }}
      />

      {/* Nombre del usuario */}
      <Typography variant="h6" fontWeight="bold">
        {name}
      </Typography>

      {/* Estrellas de calificación */}
      <Rating value={rating} readOnly precision={0.5} />

      {/* Comentario */}
      <Typography variant="body2" color="textSecondary" mt={1}>
        {comment}
      </Typography>
    </Box>
  );
};

export default ReviewCard;
