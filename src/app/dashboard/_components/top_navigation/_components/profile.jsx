"use client";
import React from "react";

function Profile() {
  return (
    <div>
      <div className="relative dropdown">
        <button
          type="button"
          className="flex items-center px-3 py-2 h-[70px] border-x border-gray-50 bg-gray-50/30  dropdown-toggle dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-100"
          id="page-header-user-dropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <img
            className="border-[3px] border-gray-700 dark:border-zinc-400 rounded-full w-9 h-9 ltr:xl:mr-2 rtl:xl:ml-2"
            src="/images/avatar-1.jpg"
            alt="Header Avatar"
          />
          <span className="hidden font-medium xl:block">Shawn L.</span>
          <i className="hidden align-bottom mdi mdi-chevron-down xl:block" />
        </button>
        <div
          className="absolute top-0 z-50 hidden w-40 list-none bg-white dropdown-menu dropdown-animation rounded shadow  dark:bg-zinc-800"
          id="profile/log"
        >
          <div
            className="border border-gray-50 dark:border-zinc-600"
            aria-labelledby="navNotifications"
          >
            <div className="dropdown-item dark:text-gray-100">
              <a
                className="block px-3 py-2 hover:bg-gray-50/50 dark:hover:bg-zinc-700/50"
                href="apps-contacts-profile.html"
              >
                <i className="mr-1 align-middle mdi mdi-face-man text-16" />{" "}
                Profile
              </a>
            </div>
            <div className="dropdown-item dark:text-gray-100">
              <a
                className="block px-3 py-2 hover:bg-gray-50/50 dark:hover:bg-zinc-700/50"
                href="lock-screen.html"
              >
                <i className="mr-1 align-middle mdi mdi-lock text-16" /> Lock
                Screen
              </a>
            </div>
            <hr className="border-gray-50 dark:border-gray-700" />
            <div className="dropdown-item dark:text-gray-100">
              <a
                className="block p-3 hover:bg-gray-50/50 dark:hover:bg-zinc-700/50"
                href="logout.html"
              >
                <i className="mr-1 align-middle mdi mdi-logout text-16" />{" "}
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
