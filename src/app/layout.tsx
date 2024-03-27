import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AuthSessionProvider } from "@/presentation/components";

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
    <AuthSessionProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AuthSessionProvider>
  );
}
