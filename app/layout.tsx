import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Consultoría en Café de Especialidad",
  description:
    "Consultoría experta en café de especialidad para optimizar tu negocio y tomar decisiones estratégicas. Charlas y asesorías personalizadas.",
  icons: "/favicon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable}  ${poppins.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
