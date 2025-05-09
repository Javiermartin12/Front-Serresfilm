"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/styles/theme";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag?: (command: "js" | "config", config: string | Date) => void;
  }
}

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const consent = getCookieConsentValue("cookieConsent");
    if (consent === "true") {
      // Aquí cargas el script de Google Analytics dinámicamente
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"; // sustituye con tu ID
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(command: "js" | "config", config: string | Date): void {
        window.dataLayer.push({ command, config });
      }

      gtag("js", new Date());
      gtag("config", "G-XXXXXXX"); // sustituye con tu ID
    } else if (consent === "false") {
      console.log("El usuario ha rechazado las cookies.");
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      {/* Banner de Cookies */}
      <CookieConsent
        location="bottom"
        buttonText="Aceptar"
        declineButtonText="Rechazar"
        enableDeclineButton
        cookieName="cookieConsent"
        style={{ background: "#2B373B", fontSize: "14px" }}
        buttonStyle={{
          background: "#4CAF50",
          color: "#fff",
          fontSize: "14px",
          borderRadius: "5px",
          padding: "8px 16px",
          marginRight: "10px",
        }}
        declineButtonStyle={{
          background: "#f44336",
          color: "#fff",
          fontSize: "14px",
          borderRadius: "5px",
          padding: "8px 16px",
        }}
        expires={365}
      >
        Utilizamos cookies para mejorar su experiencia. Puede leer más en
        nuestra{" "}
        <a
          href="/cookiesPolicy"
          style={{ color: "#FFD700", textDecoration: "underline" }}
        >
          Política de Cookies
        </a>
        .
      </CookieConsent>
    </ThemeProvider>
  );
}
