import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import Header from "../components/Header";
import Footer from "../components/Footer";
=======
import Header from "@/components/Header";
import Footer from "@/components/Footer";
>>>>>>> cca40ab59172cd3464c54b2028437ba1aaf1bada

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hockey en Contexto - Donde el hockey se piensa distinto",
  description: "Blog de hockey sobre césped para entrenadores. Conceptos, ejercicios, ideas y formación. Una comunidad de entrenadores con más preguntas que certezas.",
  keywords: ["hockey", "entrenadores", "táctica", "técnica", "formación", "césped"],
  authors: [{ name: "Gabriel Herrera" }],
  openGraph: {
    title: "Hockey en Contexto",
    description: "Donde el hockey se piensa distinto",
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
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
