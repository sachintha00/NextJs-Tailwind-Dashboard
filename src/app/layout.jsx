"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Dashboard | Minia - Admin &amp; Dashboard Template</title>
        <meta content="Themesbrand" name="author" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="/css/swiper-bundle.css" />
        <link rel="stylesheet" href="/css/tailwind2.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
