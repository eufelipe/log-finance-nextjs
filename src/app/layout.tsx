import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { RootAuthProvider } from "@/app/contexts/AuthProvider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Log Finance App",
  description: "App to log daily earnings and expenses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootAuthProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <SpeedInsights />
        </body>
      </html>
    </RootAuthProvider>
  );
}
