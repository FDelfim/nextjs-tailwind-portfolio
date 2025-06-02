import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from './context/ThemeContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Felipe Delfim Machado",
  description: "Portfolio pessoal de Felipe Delfim Machado",
  applicationName: "Portfolio | Felipe Delfim Machado",
  viewport: "width=device-width, initial-scale=1",
  authors: {
    name: "Felipe Delfim Machado",
    url: "https://linkedin.com/in/felipe-delfim-machado",
  },
  keywords: [
    'Felipe', 'Delfim', 'Felipe Delfim Machado', 'Fullstack Developer', 'Web Developer', 
    'UFOP', 'Universidade Federal de Ouro Preto', 'Desenvolvedor Web', 'Desenvolvedor Fullstack', 'Desenvolvedor de Software',
  ],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
