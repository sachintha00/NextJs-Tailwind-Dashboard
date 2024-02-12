import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import Link from "next/link";

function DashboardMenuItem({ isSidebarOpen, menuItem }) {
  const [mainMenuItems, setMainMenuItems] = useState(() => {
    const initialMainMenuItems = {};
    menuItem.forEach((_, dashboardIndex) => {
      initialMainMenuItems[dashboardIndex] = false;
    });
    return initialMainMenuItems;
  });

  const [submenus, setSubmenus] = useState(() => {
    const initialSubmenus = {};
    menuItem.forEach((dashboard, dashboardIndex) => {
      dashboard.subMenu.forEach((_, submenuIndex) => {
        const submenuKey = `submenu${dashboardIndex}_${submenuIndex}`;
        initialSubmenus[submenuKey] = false;
      });
    });
    return initialSubmenus;
  });

  const toggleSubmenu = (dashboardIndex, submenuIndex) => {
    setSubmenus((prevSubmenus) => {
      const submenuKey = `submenu${dashboardIndex}_${submenuIndex}`;
      const updatedSubmenus = Object.fromEntries(
        Object.entries(prevSubmenus).map(([key, value]) => [
          key,
          key.startsWith(`submenu${dashboardIndex}`)
            ? key === submenuKey
            : false,
        ])
      );
      return { ...prevSubmenus, ...updatedSubmenus };
    });
  };

  const toggleMainMenu = (dashboardIndex) => {
    setMainMenuItems((prevMainMenuItems) => {
      const updatedMainMenuItems = { ...prevMainMenuItems };
      const isExpanded = updatedMainMenuItems[dashboardIndex];
      Object.keys(updatedMainMenuItems).forEach((index) => {
        updatedMainMenuItems[index] =
          index === `${dashboardIndex}` && !isExpanded;
      });
      return updatedMainMenuItems;
    });
  };

  return (
    <div
      className={`fixed bottom-0 h-screen border-r top-[70px] bg-white border-black-800 z-40`}
      style={{ width: isSidebarOpen ? "250px" : "65px" }}
    >
      <nav className="flex-grow mt-2 overflow-y-hidden">
        <ul className="mt-4">
          {menuItem.map((dashboard, dashboardIndex) => (
            <li key={dashboardIndex}>
              <ul>
                <li
                  className="flex items-center px-4 py-2 cursor-pointer"
                  onClick={() => toggleMainMenu(dashboardIndex)}
                >
                  <MdDashboard className={`mr-2`} />
                  {dashboard.hasOwnProperty("link") ? (
                    <Link
                      href={dashboard.link}
                      className={!isSidebarOpen ? "hidden" : ""}
                    >
                      {dashboard.menu}
                    </Link>
                  ) : (
                    <div className={!isSidebarOpen ? "hidden" : ""}>
                      {dashboard.menu}
                    </div>
                  )}
                </li>
                {mainMenuItems[dashboardIndex] && (
                  <div>
                    {dashboard.subMenu.map((submenuItem, submenuIndex) => (
                      <React.Fragment key={submenuIndex}>
                        {submenuItem.hasOwnProperty("link") ? (
                          <Link
                            href={submenuItem.link}
                            className="block px-4 py-2 cursor-pointer"
                            onClick={() =>
                              toggleSubmenu(dashboardIndex, submenuIndex)
                            }
                          >
                            {submenuItem.subMenuName}
                          </Link>
                        ) : (
                          <li
                            className="px-4 py-2 cursor-pointer"
                            onClick={() =>
                              toggleSubmenu(dashboardIndex, submenuIndex)
                            }
                          >
                            {submenuItem.subMenuName}
                          </li>
                        )}

                        {submenuItem.submenuItems?.nestedSubMenu && (
                          <div
                            style={{
                              display: submenus[
                                `submenu${dashboardIndex}_${submenuIndex}`
                              ]
                                ? "block"
                                : "none",
                            }}
                          >
                            <ul className="mt-2 ml-4 tree-view">
                              {submenuItem.submenuItems.nestedSubMenu.map(
                                (nestedItem, nestedIndex) => (
                                  <Link
                                    href={nestedItem.link}
                                    key={nestedIndex}
                                    className="block px-2 py-2 cursor-pointer"
                                  >
                                    {nestedItem.name}
                                  </Link>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default DashboardMenuItem;
