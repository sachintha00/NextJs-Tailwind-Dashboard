"use client";

import React from "react";
import Image from "next/image";
import Languages from "./_components/languages";
import DashboardItem from "./_components/dashboard_item";
import Notifications from "./_components/notifications";
import Profile from "./_components/profile";
import Search from "./_components/search";

function TopNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center bg-white  dark:bg-zinc-800 print:hidden dark:border-zinc-700 ltr:pr-6 rtl:pl-6">
      <div className="flex justify-between w-full">
        <div className="flex items-center topbar-brand">
          <div className="hidden lg:flex navbar-brand items-center justify-between shrink px-6 h-[70px]  ltr:border-r rtl:border-l bg-[#fbfaff] border-gray-50 dark:border-zinc-700 dark:bg-zinc-800 shadow-none">
            <a
              href="#"
              className="flex items-center text-lg flex-shrink-0 font-bold dark:text-white leading-[69px]"
            >
              <img
                src="/images/logo-sm.svg"
                alt=""
                className="inline-block w-6 h-6 align-middle ltr:xl:mr-2 rtl:xl:ml-2"
              />
              <span className="hidden font-bold text-gray-700 align-middle xl:block dark:text-gray-100 leading-[69px]">
                Minia
              </span>
            </a>
          </div>
          <button
            type="button"
            className="group-data-[sidebar-size=sm]:border-b border-b border-[#e9e9ef] dark:border-zinc-600 dark:lg:border-transparent lg:border-transparent  group-data-[sidebar-size=sm]:border-[#e9e9ef] group-data-[sidebar-size=sm]:dark:border-zinc-600 text-gray-800 dark:text-white h-[70px] px-4 ltr:-ml-[52px] rtl:-mr-14 py-1 vertical-menu-btn text-16"
            id="vertical-menu-btn"
          >
            <i className="fa fa-fw fa-bars" />
            test
          </button>
        </div>
        <div className="flex justify-between w-full items-center border-b border-[#e9e9ef] dark:border-zinc-600 ltr:pl-6 rtl:pr-6">
          <Search/>
          <div className="flex">
            <div>
              <div className="relative block dropdown sm:hidden">
                <button
                  type="button"
                  className="text-xl px-4 h-[70px] text-gray-600 dark:text-gray-100 dropdown-toggle"
                  data-dropdown-toggle="navNotifications"
                >
                  <i data-feather="search" className="w-5 h-5" />
                </button>
                <div
                  className="absolute top-0 z-50 hidden px-4 mx-4 list-none bg-white border rounded shadow  dropdown-menu -left-36 w-72 border-gray-50 dark:bg-zinc-800 dark:border-zinc-600 dark:text-gray-300"
                  id="navNotifications"
                >
                  <form
                    className="py-3 dropdown-item"
                    aria-labelledby="navNotifications"
                  >
                    <div className="m-0 form-group">
                      <div className="flex w-full">
                        <input
                          type="text"
                          className="border-gray-100 dark:border-zinc-600 dark:text-zinc-100 w-fit"
                          placeholder="Search ..."
                          aria-label="Search Result"
                        />
                        <button
                          className="text-white border-l-0 border-transparent rounded-l-none btn btn-primary bg-violet-500"
                          type="submit"
                        >
                          <i className="mdi mdi-magnify" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <Languages />
            <div>
              <button
                type="button"
                className="light-dark-mode text-xl px-3 h-[70px] text-gray-600 dark:text-gray-100 hidden sm:block "
              >
                <i data-feather="moon" className="block w-5 h-5 dark:hidden" />
                <i data-feather="sun" className="hidden w-5 h-5 dark:block" />
              </button>
            </div>
            <DashboardItem />
            <Notifications/>
            <Profile/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNavigation;
