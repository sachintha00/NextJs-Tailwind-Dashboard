import React from 'react'

function Login() {
  return (
    <>
      <h1 className="text-base lg:text-2xl max-w-[500px] mx-auto mb-4 lg:mb-8 lg:mt-20 w-full">
          Interactive Brand
        </h1>

        <div className="w-full max-w-[500px]">
          <div className="mb-8">
            <h3 className="mb-2 text-xl font-semibold lg:text-3xl">Login</h3>
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
              Log In
            </button>
          </div>

          <div className="relative flex items-center justify-center w-full py-2 my-4">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="absolute px-2 text-lg bg-white">or</p>
          </div>

          <button className="flex items-center justify-center w-full p-3 font-semibold text-center border border-black rounded-md">
            Sign In With Google
          </button>
        </div>

        <div className="flex items-center justify-center w-full mt-4">
          <p className="text-sm font-normal">
            Don't have an account{" "}
            <span className="font-semibold underline cursor-pointer">
              Sign up for free
            </span>
          </p>
        </div>
    </>
  )
}

export default Login
