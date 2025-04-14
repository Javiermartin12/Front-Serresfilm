import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

function ServicesWarehouse() {
  const services = [
    {
      title: "Expert Installation for Your Greenhouse",
      description:
        "Our skilled technicians ensure a seamless installation process.",
      icon: "🛠️",
    },
    {
      title: "Custom Invernadero Designs Tailored to You",
      description: "We create unique designs that meet your specific needs.",
      icon: "🎨",
    },
    {
      title: "Reliable Maintenance Services for Longevity",
      description:
        "Keep your invernadero in top shape with our maintenance services.",
      icon: "🔧",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 4 },
        backgroundColor: "#f8fafc",
      }}
    >
      {/* Header Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        sx={{
          width: "100%",
          maxWidth: "800px",
          textAlign: "center",
          mb: { xs: 4, md: 6 },
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "1.75rem", md: "2.5rem" },
            color: "primary.main",
            mb: 2,
          }}
        >
          Services
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            color: "text.secondary",
            mb: 3,
          }}
        >
          Comprehensive Solutions for Your Invernadero Needs
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.1rem" },
            lineHeight: 1.6,
            color: "text.primary",
            mb: 4,
          }}
        >
          We offer a range of services tailored to enhance your greenhouse
          experience. From installation to maintenance, our expert team is here
          to support you every step of the way.
        </Typography>

        {/* CTA Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              backgroundColor: "primary.main",
              "&:hover": { backgroundColor: "primary.dark" },
            }}
          >
            Learn More
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              borderColor: "primary.main",
              color: "primary.main",
              "&:hover": { borderColor: "primary.dark" },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>

      <Divider sx={{ width: "80%", my: 2, borderColor: "divider" }} />

      {/* Services Grid */}
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: { xs: 3, md: 4 },
          mt: { xs: 3, md: 6 },
          maxWidth: "1200px",
        }}
      >
        {services.map((service, index) => (
          <Card
            key={index}
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            sx={{
              height: "100%",
              borderRadius: 3,
              boxShadow: 3,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 6,
              },
            }}
          >
            <CardContent
              sx={{
                p: { xs: 3, md: 4 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "3rem",
                  mb: 2,
                  lineHeight: 1,
                }}
              >
                {service.icon}
              </Typography>
              <Typography
                variant="h5"
                component="h3"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  color: "primary.dark",
                  mb: 2,
                }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  color: "text.secondary",
                }}
              >
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Additional Content Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        sx={{
          width: "100%",
          maxWidth: "800px",
          textAlign: "center",
          mt: { xs: 6, md: 8 },
          mb: { xs: 2, md: 0 },
        }}
      >
        <Typography
          variant="h5"
          component="h4"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            color: "primary.main",
            mb: 3,
          }}
        >
          Medium length section heading goes here
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.1rem" },
            lineHeight: 1.8,
            color: "text.primary",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla.
        </Typography>
      </Box>
    </Box>
  );
}

export default ServicesWarehouse;
