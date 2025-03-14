import { Box, Typography } from "@mui/material";
import React from "react";

function WarehouseHome() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#fff",
        padding: { xs: 4, md: 4 },
      }}
    >
      {/* Image Box */}
      <Box
        component="img"
        src="https://res.cloudinary.com/dd5zkfvbo/image/upload/t_My Logo/v1741106789/1d34500b-bc09-4c52-915a-27f76aa0004b_c0mvt4.jpg"
        alt="Invernadero"
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "auto",
          maxHeight: "500px",
          objectFit: "cover",
          flexShrink: 0,
          py: 2,
        }}
      />

      {/* Text Box */}
      <Box sx={{ margin: { md: 2 }, maxWidth: { xs: "100%", md: "600px" } }}>
        <Typography variant="h5" fontWeight="bold" marginBottom={1}>
          Explora nuestra variedad de invernaderos hechos hasta hoy día.
        </Typography>

        <Typography variant="body1" marginBottom={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          iure, laudantium aspernatur est voluptas aut mollitia odit odio vero
          aliquam nesciunt.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
          }}
        >
          <Box>
            <Typography fontWeight="bold" marginBottom={1}>
              Diseño duradero y resistente.
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium iure.
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold" marginBottom={1}>
              Opciones de personalización.
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium iure.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default WarehouseHome;
