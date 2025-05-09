"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const CookiePolicyPage = () => {
  return (
    <body>
      <NavBar />
      <Container maxWidth="md" sx={{ mt: 12, mb: 10 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Política de Cookies
        </Typography>

        <Typography>
          Este sitio web utiliza cookies propias y de terceros para mejorar la
          experiencia de navegación del usuario y analizar el uso del sitio web.
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight="bold">
          1. ¿Qué son las cookies?
        </Typography>
        <Typography>
          Una cookie es un pequeño archivo de texto que se almacena en el
          navegador del usuario cuando visita un sitio web. Sirve para recordar
          información sobre su visita, como idioma preferido, hábitos de
          navegación o sesión iniciada.
        </Typography>

        <Typography variant="h6" gutterBottom fontWeight="bold">
          2. Tipos de cookies utilizadas
        </Typography>
        <ul>
          <li>
            <Typography>
              <strong>Cookies técnicas (necesarias):</strong> Permiten al
              usuario la navegación a través de la web y el uso de las
              diferentes opciones o servicios que existen. No requieren
              consentimiento previo.
            </Typography>
          </li>
          <li>
            <Typography>
              <strong>Cookies de análisis:</strong> Permiten cuantificar el
              número de usuarios y realizar mediciones y análisis estadísticos
              del uso del sitio web. <em>Ejemplo: Google Analytics.</em>
            </Typography>
          </li>
          <li>
            <Typography>
              <strong>Cookies de personalización (opcional):</strong> Permiten
              recordar preferencias como el idioma, configuración regional, etc.
            </Typography>
          </li>
          <li>
            <Typography>
              <strong>Cookies de publicidad comportamental:</strong> Almacenan
              información del comportamiento del usuario mediante la observación
              continuada de sus hábitos de navegación.
            </Typography>
          </li>
        </ul>

        <Typography variant="h6" gutterBottom fontWeight="bold">
          3. Cookies utilizadas en este sitio web
        </Typography>
        <Typography>
          Este sitio puede usar, entre otras, las siguientes cookies:
        </Typography>

        <Box
          component="table"
          sx={{ width: "100%", borderCollapse: "collapse", mb: 3 }}
        >
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
                Nombre
              </th>
              <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
                Tipo
              </th>
              <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
                Propósito
              </th>
              <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
                Duración
              </th>
              <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>
                Titular
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "8px" }}>cookieConsent</td>
              <td style={{ padding: "8px" }}>Técnica</td>
              <td style={{ padding: "8px" }}>
                Guarda la aceptación de cookies
              </td>
              <td style={{ padding: "8px" }}>1 año</td>
              <td style={{ padding: "8px" }}>Propia</td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>_ga</td>
              <td style={{ padding: "8px" }}>Analítica</td>
              <td style={{ padding: "8px" }}>Google Analytics: estadísticas</td>
              <td style={{ padding: "8px" }}>2 años</td>
              <td style={{ padding: "8px" }}>Google</td>
            </tr>
            <tr>
              <td style={{ padding: "8px" }}>_gid</td>
              <td style={{ padding: "8px" }}>Analítica</td>
              <td style={{ padding: "8px" }}>
                Google Analytics: diferenciación
              </td>
              <td style={{ padding: "8px" }}>24 horas</td>
              <td style={{ padding: "8px" }}>Google</td>
            </tr>
          </tbody>
        </Box>

        <Typography variant="h6" gutterBottom fontWeight="bold">
          4. Cómo desactivar o eliminar las cookies
        </Typography>
        <Typography>
          Puedes permitir, bloquear o eliminar las cookies instaladas en tu
          dispositivo mediante la configuración de las opciones del navegador.
          Enlaces útiles:
        </Typography>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan"
              target="_blank"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
            >
              Microsoft Edge
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              target="_blank"
            >
              Safari
            </a>
          </li>
        </ul>

        <Typography variant="h6" gutterBottom fontWeight="bold">
          5. Aceptación de la política de cookies
        </Typography>
        <Typography>
          Al acceder a este sitio web por primera vez, verás un aviso o banner
          donde se te informa del uso de cookies. Al continuar navegando o hacer
          clic en “Aceptar”, consientes el uso de las cookies descritas.
        </Typography>

        <Typography variant="body2" sx={{ mt: 4 }}>
          Última actualización: 2025
        </Typography>
      </Container>

      <Footer />
    </body>
  );
};

export default CookiePolicyPage;
