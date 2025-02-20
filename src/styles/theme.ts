import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // Colores principales de la marca
    primary: {
      light: "#C3E8D5", // Verde claro más suave
      main: "#A8D5BA", // Verde claro principal
      dark: "#6FA585", // Verde oscuro para contraste
    },
    secondary: {
      light: "#FFE082", // Amarillo más suave
      main: "#FFD54F", // Amarillo principal
      dark: "#FFB300", // Amarillo más intenso para resaltar
    },

    // Colores de fondo
    background: {
      default: "#FAF3E0", // Blanco roto (Fondo principal)
      paper: "#F5F5F5", // Gris claro (Fondo para tarjetas y secciones)
    },

    // Colores de texto
    text: {
      primary: "#2E7D32", // Verde oscuro (Textos principales, títulos)
      secondary: "#8D6E63", // Marrón tierra (Subtítulos y detalles)
      disabled: "#9E9E9E", // Gris medio (Texto desactivado o poco importante)
    },

    // Colores funcionales
    success: { main: "#64B5F6" }, // Azul agronómico (Confianza, éxito)
    warning: { main: "#FF8F00" }, // Naranja cálido (Llamadas a la acción)
    error: { main: "#D32F2F" }, // Rojo intenso (Errores y alertas)
    info: { main: "#4CAF50" }, // Verde medio (Información secundaria, equilibrio)
  },
});

export default theme;
