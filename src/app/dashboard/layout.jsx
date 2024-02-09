"use client";
import React, { useState } from "react";
import Sidebar from "../_components/sidebar/sidebar";
import TopNavbar from "../_components/top_navbar/top_navbar";

const AuthLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-col w-full">
        <TopNavbar
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <div className="flex-grow p-4 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
