import { Box, Typography } from "@mui/material";

const WarehouseHeader = () => {
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
        src="https://res.cloudinary.com/dd5zkfvbo/image/upload/v1741106786/0c3d35a7-0d57-4340-af09-4caa37f62d61_dsjr2f.jpg"
        alt="Almacen"
        sx={{
          width: "100%",
          height: { xs: "50vh", sm: "60vh", md: "80vh" }, // Ajuste para responsividad
          objectFit: "",
          border: "1px solid rgb(0, 0, 0)",
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
          Almacenes Serresfilm
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginTop: 2, fontSize: { xs: "1rem", md: "1.2rem" } }}
        >
          Nuestros almacenes están diseñados para maximizar el almacenado y la
          cubrir el desgaste de la intemperie, utilizando los materiales de la
          mejor calidad.
        </Typography>
      </Box>
    </Box>
  );
};

export default WarehouseHeader;
