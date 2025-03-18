import { Box, Typography } from "@mui/material";
import React from "react";
import WorkerTeamCard from "../WorkerTeamCard";

const Workers = [
  {
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Jesus Martin",
    job: "CEO",
    description: "Descripcion",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Maria Del Carmen",
    job: "CFO",
    description: "Descripcion",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Jose Luis",
    job: "CTO",
    description: "Descripcion",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Luisa Maria",
    job: "CMO",
    description: "Descripcion",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Carlos Alberto",
    job: "CIO",
    description: "Descripcion",
  },
];

const OurTeam = () => {
  return (
    <Box sx={{ minHeight: "100vh", width: "100%", border: "1px solid black" }}>
      <Box
        sx={{
          minHeight: "30%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid black",
          padding: 2,
        }}
      >
        <Typography variant="h6">Our Team</Typography>
        <Typography variant="h2">Our Team</Typography>
        <Typography variant="h5">Conoce a nuestro equipo de trabajo</Typography>
      </Box>
      <Box
        sx={{
          minHeight: "70%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
          gap: 3,
        }}
      >
        {Workers.map((worker, index) => (
          <WorkerTeamCard
            key={index}
            avatar={worker.avatar}
            name={worker.name}
            job={worker.job}
            description={worker.description}
          ></WorkerTeamCard>
        ))}
      </Box>
    </Box>
  );
};

export default OurTeam;
