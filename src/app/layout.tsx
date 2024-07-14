import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import cn from "mxcn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamic Island for Web",
  description: "Dynamic Island for Web using Next.js and framer-motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* theme color */}
        <meta name="theme-color" content="#E8663D" />
      </head>
      <body className={cn(inter.className, 'bg-gradient-linear text-white text-sm')}>{children}</body>
    </html>
  );
}
