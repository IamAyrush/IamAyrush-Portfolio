import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayush Verma | Software Engineer",
  description: "I'm Ayush,and this is my personal portfolio website..",
  keywords: [
    "Ayush",
    "Ayush verma",
    "ayush",
    "ayush portfolio",
    "ayrush.v",
    "IamAyrush",
    "iamayrush",
  ],
  verification: {
    google: "vymKhBwRzIKbkAoxQ39G5AIhrJYl4vaOn0ehgQMwipI",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
