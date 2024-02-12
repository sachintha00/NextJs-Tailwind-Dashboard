import React from "react";
import DashboardMenuItem from "../dashboard_menu_item/dashboard_menu_item";

const menuItemObjects = [
  {
    menu: "Dashboard 1",
    // link: "/dashboard",
    subMenu: [
      {
        // link: "/test",
        subMenuName: "Test 1",
        submenuItems: {
          nestedSubMenu: [
            { link: "/dashboard", name: "Nested Test 1" },
            { link: "/test", name: "Nested Test 1" },
          ],
        },
      },
      {
        subMenuName: "Test 1",
        submenuItems: {
          nestedSubMenu: [
            { link: "/dashboard", name: "Nested Test 1" },
            { link: "/test", name: "Nested Test 1" },
          ],
        },
      },
    ],
  },
];

function Sidebar({ isSidebarOpen }) {
  return (
    <DashboardMenuItem
      isSidebarOpen={isSidebarOpen}
      menuItem={menuItemObjects}
    />
  );
}

export default Sidebar;
