'use client'
import React, { useEffect } from "react";
import TopNavigation from "./_components/top_navigation/top_navigation";
import SideNavigation from "./_components/side_navigation/side_navigation";
import LayoutHeader from "./layout_header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function DashboardLayout({ children }) {
  useEffect(() => {
    document.body.setAttribute("data-mode", "light");
    document.body.setAttribute("data-sidebar-size", "lg");
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/* <LayoutHeader /> */}
      <body data-mode="light" className={inter.className}>
        {/* <TopNavigation /> */}
        <SideNavigation />
        {/* {children} */}
      </body>
    </html>
  );
}

export default DashboardLayout;
