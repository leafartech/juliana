import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juliana Iatskiu Furquim",
  description: "Página Oficial | Escritório de Advocacia Juliana Iatskiu Furquim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.className} `}>{children}</body>
    </html>
  );
}
