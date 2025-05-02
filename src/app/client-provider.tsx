"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/styles/theme";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
