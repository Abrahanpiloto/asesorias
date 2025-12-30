import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
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
      <body className={bricolageGrotesque.className}>{children}</body>
    </html>
  );
}
