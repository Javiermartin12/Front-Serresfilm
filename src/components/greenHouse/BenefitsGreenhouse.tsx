import { Box, Typography, Divider } from "@mui/material";
import React from "react";

function BenefitsGreenhouse() {
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
            color: "darkgreen",
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
          Beneficios de un invernadero{" "}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.1rem" },
            lineHeight: 1.6,
            color: "text.primary",
          }}
        >
          Nuestros invernaderos están diseñados pensando en la sostenibilidad,
          utilizando materiales ecológicos que minimizan el impacto ambiental.
          Experimenta la combinación perfecta entre eficiencia y respeto por el
          planeta.
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
              Materiales
            </Typography>
            <Typography variant="body1">
              “Materiales de alta gama que resisten cualquier clima. Elegimos lo
              mejor para que tú no tengas que preocuparte.”
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
              Eficiencia energetica
            </Typography>
            <Typography variant="body1">
              “Estructuras diseñadas para aprovechar cada rayo de luz y
              optimizar la climatización. Aislación térmica avanzada: menos
              gasto, más control.”
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
              Tecnologia avabzada
            </Typography>
            <Typography variant="body1">
              “Invernaderos equipados con tecnología de última generación para
              un control total del entorno. Sistemas inteligentes que
              monitorizan, ajustan y optimizan cada variable del cultivo.”
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
              Customizable
            </Typography>
            <Typography variant="body1">
              &quot;Diseños modulares que pueden adaptarse a tus necesidades y
              espacio específicos.&quot;
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
            fontSize: { xs: "1.5rem", md: "1.5rem" },
            color: "text.primary",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          Gracias a su estructura alta y ventilación natural eficiente, el
          invernadero tipo capilla permite un excelente control del clima
          interior. Esto se traduce en un ambiente óptimo para el cultivo
          durante todo el año, maximizando la luz solar, reduciendo la
          condensación y favoreciendo un crecimiento uniforme y saludable de los
          cultivos.
        </Typography>
      </Box>
    </Box>
  );
}

export default BenefitsGreenhouse;
