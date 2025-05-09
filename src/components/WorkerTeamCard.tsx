import { Box, Typography, useTheme, SxProps, Theme } from "@mui/material";
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
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        p: 3,
        borderRadius: 4,
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)",
        },
        maxWidth: 320,
        height: "100%",
        mx: "auto",
        ...sx,
      }}
    >
      <Box
        component="img"
        src={avatar}
        alt={name}
        sx={{
          width: 96,
          height: 96,
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          border: `3px solid ${theme.palette.primary.main}`,
          mb: 2,
        }}
      />
      <Typography variant="h6" fontWeight={700} gutterBottom>
        {name}
      </Typography>
      <Typography
        variant="subtitle2"
        color="primary"
        fontWeight={600}
        gutterBottom
      >
        {job}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
};

export default WorkerTeamCard;
