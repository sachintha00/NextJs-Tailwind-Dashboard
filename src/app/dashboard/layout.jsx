"use client";
import React, { useEffect } from "react";
import { Inter } from "next/font/google";
import LayoutHeader from "./layout_header";
import SideMenu from "./_components/side_menu/side_menu";
import TopNavigation from "./_components/top_navigation/top_navigation";

const inter = Inter({ subsets: ["latin"] });

function DashboardLayout({ children }) {
  useEffect(() => {
    document.body.setAttribute("data-mode", "light");
    document.body.setAttribute("data-sidebar-size", "lg");
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <LayoutHeader />
      <body className={inter.className}>
        <TopNavigation />
        <SideMenu />
        {children}
      </body>
    </html>
  );
}

export default DashboardLayout;
