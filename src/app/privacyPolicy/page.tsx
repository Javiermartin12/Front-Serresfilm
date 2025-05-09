import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Container, Typography, Box } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <body>
      <NavBar />
      <Container maxWidth="md" sx={{ mt: 10, py: 5 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          POLÍTICA DE PRIVACIDAD
        </Typography>

        <Typography variant="body1">
          En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y
          del Consejo, de 27 de abril de 2016 (RGPD), y la Ley Orgánica 3/2018,
          de 5 de diciembre (LOPDGDD), se informa al usuario de lo siguiente:
        </Typography>

        <Box my={3}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            1. Responsable del tratamiento
          </Typography>
          <Typography variant="body1">
            <strong>Titular:</strong> Serresfilm, SL
            <br />
            <strong>CIF:</strong> B04699658
            <br />
            <strong>Domicilio:</strong> Polign, Ind, de la Redonda, Calle XII,
            Nave 41
            <br />
            <strong>Email:</strong> jmmserres@gmail.com
            <br />
            <strong>Teléfono:</strong> +34 649 961 062
          </Typography>
        </Box>

        <Box my={3}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            2. Finalidad del tratamiento
          </Typography>
          <Typography variant="body1">
            Los datos que se recopilen a través del sitio web serán utilizados
            con la finalidad de:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Atender consultas realizadas a través del formulario de
                contacto.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Gestionar la relación comercial.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Enviar información comercial si el usuario ha dado su
                consentimiento expreso.
              </Typography>
            </li>
          </ul>
        </Box>

        <Box my={3}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            3. Legitimación para el tratamiento
          </Typography>
          <Typography variant="body1">
            La base legal para el tratamiento de los datos es el consentimiento
            del usuario al marcar la casilla correspondiente en los formularios.
          </Typography>
        </Box>

        <Box my={3}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            4. Conservación de los datos
          </Typography>
          <Typography variant="body1">
            Los datos personales se conservarán mientras exista una relación con
            el usuario o mientras no se solicite su supresión.
          </Typography>
        </Box>

        <Box my={3}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            5. Destinatarios
          </Typography>
          <Typography variant="body1">
            No se cederán datos a terceros, salvo obligación legal.
          </Typography>
        </Box>

        <Box my={3}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            6. Derechos del usuario
          </Typography>
          <Typography variant="body1">
            Cualquier usuario tiene derecho a:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                Acceder a sus datos personales.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Solicitar la rectificación de datos inexactos.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Solicitar su supresión cuando los datos ya no sean necesarios.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Solicitar la limitación del tratamiento.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Oponerse al tratamiento de sus datos.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                Solicitar la portabilidad de los datos.
              </Typography>
            </li>
          </ul>
          <Typography variant="body1">
            Para ejercer estos derechos puede enviar un correo electrónico a:{" "}
            <strong>jmmserres@gmail.com</strong> indicando claramente su
            solicitud e incluyendo una copia de su DNI o documento
            identificativo.
          </Typography>
        </Box>

        <Box my={3}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            7. Seguridad de los datos
          </Typography>
          <Typography variant="body1">
            Se han adoptado las medidas de seguridad técnicas y organizativas
            necesarias para garantizar la confidencialidad, integridad y
            disponibilidad de los datos personales.
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" mt={4}>
          Última actualización: 2025
        </Typography>
      </Container>
      <Footer />
    </body>
  );
};

export default page;
