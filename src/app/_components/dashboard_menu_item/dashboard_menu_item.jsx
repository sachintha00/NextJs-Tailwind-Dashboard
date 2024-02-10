import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";

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
      className={`fixed bottom-0 h-screen border-r top-[70px] bg-slate-50 border-black-800`}
      style={{ width: isSidebarOpen ? "250px" : "65px" }}
    >
      <nav className="flex-grow mt-2 overflow-y-auto">
        <ul className="mt-4">
          {menuItem.map((dashboard, dashboardIndex) => (
            <li key={dashboardIndex}>
              <ul>
                <li
                  className="flex items-center px-4 py-2 cursor-default"
                  onClick={() => toggleMainMenu(dashboardIndex)}
                >
                  <MdDashboard className={`mr-2`} />
                  <span className={!isSidebarOpen ? "hidden" : ""}>
                    {dashboard.menu}
                  </span>
                </li>
                {mainMenuItems[dashboardIndex] && (
                  <div>
                    {dashboard.subMenu.map((submenuItem, submenuIndex) => (
                      <React.Fragment key={submenuIndex}>
                        <li
                          className="px-4 py-2 cursor-pointer"
                          onClick={() =>
                            toggleSubmenu(dashboardIndex, submenuIndex)
                          }
                        >
                          {submenuItem.subMenuName}
                        </li>
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
                                  <li
                                    className="px-4 py-2 cursor-default"
                                    key={nestedIndex}
                                  >
                                    {nestedItem}
                                  </li>
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
