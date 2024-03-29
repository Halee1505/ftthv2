import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  keywords: [
    "Viettel",
    "telecom",
    "mạng di động",
    "internet",
    "truyền hình",
    "dịch vụ số",
    "viettel",
    "247",
    "gói cước",
    "24/7",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="_Py9wF1eyeE6rNeKzb7wb2H1XYhU9ETsVsaJls6gvEk" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
