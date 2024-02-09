import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";

function DashboardMenuItem({ isSidebarOpen, menuItem }) {
  const sidebarWidth = isSidebarOpen ? "250px" : "65px";
  console.log(menuItem);

  const [submenus, setSubmenus] = useState({
    submenu1: false,
    submenu2: false,
    subsubmenu1: false,
  });

  const toggleSubmenu = (submenu) => {
    setSubmenus({ ...submenus, [submenu]: !submenus[submenu] });
  };
  return (
    <div
      className={`fixed bottom-0 h-screen border-r top-[70px] bg-slate-50 border-black-800`}
      style={{ width: `${sidebarWidth}` }}
    >
      <nav className="flex-grow mt-2 overflow-y-auto">
        <ul className="mt-4">
          <li
            className="flex items-center px-4 py-2 cursor-default"
            onClick={() => toggleSubmenu("submenu1")}
          >
            <MdDashboard className={`mr-2`} />
            <span className={!isSidebarOpen ? "hidden" : ""}>App</span>
          </li>
          {submenus.submenu1 && (
            <ul
              className={` ${
                !isSidebarOpen
                  ? "absolute left-[50px] top-[85px] mt-0 shadow-md"
                  : ""
              } mt-2 ml-4 tree-view`}
            >
              <li
                className="px-4 py-2 cursor-default"
                onClick={() => toggleSubmenu("subsubmenu1")}
              >
                Subsubmenu 1
              </li>
              {submenus.subsubmenu1 && (
                <ul className="mt-2 ml-4 tree-view">
                  <li className="px-4 py-2 cursor-default">Subsubsubmenu 1</li>
                  <li className="px-4 py-2 cursor-default">Subsubsubmenu 2</li>
                </ul>
              )}
              <li className="px-4 py-2 cursor-default">Submenu Item 2</li>
              <li className="px-4 py-2 cursor-default">Submenu Item 3</li>
            </ul>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default DashboardMenuItem;
