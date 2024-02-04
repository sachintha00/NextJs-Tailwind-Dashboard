import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faCog } from "@fortawesome/free-solid-svg-icons";

function SideNavigation() {
  const [submenus, setSubmenus] = useState({
    submenu1: false,
    submenu2: false,
  });

  const [collapsed, setCollapsed] = useState(false);

  const toggleSubmenu = (submenu) => {
    setSubmenus({ ...submenus, [submenu]: !submenus[submenu] });
  };

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={`flex flex-col md:flex-row h-screen ${
        collapsed ? "md:w-16" : ""
      }`}
    >
      <div
        className={`w-full md:w-64 bg-white shadow-md ${
          collapsed ? "md:w-16" : ""
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <h1
            className={`text-gray-800 font-bold ${collapsed ? "hidden" : ""}`}
          >
            Sidebar
          </h1>
          <div className="flex space-x-2" onClick={toggleSidebar}>
            <FontAwesomeIcon
              icon={faBars}
              className={`h-4 w-4 text-gray-600 cursor-pointer`}
            />
          </div>
        </div>
        <nav className="mt-2">
          <ul className="mb-4">
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
              {collapsed ? "" : "Submenu 1"}
            </li>
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
              {collapsed ? "" : "Submenu 1"}
            </li>
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
              {collapsed ? "" : "Submenu 1"}
            </li>
          </ul>
          <div className="border-t border-gray-300"></div>
          <ul className="mt-4">
            <li
              className="px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => toggleSubmenu("submenu1")}
            >
              <FontAwesomeIcon
                icon={faUser}
                className={`h-4 w-4 text-gray-600 cursor-pointer`}
              />{" "}
              {collapsed ? "" : "Submenu 1"}
            </li>
            {submenus.submenu1 && (
              <ul className="ml-6 mt-2">
                <li
                  className="px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={() => toggleSubmenu("subsubmenu1")}
                >
                  Subsubmenu 1
                </li>
                {submenus.subsubmenu1 && (
                  <ul className="ml-6 mt-2">
                    <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Subsubsubmenu 1
                    </li>
                    <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Subsubsubmenu 2
                    </li>
                  </ul>
                )}
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Submenu Item 2
                </li>
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Submenu Item 3
                </li>
              </ul>
            )}
            <li
              className="px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => toggleSubmenu("submenu2")}
            >
              <FontAwesomeIcon
                icon={faUser}
                className={`h-4 w-4 text-gray-600 cursor-pointer`}
              />{" "}
              {collapsed ? "" : "Submenu 2"}
            </li>
            {submenus.submenu2 && (
              <ul className="ml-4 mt-2">
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Submenu Item 1
                </li>
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Submenu Item 2
                </li>
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Submenu Item 3
                </li>
              </ul>
            )}
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-4">
        <h1>Main Content</h1>
        {/* Your main content goes here */}
      </div>
    </div>
  );
}

export default SideNavigation;
