"use client";
import React, { useContext } from "react";
import { NavBarToggle } from "/app/_lib/context/navbar_toggle_context";

function page() {
  const isSidebarOpen = useContext(NavBarToggle);
  return (
    <div
      className={` ${
        isSidebarOpen ? "ml-[250px]" : "ml-[60px]"
      } relative overflow-hidden mt-[70px] px-15 py-5 dark:bg-[#0e1217] dark:text-[#9ea9c3] dark:border-[#1c1f26]`}
    >
      <div className="container-fluid px-[0.625rem] dark:bg-[#0e1217] dark:text-[#9ea9c3] dark:border-[#1c1f26]">
        <div className="grid grid-cols-1 pb-6">
          <h4 className="text-[18px] font-medium mb-sm-0 grow mb-2 md:mb-0">
            Dashboard
          </h4>
        </div>
        <div className="grid grid-cols-1 gap-6 gap-y-0 2xl:gap-6 md:grid-cols-2 2xl:grid-cols-4">
          <div className="p-5 mb-6 border border-gray-300 border-solid rounded-lg dark:bg-[#0e1217] dark:text-[#9ea9c3] dark:border-[#1c1f26]">
            <div className="grid items-center grid-cols-12 gap-6">
              <div className="col-span-6">
                <span className="text-gray-700 ">My Wallet</span>
                <h4 className="my-4 font-medium text-gray-800 text-21">
                  $<span className="counter-value">865.2</span> k
                </h4>
              </div>
              <div className="col-span-6">
                <div
                  id="mini-chart1"
                  className="mb-2"
                  style={{ color: "#5156be" }}
                />
              </div>
            </div>
            <div className="flex items-center mt-1">
              <span className="px-1 py-1 text-xs font-medium text-green-500 bg-green-500 rounded bg-opacity-40 ">
                + $20.9k
              </span>
              <span className="ml-1.5 text-gray-700 text-xs">
                Since last week
              </span>
            </div>
          </div>

          <div className="p-5 mb-6 border border-gray-300 border-solid rounded-lg dark:bg-[#0e1217] dark:text-[#9ea9c3] dark:border-[#1c1f26]">
            <div className="grid items-center grid-cols-12 gap-6">
              <div className="col-span-6">
                <span className="text-gray-700 ">My Wallet</span>
                <h4 className="my-4 font-medium text-gray-800 text-21">
                  $<span className="counter-value">865.2</span> k
                </h4>
              </div>
              <div className="col-span-6">
                <div
                  id="mini-chart1"
                  className="mb-2"
                  style={{ color: "#5156be" }}
                />
              </div>
            </div>
            <div className="flex items-center mt-1">
              <span className="px-1 py-1 text-xs font-medium text-green-500 bg-green-500 rounded bg-opacity-40 ">
                + $20.9k
              </span>
              <span className="ml-1.5 text-gray-700 text-xs">
                Since last week
              </span>
            </div>
          </div>

          <div className="p-5 mb-6 border border-gray-300 border-solid rounded-lg dark:bg-[#0e1217] dark:text-[#9ea9c3] dark:border-[#1c1f26]">
            <div className="grid items-center grid-cols-12 gap-6">
              <div className="col-span-6">
                <span className="text-gray-700 ">My Wallet</span>
                <h4 className="my-4 font-medium text-gray-800 text-21">
                  $<span className="counter-value">865.2</span> k
                </h4>
              </div>
              <div className="col-span-6">
                <div
                  id="mini-chart1"
                  className="mb-2"
                  style={{ color: "#5156be" }}
                />
              </div>
            </div>
            <div className="flex items-center mt-1">
              <span className="px-1 py-1 text-xs font-medium text-green-500 bg-green-500 rounded bg-opacity-40 ">
                + $20.9k
              </span>
              <span className="ml-1.5 text-gray-700 text-xs">
                Since last week
              </span>
            </div>
          </div>

          <div className="p-5 mb-6 border border-gray-300 border-solid rounded-lg dark:bg-[#0e1217] dark:text-[#9ea9c3] dark:border-[#1c1f26]">
            <div className="grid items-center grid-cols-12 gap-6">
              <div className="col-span-6">
                <span className="text-gray-700 ">My Wallet</span>
                <h4 className="my-4 font-medium text-gray-800 text-21">
                  $<span className="counter-value">865.2</span> k
                </h4>
              </div>
              <div className="col-span-6">
                <div
                  id="mini-chart1"
                  className="mb-2"
                  style={{ color: "#5156be" }}
                />
              </div>
            </div>
            <div className="flex items-center mt-1">
              <span className="px-1 py-1 text-xs font-medium text-green-500 bg-green-500 rounded bg-opacity-40 ">
                + $20.9k
              </span>
              <span className="ml-1.5 text-gray-700 text-xs">
                Since last week
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 gap-y-0 2xl:gap-6 lg:grid-cols-12 dark:bg-[#0e1217] dark:text-[#9ea9c3] dark:border-[#1c1f26]">
          <div className="col-span-12 2xl:col-span-5">
            <div className="p-5 mb-6 border border-gray-300 border-solid rounded-lg dark:bg-[#0e1217] dark:text-[#9ea9c3] dark:border-[#1c1f26]">
              <div>
                <div className="flex flex-wrap items-center mb-6 ">
                  <h5 className="mr-2 font-medium text-gray-800 text-15 ">
                    Wallet Balance
                  </h5>
                  <div className="flex gap-1 ltr:ml-auto rtl:mr-auto">
                    <button
                      type="button"
                      className="px-2 py-1 font-medium text-gray-500 border-transparent btn text-[12.25px] bg-gray-50/50 hover:bg-gray-50/50 dark:hover:bg-zinc-600/800 hover:text-white focus:bg-gray-500 focus:text-white dark:bg-gray-500/10 hover:bg-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800"
                    >
                      ALL
                    </button>
                    <button
                      type="button"
                      className="px-2 py-1 font-medium border-transparent btn text-[12.25px] bg-violet-50/50 text-violet-500 hover:bg-violet-500 hover:text-white focus:bg-violet-500 focus:text-white dark:bg-violet-500/20 dark:text-violet-300 dark:hover:bg-violet-500 dark:hover:text-white"
                    >
                      1M
                    </button>
                    <button
                      type="button"
                      className="px-2 py-1 font-medium text-gray-500 border-transparent btn text-[12.25px] bg-gray-50/50 hover:bg-gray-50/50 dark:hover:bg-zinc-600/800 hover:text-white focus:bg-gray-500 focus:text-white dark:bg-gray-500/10 hover:bg-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800"
                    >
                      6M
                    </button>
                    <button
                      type="button"
                      className="px-2 py-1 font-medium text-gray-500 border-transparent btn text-[12.25px] bg-gray-50/50 hover:bg-gray-50/50 dark:hover:bg-zinc-600/800 hover:text-white focus:bg-gray-500 focus:text-white dark:bg-gray-500/10 hover:bg-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800"
                    >
                      1Y
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-12 2xl:gap-6 justify-items-stretch">
                  <div className="items-center col-span-12 mr-2 md:col-span-6 justify-self-center 2xl:mr-0">
                    <div
                      id="wallet-balance"
                      data-colors='["#777aca", "#5156be", "#a8aada"]'
                      className="apex-charts"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <div className="text-center mt-sm-0 md:text-left">
                      <div>
                        <p className="mb-2">Bitcoin</p>
                        <h6 className="text-gray-800 ">
                          0.4412 BTC =
                          <span className="font-normal text-gray-700text-14">
                            $ 4025.32
                          </span>
                        </h6>
                      </div>
                      <div className="pt-2 mt-6">
                        <p className="mb-2">Ethereum</p>
                        <h6 className="text-gray-800 ">
                          4.5701 ETH =
                          <span className="font-normal text-gray-700text-14">
                            $ 1123.64
                          </span>
                        </h6>
                      </div>
                      <div className="pt-2 mt-6">
                        <p className="mb-2">Litecoin</p>
                        <h6 className="text-gray-800 ">
                          35.3811 LTC =
                          <span className="font-normal text-gray-700text-14">
                            $ 2263.09
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 2xl:col-span-5">
            <div className="p-5 mb-6 border border-gray-300 border-solid rounded-lg dark:bg-[#0e1217] dark:text-[#9ea9c3] dark:border-[#1c1f26]">
              <div>
                <div className="flex flex-wrap items-center mb-6">
                  <h5 className="mr-2 font-medium text-gray-800 text-15 ">
                    Wallet Balance
                  </h5>
                  <div className="flex gap-1 ltr:ml-auto rtl:mr-auto">
                    <button
                      type="button"
                      className="px-2 py-1 font-medium text-gray-500 border-transparent btn text-[12.25px] bg-gray-50/50 hover:bg-gray-50/50 dark:hover:bg-zinc-600/800 hover:text-white focus:bg-gray-500 focus:text-white dark:bg-gray-500/10 hover:bg-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800"
                    >
                      ALL
                    </button>
                    <button
                      type="button"
                      className="px-2 py-1 font-medium border-transparent btn text-[12.25px] bg-violet-50/50 text-violet-500 hover:bg-violet-500 hover:text-white focus:bg-violet-500 focus:text-white dark:bg-violet-500/20 dark:text-violet-300 dark:hover:bg-violet-500 dark:hover:text-white"
                    >
                      1M
                    </button>
                    <button
                      type="button"
                      className="px-2 py-1 font-medium text-gray-500 border-transparent btn text-[12.25px] bg-gray-50/50 hover:bg-gray-50/50 dark:hover:bg-zinc-600/800 hover:text-white focus:bg-gray-500 focus:text-white dark:bg-gray-500/10 hover:bg-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800"
                    >
                      6M
                    </button>
                    <button
                      type="button"
                      className="px-2 py-1 font-medium text-gray-500 border-transparent btn text-[12.25px] bg-gray-50/50 hover:bg-gray-50/50 dark:hover:bg-zinc-600/800 hover:text-white focus:bg-gray-500 focus:text-white dark:bg-gray-500/10 hover:bg-gray-500 dark:hover:bg-gray-200 dark:hover:text-gray-800"
                    >
                      1Y
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-12 2xl:gap-6 justify-items-stretch">
                  <div className="items-center col-span-12 mr-2 md:col-span-6 justify-self-center 2xl:mr-0">
                    <div
                      id="wallet-balance"
                      data-colors='["#777aca", "#5156be", "#a8aada"]'
                      className="apex-charts"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <div className="text-center mt-sm-0 md:text-left">
                      <div>
                        <p className="mb-2">Bitcoin</p>
                        <h6 className="text-gray-800 ">
                          0.4412 BTC =
                          <span className="font-normal text-gray-700text-14">
                            $ 4025.32
                          </span>
                        </h6>
                      </div>
                      <div className="pt-2 mt-6">
                        <p className="mb-2">Ethereum</p>
                        <h6 className="text-gray-800 ">
                          4.5701 ETH =
                          <span className="font-normal text-gray-700text-14">
                            $ 1123.64
                          </span>
                        </h6>
                      </div>
                      <div className="pt-2 mt-6">
                        <p className="mb-2">Litecoin</p>
                        <h6 className="text-gray-800 ">
                          35.3811 LTC =
                          <span className="font-normal text-gray-700text-14">
                            $ 2263.09
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
