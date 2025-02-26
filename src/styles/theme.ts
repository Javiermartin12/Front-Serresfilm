import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A5D6A7", // Verde suave (verde claro y fresco, adecuado para naturaleza)
      contrastText: "#FFFFFF", // Texto blanco para contraste
    },
    secondary: {
      main: "#FFEB8D", // Amarillo suave (tono claro, cálido y alegre)
    },
    background: {
      default: "#F5F5F5", // Gris claro (fondo principal neutro)
      paper: "#FFFFFF", // Blanco para tarjetas y otros componentes
    },
    text: {
      primary: "#333333", // Texto oscuro para legibilidad
      secondary: "#757575", // Texto secundario más suave (gris medio)
    },
    success: {
      main: "#C8E6C9", // Verde pastel suave (indicativo de éxito)
    },
    error: {
      main: "#FFCCBC", // Rojo suave claro (para errores no intrusivos)
    },
    warning: {
      main: "#FFF59D", // Amarillo suave (para advertencias más ligeras)
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif', // Fuente limpia y moderna
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
      color: "#4CAF50", // Verde para encabezados principales
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.5rem",
      color: "#FFEB8D", // Amarillo suave para subencabezados
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#333333", // Texto principal oscuro
    },
  },
});

export default theme;
