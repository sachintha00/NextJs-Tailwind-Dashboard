"use client";
import React from "react";

function Notifications() {
  return (
    <div>
      <div className="relative dropdown text-gray-600">
        <div className="relative">
          <button
            type="button"
            className="btn border-0 h-[70px] dropdown-toggle px-4  dark:text-gray-100 ltr:mr-2 rtl:ml-2"
            aria-expanded="false"
            data-dropdown-toggle="notification"
          >
            <i data-feather="bell" className="w-5 h-5" />
          </button>
          <span className="absolute text-xs px-1 bg-red-500 text-white font-medium rounded-full left-6 top-2.5">
            5
          </span>
        </div>
        <div
          className="absolute z-50 hidden list-none bg-white rounded shadow dropdown-menu w-80 dark:bg-zinc-800 "
          id="notification"
        >
          <div
            className="border rounded border-gray-50 dark:border-gray-700"
            aria-labelledby="notification"
          >
            <div className="grid grid-cols-12 p-4">
              <div className="col-span-6">
                <h6 className="m-0 text-gray-700 dark:text-gray-100">
                  {" "}
                  Notifications{" "}
                </h6>
              </div>
              <div className="col-span-6 justify-self-end">
                <a href="#!" className="text-xs underline dark:text-gray-400">
                  {" "}
                  Unread (3)
                </a>
              </div>
            </div>
            <div className="max-h-56" data-simplebar>
              <div>
                <a href="#!" className="text-reset notification-item">
                  <div className="flex px-4 py-2 hover:bg-gray-50/50 dark:hover:bg-zinc-700/50">
                    <div className=" ltr:mr-3 rtl:ml-3">
                      <img
                        src="/images/avatar-3.jpg"
                        className="w-8 h-8 rounded-full"
                        alt="user-pic"
                      />
                    </div>
                    <div className="flex-grow">
                      <h6 className="mb-1 text-gray-700 dark:text-gray-100">
                        James Lemire
                      </h6>
                      <div className="text-gray-600 text-13">
                        <p className="mb-1 dark:text-gray-400">
                          It will seem like simplified English.
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline dark:text-gray-400" />{" "}
                          <span>1 hour ago</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#!" className="text-reset notification-item">
                  <div className="flex px-4 py-2 hover:bg-gray-50/50 dark:hover:bg-zinc-700/50">
                    <div className=" ltr:mr-3 rtl:ml-3">
                      <div className="w-8 h-8 text-center rounded-full bg-violet-500">
                        <i className="text-xl leading-relaxed text-white bx bx-cart" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h6 className="mb-1 text-gray-700 dark:text-gray-100">
                        Your order is placed
                      </h6>
                      <div className="text-gray-600 text-13">
                        <p className="mb-1 dark:text-gray-400">
                          If several languages coalesce the grammar
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline dark:text-gray-400" />{" "}
                          <span>3 min ago</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#!" className="text-reset notification-item">
                  <div className="flex px-4 py-2 hover:bg-gray-50/50 dark:hover:bg-zinc-700/50">
                    <div className=" ltr:mr-3 rtl:ml-3">
                      <div className="w-8 h-8 text-center bg-green-500 rounded-full">
                        <i className="text-xl leading-relaxed text-white bx bx-badge-check" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h6 className="mb-1 text-gray-700 dark:text-gray-100">
                        Your item is shipped
                      </h6>
                      <div className="text-gray-600 text-13">
                        <p className="mb-1 dark:text-gray-400">
                          If several languages coalesce the grammar
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline dark:text-gray-400" />{" "}
                          <span>3 min ago</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#!" className="text-reset notification-item">
                  <div className="flex px-4 py-2 hover:bg-gray-50/50 dark:hover:bg-zinc-700/50">
                    <div className=" ltr:mr-3 rtl:ml-3">
                      <img
                        src="images/avatar-6.jpg"
                        className="w-8 h-8 rounded-full"
                        alt="user-pic"
                      />
                    </div>
                    <div className="flex-grow">
                      <h6 className="mb-1 text-gray-700 dark:text-gray-100">
                        Salena Layfield
                      </h6>
                      <div className="text-gray-600 text-13">
                        <p className="mb-1 dark:text-gray-400">
                          As a skeptical Cambridge friend of mine occidental.
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline dark:text-gray-400" />{" "}
                          <span>1 hour ago</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="grid p-1 border-t border-gray-50 dark:border-zinc-600 justify-items-center">
              <a className="border-0 btn text-violet-500" href="">
                <i className="mr-1 mdi mdi-arrow-right-circle" />{" "}
                <span>View More..</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
