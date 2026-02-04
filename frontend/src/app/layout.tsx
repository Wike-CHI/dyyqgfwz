import type { Metadata } from "next";
import { Poppins, Libre_Franklin, Montserrat, Ma_Shan_Zheng } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const maShanZheng = Ma_Shan_Zheng({
  variable: "--font-wang",
  subsets: ["latin"],
  weight: ["400"],
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["400"],
});

// Using Montserrat as Metropolis alternative
const metropolis = Montserrat({
  variable: "--font-metropolis",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "大友元气官网",
  description: "由 Trae AI 重建",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" data-scroll-behavior="smooth">
      <body className={`${poppins.variable} ${libreFranklin.variable} ${metropolis.variable} ${maShanZheng.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
