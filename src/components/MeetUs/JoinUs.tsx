"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const JoinUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cvLink: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        p: { xs: 2, sm: 3, md: 4 },
        maxWidth: { xs: "90%", sm: 500 },
        mx: "auto",
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        ¿Quieres unirte a nosotros?
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        Envíanos tu CV y nos pondremos en contacto contigo.
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",

          gap: 2,
        }}
      >
        <TextField
          name="cvLink"
          type="file"
          value={formData.cvLink}
          onChange={handleChange}
          required
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: "100%" }}
        >
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default JoinUs;
