import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientProvider from "./client-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          {children}
          <SpeedInsights />
        </ClientProvider>
      </body>
    </html>
  );
}
