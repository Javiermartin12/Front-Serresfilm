"use client";

import BackGroundPrincipal from "@/components/BackGroundPrincipal";
import NavBar from "@/components/NavBar";
import theme from "@/styles/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <NavBar />
          <BackGroundPrincipal />

          <CssBaseline></CssBaseline>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
