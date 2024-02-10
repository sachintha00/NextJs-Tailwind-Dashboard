import React from "react";
import DashboardMenuItem from "../dashboard_menu_item/dashboard_menu_item";

const menuItemObjects = [
  {
    menu: "Dashboard 1",
    subMenu: [
      {
        subMenuName: "Test 1",
        submenuItems: {
          nestedSubMenu: ["nextedsubmenu1", "nextedsubmenu2", "nextedsubmenu3"],
        },
      },
      {
        subMenuName: "Test 2",
        submenuItems: {
          nestedSubMenu: ["nextedsubmenu1", "nextedsubmenu2", "nextedsubmenu3"],
        },
      },
      {
        subMenuName: "Test 3",
      },
    ],
  },
  {
    menu: "Dashboard 2",
    subMenu: [
      {
        subMenuName: "Test 1",
        submenuItems: {
          nestedSubMenu: ["nextedsubmenu1", "nextedsubmenu2", "nextedsubmenu3"],
        },
      },
      {
        subMenuName: "Test 2",
        submenuItems: {
          nestedSubMenu: ["nextedsubmenu1", "nextedsubmenu2", "nextedsubmenu3"],
        },
      },
      {
        subMenuName: "Test 3",
      },
    ],
  },
  {
    menu: "Dashboard 2",
    subMenu: [
      {
        subMenuName: "Test 1",
        submenuItems: {
          nestedSubMenu: ["nextedsubmenu1", "nextedsubmenu2", "nextedsubmenu3"],
        },
      },
      {
        subMenuName: "Test 2",
        submenuItems: {
          nestedSubMenu: ["nextedsubmenu1", "nextedsubmenu2", "nextedsubmenu3"],
        },
      },
      {
        subMenuName: "Test 3",
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
