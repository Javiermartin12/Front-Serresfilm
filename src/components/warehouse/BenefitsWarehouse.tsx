import { Box, Typography, Divider } from "@mui/material";
import React from "react";

function BenefitsWarehouse() {
  return (
    <Box
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Título principal */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          textAlign: "center",
          mb: { xs: 4, md: 6 },
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            color: "primary.main",
            mb: 2,
          }}
        >
          Innovación
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "1.5rem", md: "1.75rem" },
            color: "text.secondary",
            mb: 3,
          }}
        >
          {"Beneficios de un Almacen "}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.1rem" },
            lineHeight: 1.6,
            color: "text.primary",
          }}
        >
          Nuestros almacenes tipo capilla combinan resistencia estructural,
          funcionalidad y un diseño optimizado para el entorno agrícola. Están
          pensados para ofrecer una solución de almacenamiento duradera,
          eficiente y fácilmente adaptable a diferentes necesidades.
        </Typography>
      </Box>

      <Divider sx={{ width: "80%", my: 2, borderColor: "divider" }} />

      {/* Contenido principal - Beneficios */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 3, md: 6 },
          mt: { xs: 2, md: 4 },
        }}
      >
        {/* Columna izquierda - 2 tarjetas */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 3, md: 4 },
            width: { xs: "100%", md: "25%" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              p: 3,
              borderRadius: 2,
              backgroundColor: "background.paper",
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ mb: 2, color: "primary.dark" }}
            >
              🔹 Estructura de doble arco
            </Typography>
            <Typography variant="body1">
              La forma en “capilla” proporciona una resistencia superior al
              viento, a la lluvia y a cargas de peso como nieve o equipos
              suspendidos.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              p: 3,
              borderRadius: 2,
              backgroundColor: "background.paper",
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ mb: 2, color: "primary.dark" }}
            >
              🔹 Ampliamente personalizable
            </Typography>
            <Typography variant="body1">
              Puedes adaptar dimensiones, tipo de cubierta (plástico,
              policarbonato, malla), puertas automáticas, zonas de trabajo o
              almacenamiento separado.
            </Typography>
          </Box>
        </Box>

        {/* Imagen central */}
        <Box
          component="img"
          src="https://res.cloudinary.com/dd5zkfvbo/image/upload/v1744211589/planos%20inver/plp727ohquuwnuj6rxeh.jpg"
          alt="Invernadero sostenible"
          sx={{
            width: { xs: "100%", md: "60%" },
            maxWidth: "600px",
            height: "auto",
            maxHeight: { md: "500px" },
            borderRadius: 2,
            boxShadow: 3,
            order: { xs: -1, md: 0 },
          }}
        />

        {/* Columna derecha - 2 tarjetas */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 3, md: 4 },
            width: { xs: "100%", md: "25%" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              p: 3,
              borderRadius: 2,
              backgroundColor: "background.paper",
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ mb: 2, color: "primary.dark" }}
            >
              🔹 Montaje rápido y modular
            </Typography>
            <Typography variant="body1">
              Gracias a su estructura prefabricada, el tiempo de instalación se
              reduce sin comprometer la solidez.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              p: 3,
              borderRadius: 2,
              backgroundColor: "background.paper",
              boxShadow: 3,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ mb: 2, color: "primary.dark" }}
            >
              🔹 Uso versátil
            </Typography>
            <Typography variant="body1">
              Perfectos como almacenes para herramientas, fertilizantes,
              maquinaria, zonas de preparación o incluso como pequeños centros
              de empaquetado.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ width: "80%", my: 4, borderColor: "divider" }} />

      {/* CTA Section */}
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          gap: 3,
          mt: 2,
          mb: { xs: 2, md: 0 },
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1.5rem", md: "1.4rem" },
            color: "text.primary",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          🌾 Pensados para el campo, diseñados para durar Estos almacenes no son
          solo funcionales, también están hechos para integrarse con tu
          explotación agrícola, permitiendo aprovechar al máximo el espacio,
          facilitar el trabajo diario y proteger tu inversión. ¿Sabías que? Las
          estructuras tipo capilla permiten instalar fácilmente sistemas de
          ventilación cenital, entradas automatizadas y climatización
          controlada.
        </Typography>
      </Box>
    </Box>
  );
}

export default BenefitsWarehouse;
