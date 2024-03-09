"use client";
import React, { useState } from "react";
import Sidebar from "../_components/sidebar/sidebar";
import TopNavbar from "./_components/top_navbar/top_navbar";
import { NavBarToggle } from "../_lib/context/navbar_toggle_context";

const AuthLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <NavBarToggle.Provider value={isSidebarOpen}>
      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className="flex flex-col w-full ">
          <TopNavbar
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <div className="flex-grow p-4 overflow-y-auto dark:bg-[#0e1217] dark:text-[#9ea9c3] dark:border-[#1c1f26]">
            {children}
          </div>
        </div>
      </div>
    </NavBarToggle.Provider>
  );
};

export default AuthLayout;
