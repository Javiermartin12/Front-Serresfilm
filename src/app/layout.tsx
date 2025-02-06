"use client";

import Footer from "@/components/Footer";
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
          <CssBaseline></CssBaseline>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
