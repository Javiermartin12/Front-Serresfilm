"use client";

import { Box, Typography } from "@mui/material";
import React from "react";

const JoinUs: React.FC = () => {
  return (
    <Box
      sx={{
        m: 4,
        textAlign: "center",
        p: { xs: 2, sm: 3, md: 4 },
        maxWidth: 500,
        mx: "auto",
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        ¿Quieres unirte a nosotros?
      </Typography>

      <Box
        component="form"
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      ></Box>

      {/* Enlace directo a correo */}
      <Box mt={1}>
        <Typography variant="body1" color="text.secondary">
          Puedes enviarnos un correo a{" "}
          <Box
            component="a"
            href="mailto:jmmserres@gmail.com"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            ejemplo@gmail.com
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default JoinUs;
