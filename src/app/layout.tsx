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
      <head>
        <link
          rel="icon"
          href="https://ik.imagekit.io/ennmjhpgtw/icon/88477509.jpeg?updatedAt=1702815593190"
          sizes="any"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
