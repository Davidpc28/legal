import type { Metadata } from "next";
import { Inter, Rethink_Sans } from "next/font/google";
import { Providers } from "@/components/providers";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  adjustFontFallback: false, // Rethink Sans no está en las métricas de Next.js
});

export const metadata: Metadata = {
  metadataBase: new URL("https://puerta-legal.es"),
  title:
    "Regularización Extraordinaria 2026 | Abogada Especializada en Extranjería",
  description:
    "Regulariza tu situación en España en 2026. Asesoramiento legal especializado en regularización extraordinaria de extranjería. Consulta gratuita.",
  keywords: [
    "regularización extranjería 2026",
    "abogada extranjería",
    "permiso de residencia España",
    "regularización extraordinaria",
    "asesor legal inmigración",
  ],
  authors: [{ name: "Puerta Legal" }],
  creator: "Puerta Legal",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://puerta-legal.es",
    siteName: "Puerta Legal",
    title: "Regularización Extraordinaria 2026 | Abogada Especializada",
    description:
      "Regulariza tu situación en España en 2026 con asesoramiento legal especializado.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Regularización Extraordinaria 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regularización Extraordinaria 2026",
    description: "Asesoramiento legal para regularizar tu situación en España",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://puerta-legal.es",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#273d5c" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} ${rethinkSans.variable} antialiased bg-background text-foreground`}
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}
