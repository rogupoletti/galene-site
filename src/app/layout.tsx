import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://galenearomas.com.br"),
  title: "Galene | Aromas que transformam",
  description:
    "Velas, difusores e home sprays criados para transformar ambientes em momentos de calmaria.",
  keywords: [
    "Galene",
    "aromas",
    "velas aromáticas",
    "difusores",
    "home spray",
    "presentes",
  ],
  openGraph: {
    title: "Galene | Aromas que transformam",
    description:
      "Fragrâncias para desacelerar, acolher e transformar o cotidiano.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
