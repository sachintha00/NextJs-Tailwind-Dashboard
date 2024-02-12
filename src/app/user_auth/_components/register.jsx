import React from "react";

function Register() {
  return (
    <>
      <>
        <h1 className="text-base lg:text-2xl max-w-[500px] mx-auto mb-4 lg:mb-8 lg:mt-20 w-full">
          Interactive Brand
        </h1>

        <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm  sm:text-base  sm:p-4 sm:space-x-4 rtl:space-x-reverse max-w-[500px]">
          <li className="flex items-center text-blue-600 dark:text-blue-500">
            <span className="flex items-center justify-center w-5 h-5 text-xs border border-blue-600 rounded-full me-2 shrink-0 dark:border-blue-500">
              1
            </span>
            Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            <svg
              className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li className="flex items-center">
            <span className="flex items-center justify-center w-5 h-5 text-xs border border-gray-500 rounded-full me-2 shrink-0 dark:border-gray-400">
              2
            </span>
            Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
            <svg
              className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m7 9 4-4-4-4M1 9l4-4-4-4"
              />
            </svg>
          </li>
          <li className="flex items-center">
            <span className="flex items-center justify-center w-5 h-5 text-xs border border-gray-500 rounded-full me-2 shrink-0 dark:border-gray-400">
              3
            </span>
            Review
          </li>
        </ol>

        <form className="w-full max-w-[500px]">
          <div className="mb-8">
            <h3 className="mb-2 text-xl font-semibold lg:text-3xl">Register</h3>
            <p className="mb-2 text-base">
              Welcome Back! Please enter your details.
            </p>
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 my-2 bg-transparent border rounded-md outline-none focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 my-2 bg-transparent border rounded-md outline-none focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center w-full">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <span className="text-sm">Remember me for 30 days</span>
            </label>

            <p className="text-sm font-medium underline cursor-pointer whitespace-nowrap">
              Forgot Password?
            </p>
          </div>

          <div className="mb-4">
            <button className="w-full p-3 font-semibold text-white bg-blue-700 rounded-md">
              Register
            </button>
          </div>

          <div className="relative flex items-center justify-center w-full py-2 my-4">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="absolute px-2 text-lg bg-white">or</p>
          </div>

          <button className="flex items-center justify-center w-full p-3 font-semibold text-center border border-black rounded-md">
            Sign In With Google
          </button>
        </form>

        <div className="flex items-center justify-center w-full mt-4">
          <p className="text-sm font-normal">
            Don't have an account{" "}
            <span className="font-semibold underline cursor-pointer">
              Sign up for free
            </span>
          </p>
        </div>
      </>
    </>
  );
}

export default Register;
