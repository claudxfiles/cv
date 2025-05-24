import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIDev Portfolio | AI Engineer & Machine Learning Specialist",
  description: "Portfolio of an AI Engineer and Machine Learning Specialist specializing in creating intelligent systems and advanced AI solutions.",
  keywords: "AI, machine learning, deep learning, artificial intelligence, portfolio, developer, engineer, AI specialist",
  authors: [{ name: "AIDev" }],
  creator: "AIDev",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "AIDev Portfolio | AI Engineer & Machine Learning Specialist",
    description: "AI Engineer and Machine Learning Specialist portfolio",
    siteName: "AIDev Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIDev Portfolio | AI Engineer & Machine Learning Specialist",
    description: "AI Engineer and Machine Learning Specialist portfolio",
    creator: "@aidev",
  },
};

export const viewport: Viewport = {
  themeColor: "#7c3aed",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-white focus:text-black focus:p-4 focus:shadow-lg">
          Skip to main content
        </a>
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
