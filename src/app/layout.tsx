import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from './context/ThemeContext'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Felipe Delfim Machado | Desenvolvedor Fullstack",
  description: "Portfólio profissional de Felipe Delfim Machado. Desenvolvedor fullstack com experiência em Vue.js, Node.js, NextJS e tecnologias modernas.",
  applicationName: "Felipe Delfim Machado - Portfolio",
  viewport: "width=device-width, initial-scale=1",
  authors: {
    name: "Felipe Delfim Machado",
    url: "https://linkedin.com/in/felipe-delfim-machado",
  },
  creator: "Felipe Delfim Machado",
  publisher: "Felipe Delfim Machado",
  keywords: [
    'Felipe Delfim Machado',
    'Desenvolvedor Fullstack',
    'Web Developer',
    'Vue.js',
    'Node.js',
    'NextJS',
    'React',
    'TypeScript',
    'TailwindCSS',
    'UFOP',
    'Universidade Federal de Ouro Preto',
    'Engenheiro da Computação',
    'Desenvolvedor Web',
    'Desenvolvedor de Software',
    'JavaScript',
    'Firebase',
    'PostgreSQL',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    url: 'https://delfim.dev',
    title: 'Felipe Delfim Machado | Desenvolvedor Fullstack',
    description: 'Portfólio profissional de Felipe Delfim Machado. Desenvolvedor fullstack com experiência em Vue.js, Node.js, NextJS.',
    siteName: 'Felipe Delfim Machado - Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Felipe Delfim Machado | Desenvolvedor Fullstack',
    description: 'Portfólio profissional com projetos e experiência em desenvolvimento web.',
  },
  alternates: {
    canonical: 'https://delfim.dev',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://felipedelfim.com" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Felipe Delfim" />
        
        {/* DNS Prefetch para melhorar performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preconnect para recursos críticos */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
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
