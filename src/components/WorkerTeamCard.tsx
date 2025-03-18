import { Box, SxProps, Theme, Typography } from "@mui/material";
import React from "react";

interface WorkerTeamCardProps {
  avatar: string;
  name: string;
  sx?: SxProps<Theme>;
  job: string;
  description: string;
}

const WorkerTeamCard: React.FC<WorkerTeamCardProps> = ({
  avatar,
  name,
  sx,
  job,
  description,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        padding: 2,
        boxShadow: 3,
        borderRadius: 2,
        height: { xs: 300, xl: 500 },
        width: { xs: 300, sm: 200, xl: 300 },
        textAlign: "center",
        backgroundColor: "#fff",
        gap: 2, // Mueve gap aquí para evitar sobrescribir sx
        ...sx,
      }}
    >
      {/* Imagen de avatar */}
      <Box
        component="img"
        src={avatar}
        alt={name}
        sx={{
          width: 60,
          height: 60,
          mb: 1,
          borderRadius: "50%",
          border: "1px solid black",
          objectFit: "cover",
        }}
      />

      <Typography variant="h5" fontWeight="bold">
        {name}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {job}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  );
};

export default WorkerTeamCard;
