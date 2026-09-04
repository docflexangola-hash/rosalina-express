import type { Metadata } from "next";
import { Anybody, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const anybody = Anybody({
  variable: "--font-anybody",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Rosalina Express",
    template: "%s . Rosalina Express",
  },
  description:
    "Rosalina Express — transporte rodoviário e logística em Angola. Rede Express, Voltas Urbanas, Shuttles corporativos e aluguer de cargas.",
  applicationName: "Rosalina Express",
  icons: {
    icon: [
      { url: "/logo3.webp", type: "image/webp", sizes: "any" },
    ],
    apple: [
      { url: "/logo3.webp", type: "image/webp", sizes: "180x180" },
    ],
    shortcut: [{ url: "/logo3.webp", type: "image/webp" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt"
      data-scroll-behavior="smooth"
      className={`${anybody.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface">
        <Header />
        <main className="flex-1 pt-[108px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
