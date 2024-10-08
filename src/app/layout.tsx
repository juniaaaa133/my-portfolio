import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@/ELEMENTX/abstract/abstract.css';
import Nav from "@/components/nav/Nav";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mr.Rein",
  description: "Rein Ogga Myo's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="mega-trans" lang="en" suppressHydrationWarning>
      <head>
      {/* <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"></script> */}
      </head>
      <body>
        <ThemeProvider>
        {children}
        <Footer />
        </ThemeProvider>
        </body>
    </html>
  );
}
