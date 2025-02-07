import { createTheme } from "@mui/material/styles";

// Definir el tema con los colores personalizados
const theme = createTheme({
  palette: {
    primary: { main: "#FDD835" }, // Amarillo
    secondary: { main: "#8BC34A" }, // Verde claro
    background: { default: "#F5F5F5" }, // Gris claro
    text: { primary: "#212121", secondary: "#757575" }, // Texto en negro/gris
  },
});

export default theme;
