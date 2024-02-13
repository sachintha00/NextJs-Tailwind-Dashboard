import React from "react";
import DashboardMenuItem from "../dashboard_menu_item/dashboard_menu_item";
import { MdDashboard } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { GoGift } from "react-icons/go";

const menuItemObjects = [
  {
    menu: "Dashboard",
    icon: <IoHome className={`mr-2`} size={20} />,
    link: "/dashboard",
  },
  {
    menu: "Apps",
    icon: <MdDashboard className={`mr-2`} size={20} />,
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
        subMenuName: "Test 2",
        submenuItems: {
          nestedSubMenu: [
            { link: "/dashboard", name: "Nested Test 1" },
            { link: "/test", name: "Nested Test 1" },
          ],
        },
      },
    ],
  },
  {
    menu: "Authentications",
    icon: <LuUsers className={`mr-2`} size={20} />,
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
        subMenuName: "Test 2",
        submenuItems: {
          nestedSubMenu: [
            { link: "/dashboard", name: "Nested Test 1" },
            { link: "/test", name: "Nested Test 1" },
          ],
        },
      },
    ],
  },
  {
    menu: "Pages",
    icon: <GoGift className={`mr-2`} size={20} />,
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
        subMenuName: "Test 2",
        submenuItems: {
          nestedSubMenu: [
            { link: "/dashboard", name: "Nested Test 1" },
            { link: "/test", name: "Nested Test 1" },
          ],
        },
      },
    ],
  },
  // {
  //   menu: "Dashboard 3",
  //   link: "/dashboard",
  // },
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
