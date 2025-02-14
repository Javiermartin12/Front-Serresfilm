"use client";

import BackGroundPrincipal from "@/components/BackGroundPrincipal";
import NavBar from "@/components/NavBar";
import ReviewCard from "@/components/ReviewCard";
import ReviewCarousel from "@/components/ReviewCarousel";
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

          <ReviewCard
            avatarUrl="https://randomuser.me/api/portraits/men/1.jpg"
            name="Javier Martín"
            rating={2}
            comment="Me encantó el servicio, volveré a comprar."
          />
          <ReviewCarousel />
          <CssBaseline></CssBaseline>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
