import { Facebook, Github } from "lucide-react";
import Image from "next/image";
import React from "react";

const Form01 = () => {
  return (
    <section className="max-w-md w-full h-auto m-4 flex flex-col items-center">
      <Image
        src={"/images/ToolSmith-dark.svg"}
        width={170}
        height={170}
        alt="Logo"
        className="block dark:hidden mt-4 mb-12"
      />
      <Image
        src={"/images/ToolSmith.svg"}
        width={170}
        height={170}
        alt="Logo"
        className="hidden dark:block mt-4 mb-12"
      />

      <form className="dark:bg-[#243041] bg-slate-100 w-full px-4 py-8 flex flex-col items-center rounded-lg">
        <div className="max-w-96 w-full flex flex-col">
          <span className="mb-1">Email</span>
          <input
            type="email"
            required
            className="bg-transparent border border-slate-500 rounded-md px-3 h-12"
          />

          <span className="mt-5 mb-1">Password</span>
          <input
            required
            type="password"
            className="bg-transparent border border-slate-500 rounded-md px-3 h-12"
          />

          <div className="flex justify-between mt-3">
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 accent-slate-500" />
              <span className="ml-2 text-sm">Remember me</span>
            </div>
            <span className="text-sm hover:text-slate-500 cursor-pointer">
              Forgot password?
            </span>
          </div>

          <button className="bg-slate-500 text-white mt-8 mx-auto py-3 px-28 rounded-md font-semibold hover:bg-slate-600 transition-all duration-200 ease-in-out">
            Login
          </button>
          <p className="mt-3 text-xs text-center">
            Don't have an account?{" "}
            <span className="text-slate-500 cursor-pointer">Create now</span>
          </p>

          <div className="mt-6">
            <div className="flex gap-2 items-center">
              <hr className="border-slate-500 w-full" />
              <span className="text-sm">OR</span>
              <hr className="border-slate-500 w-full" />
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <button className="border border-slate-500 py-2 rounded-md transition-all duration-300 hover:bg-slate-500 relative">
                Login with Facebook
                <Facebook
                  className="absolute top-[50%] translate-y-[-50%] left-3"
                  size={16}
                />
              </button>
              <button className="border border-slate-500 py-2 rounded-md transition-all duration-300 hover:bg-slate-500 relative">
                Login with GitHub
                <Github
                  className="absolute top-[50%] translate-y-[-50%] left-3"
                  size={16}
                />
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form01;
