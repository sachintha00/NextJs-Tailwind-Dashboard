'use client'
import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();


export const ContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("dark");
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

  const toggleThemeMode = () => {
    if (themeMode === "dark") {
      setThemeMode("light");
    } else {
      setThemeMode("dark");
    }
  };

  const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);
  const openSideMenu = () => {
    setIsSideMenuOpen(true);
  };
  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };
  

  useEffect(() => {
    const item = localStorage.getItem("sp-dashboard-theme");
    if (item) {
      setThemeMode(item);
    }
  }, []);

  useEffect(() => {
    document.querySelector("html").setAttribute("class", "theme-" + themeMode);
    localStorage.setItem("sp-dashboard-theme", themeMode);
  }, [themeMode]);

  useEffect(() => {
    const body = document.querySelector("body");

    if (isSideMenuOpen) {
      body.classList.add("main-sidebar-collapsed");
      body.classList.remove("main-sidebar-collapsed");
    } else {
      body.classList.add("main-sidebar-collapsed");
    }
  }, [isSideMenuOpen]);

  return (
    <StateContext.Provider
      value={{
        isSideMenuOpen,
        openSideMenu,
        closeSideMenu,
        toggleSideMenu,
        themeMode,
        toggleThemeMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const UseStateContext = () => useContext(StateContext);
