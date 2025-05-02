import { Box, Typography } from "@mui/material";

const GreenHouseHeader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      {/* Imagen - Ajuste para pantallas pequeñas */}
      <Box
        component="img"
        src="https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741106529/6e55a385-fdbe-466d-8491-139e2016be0d_f7e5e7.jpg" // Imagen de ejemplo
        alt="Invernadero"
        sx={{
          width: "100%",
          height: { xs: "50vh", sm: "60vh", md: "80vh" }, // Ajuste para responsividad
          objectFit: "cover",
        }}
      />

      {/* Texto - Mejor ajuste para grandes pantallas */}
      <Box
        sx={{
          width: "90%",
          maxWidth: "800px", // Limita el ancho máximo del texto en pantallas grandes
          height: { xs: "50%", sm: "40%" }, // Ajuste para responsividad
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 2,
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          fontSize={{ xs: "2rem", sm: "2.5rem", md: "3rem" }}
          sx={{ color: "darkgreen" }}
        >
          Invernaderos Serresfilm
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginTop: 2, fontSize: { xs: "1rem", md: "1.2rem" } }}
        >
          Nuestros invernaderos están diseñados para maximizar la producción y
          la eficiencia energética, utilizando los materiales más avanzados.
        </Typography>
      </Box>
    </Box>
  );
};

export default GreenHouseHeader;
