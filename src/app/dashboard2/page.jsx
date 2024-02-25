import React from "react";
import { MdDashboard } from "react-icons/md";
import "./style.css";

function Page() {
  return (
    <div className="">
      <div>
        <aside
          id="separator-sidebar"
          className="fixed top-0 left-0 z-40 w-24 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="absolute space-y-2 font-medium">
              <li class="relative group">
                <a href="#" class="">
                  <span class="ms-3">Dashboard</span>
                </a>
                <ul class="absolute left-[130px] bg-red-500 top-0 hidden group-hover:block">
                  <li class="">
                    <a href="#" class="">
                      Products
                    </a>
                    <ul class="absolute left-[120px] bg-blue-500 top-0 hidden group-hover:block">
                      <li class="">
                        <a href="#" class="">
                          Products nest
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="relative">
                <a href="#" class="">
                  <span class="ms-3">Dashboard</span>
                </a>
                <ul class="absolute left-[130px] bg-red-500 top-0 hidden group-hover:block">
                  <li class="group">
                    <a href="#" class="">
                      Products
                    </a>
                    <ul class="absolute left-[120px] bg-blue-500 top-0 hidden group-hover:block">
                      <li>
                        <a href="#" class="">
                          Products nest
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li className="relative group">
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Dashboard</span>
                </a>
                <ul
                  id="dropdown-example"
                  class=" py-2 space-y-2 absolute left-[130px] bg-red-500 top-0 hidden group-hover:block"
                >
                  <li className="group">
                    <a
                      href="#"
                      class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Products
                    </a>
                    <ul id="dropdown-example" class=" py-2 space-y-2 ">
                      <li className="relative">
                        <ul id="dropdown-example" class=" py-2 space-y-2">
                          <li className="bsolute left-[130px] bg-red-500 top-0 hidden group-hover:block">
                            <a
                              href="#"
                              class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                            >
                              Products
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Billing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Invoice
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Page;
