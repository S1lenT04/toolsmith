import React from "react";

export const components = {
  "button-01": {
    name: "button-01",
    type: "registry:ui",
    files: [
      {
        type: "registry:ui",
        content:
          'import React from "react";\r\n\r\nconst Button = () => {\r\n  return (\r\n    <div>\r\n      <button className="dark:bg-[#243041] bg-slate-100 font-semibold py-3 px-16 rounded-full">\r\n        Click\r\n      </button>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Button;\r\n',
        path: "ui/button-01.tsx",
        target: "components/ui/button-01.tsx",
      },
    ],
    component: React.lazy(() => import("@/registry/ui/button-01")),
  },
  "form-01": {
    name: "form-01",
    type: "registry:ui",
    files: [
      {
        type: "registry:ui",
        content:
          'import { Facebook, Github } from "lucide-react";\r\nimport Image from "next/image";\r\nimport React from "react";\r\n\r\nconst Form01 = () => {\r\n  return (\r\n    <section className="max-w-md w-full h-auto m-4 flex flex-col items-center">\r\n      <Image\r\n        src={"/images/ToolSmith-dark.svg"}\r\n        width={170}\r\n        height={170}\r\n        alt="Logo"\r\n        className="block dark:hidden mt-4 mb-12"\r\n      />\r\n      <Image\r\n        src={"/images/ToolSmith.svg"}\r\n        width={170}\r\n        height={170}\r\n        alt="Logo"\r\n        className="hidden dark:block mt-4 mb-12"\r\n      />\r\n\r\n      <form className="dark:bg-[#243041] bg-slate-100 w-full px-4 py-8 flex flex-col items-center rounded-lg">\r\n        <div className="max-w-96 w-full flex flex-col">\r\n          <span className="mb-1">Email</span>\r\n          <input\r\n            type="email"\r\n            required\r\n            className="bg-transparent border border-slate-500 rounded-md px-3 h-12"\r\n          />\r\n\r\n          <span className="mt-5 mb-1">Password</span>\r\n          <input\r\n            required\r\n            type="password"\r\n            className="bg-transparent border border-slate-500 rounded-md px-3 h-12"\r\n          />\r\n\r\n          <div className="flex justify-between mt-3">\r\n            <div className="flex items-center">\r\n              <input type="checkbox" className="h-4 w-4 accent-slate-500" />\r\n              <span className="ml-2 text-sm">Remember me</span>\r\n            </div>\r\n            <span className="text-sm hover:text-slate-500 cursor-pointer">\r\n              Forgot password?\r\n            </span>\r\n          </div>\r\n\r\n          <button className="bg-slate-500 text-white mt-8 mx-auto py-3 px-28 rounded-md font-semibold hover:bg-slate-600 transition-all duration-200 ease-in-out">\r\n            Login\r\n          </button>\r\n          <p className="mt-3 text-xs text-center">\r\n            Don\'t have an account?{" "}\r\n            <span className="text-slate-500 cursor-pointer">Create now</span>\r\n          </p>\r\n\r\n          <div className="mt-6">\r\n            <div className="flex gap-2 items-center">\r\n              <hr className="border-slate-500 w-full" />\r\n              <span className="text-sm">OR</span>\r\n              <hr className="border-slate-500 w-full" />\r\n            </div>\r\n\r\n            <div className="flex flex-col gap-3 mt-6">\r\n              <button className="border border-slate-500 py-2 rounded-md transition-all duration-300 hover:bg-slate-500 relative">\r\n                Login with Facebook\r\n                <Facebook\r\n                  className="absolute top-[50%] translate-y-[-50%] left-3"\r\n                  size={16}\r\n                />\r\n              </button>\r\n              <button className="border border-slate-500 py-2 rounded-md transition-all duration-300 hover:bg-slate-500 relative">\r\n                Login with GitHub\r\n                <Github\r\n                  className="absolute top-[50%] translate-y-[-50%] left-3"\r\n                  size={16}\r\n                />\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </section>\r\n  );\r\n};\r\n\r\nexport default Form01;\r\n',
        path: "ui/form-01.tsx",
        target: "components/ui/form-01.tsx",
      },
    ],
    component: React.lazy(() => import("@/registry/ui/form-01")),
  },
} as const;
