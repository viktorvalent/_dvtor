import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getCookie } from "cookies-next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.APP_NAME,
  description: "Viktor's Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={getCookie("theme") ?? "dark"}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
