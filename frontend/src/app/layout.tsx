import type { Metadata } from "next";
import { Poppins, Libre_Franklin, Montserrat, Ma_Shan_Zheng } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  preload: true,
});

const maShanZheng = Ma_Shan_Zheng({
  variable: "--font-wang",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Using Montserrat as Metropolis alternative
const metropolis = Montserrat({
  variable: "--font-metropolis",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const baseUrl = 'https://perfectlifeexperience.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "大友元气 - 精酿啤酒 | 铂瑞湾",
    template: "%s | 大友元气"
  },
  description: "大友元气是一家位于瑞安铂瑞湾的精酿啤酒厂，致力于酿造世界级品质的精酿啤酒。我们提供多种风格的啤酒，包括IPA、世涛、艾尔等。欢迎参观我们的酒厂或在线订购。",
  keywords: ["精酿啤酒", "大友元气", "瑞安", "铂瑞湾", "IPA", "世涛", "艾尔", "手工啤酒", "craft beer", "brewery"],
  authors: [{ name: "大友元气" }],
  creator: "大友元气",
  publisher: "大友元气",

  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: baseUrl,
    title: "大友元气 - 精酿啤酒 | 铂瑞湾",
    description: "大友元气是一家位于瑞安铂瑞湾的精酿啤酒厂，致力于酿造世界级品质的精酿啤酒。",
    siteName: "大友元气",
    images: [
      {
        url: "/img/ruian-scenery.png.webp",
        width: 1920,
        height: 1080,
        alt: "大友元气精酿啤酒厂"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "大友元气 - 精酿啤酒 | 铂瑞湾",
    description: "大友元气是一家位于瑞安铂瑞湾的精酿啤酒厂，致力于酿造世界级品质的精酿啤酒。",
    images: ["/img/ruian-scenery.png.webp"],
  },

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

  verification: {
    // 添加搜索引擎验证码（需要时配置）
    // google: "your-google-verification-code",
    // bing: "your-bing-verification-code",
  },

  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
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
