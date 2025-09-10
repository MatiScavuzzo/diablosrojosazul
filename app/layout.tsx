import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diablos Rojos de Azul - Peña del Club Atlético Independiente",
  description: "La Peña de Azul del Club Atlético Independiente. Organizamos viajes, gestionamos trámites societarios y desarrollamos proyectos sociales para la comunidad de Azul.",
  keywords: "Independiente, Azul, peña, club atlético independiente, viajes, socios, trámites",
  authors: [{ name: "Diablos Rojos de Azul" }],
  openGraph: {
    title: "Diablos Rojos de Azul - Peña del Club Atlético Independiente",
    description: "La Peña de Azul del Club Atlético Independiente. Organizamos viajes, gestionamos trámites societarios y desarrollamos proyectos sociales.",
    type: "website",
    locale: "es_AR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
