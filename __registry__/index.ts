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
  "button-animated-01": {
    name: "button-animated-01",
    type: "registry:ui",
    files: [
      {
        type: "registry:ui",
        content:
          'import { ChevronRight } from "lucide-react";\r\nimport React from "react";\r\n\r\nconst Button = () => {\r\n  return (\r\n    <>\r\n      <button className="flex items-center group">\r\n        <span className="font-semibold">Click</span>\r\n        <div className="flex items-center ml-4 relative">\r\n          <div className="bg-primary w-5 h-[2px] rounded-full transition-all duration-300 ease-in-out group-hover:w-7"></div>\r\n          <ChevronRight className="text-primary absolute -right-2 transition-all duration-300 ease-in-out group-hover:-right-[10px]" />\r\n        </div>\r\n      </button>\r\n    </>\r\n  );\r\n};\r\n\r\nexport default Button;\r\n',
        path: "ui/button-animated-01.tsx",
        target: "components/ui/button-animated-01.tsx",
      },
    ],
    component: React.lazy(() => import("@/registry/ui/button-animated-01")),
  },
  "button-animated-02": {
    name: "button-animated-02",
    type: "registry:ui",
    files: [
      {
        type: "registry:ui",
        content:
          'import React from "react";\r\n\r\nconst Button = () => {\r\n  return (\r\n    <>\r\n      <button className="bg-slate-500 py-2 px-4 transition-all rounded-lg hover:rounded-[50px] ease-linear duration-300 text-sm text-white">\r\n        Click\r\n      </button>\r\n    </>\r\n  );\r\n};\r\n\r\nexport default Button;\r\n',
        path: "ui/button-animated-02.tsx",
        target: "components/ui/button-animated-02.tsx",
      },
    ],
    component: React.lazy(() => import("@/registry/ui/button-animated-02")),
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
  "input-01": {
    name: "input-01",
    type: "registry:ui",
    files: [
      {
        type: "registry:ui",
        content:
          'import React from "react";\r\n\r\nconst Input01 = () => {\r\n  return (\r\n    <div className="flex flex-col gap-2 w-64">\r\n      <label className="ml-1.5">Input label</label>\r\n      <input\r\n        type="text"\r\n        className="bg-transparent py-2 px-3 border border-slate-500 rounded-lg outline-none"\r\n      />\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Input01;\r\n',
        path: "ui/input-01.tsx",
        target: "components/ui/input-01.tsx",
      },
    ],
    component: React.lazy(() => import("@/registry/ui/input-01")),
  },
  "input-animated-01": {
    name: "input-animated-01",
    type: "registry:ui",
    files: [
      {
        type: "registry:ui",
        content:
          'import React from "react";\r\n\r\nconst InputAnimated01 = () => {\r\n  return (\r\n    <div className="relative w-64">\r\n      <input\r\n        type="text"\r\n        id="password1"\r\n        className="peer w-full px-3 pt-4 pb-2 border bg-transparent border-slate-500 rounded-lg focus:outline-none"\r\n        placeholder=" "\r\n      />\r\n      <label\r\n        htmlFor="password1"\r\n        className="absolute bg-slate-50 dark:bg-gray-800 left-3 px-1 -top-2 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm cursor-text"\r\n      >\r\n        Input label\r\n      </label>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default InputAnimated01;\r\n',
        path: "ui/input-animated-01.tsx",
        target: "components/ui/input-animated-01.tsx",
      },
    ],
    component: React.lazy(() => import("@/registry/ui/input-animated-01")),
  },
  "input-animated-02": {
    name: "input-animated-02",
    type: "registry:ui",
    files: [
      {
        type: "registry:ui",
        content:
          'import React from "react";\r\n\r\nconst InputAnimated02 = () => {\r\n  return (\r\n    <div className="relative w-64">\r\n      <input\r\n        type="text"\r\n        className="peer w-full px-3 pt-4 pb-2 border-b bg-transparent border-slate-500 focus:outline-none"\r\n        placeholder=" "\r\n        id="password2"\r\n      />\r\n      <label\r\n        htmlFor="password2"\r\n        className="absolute left-3 -top-2 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm cursor-text"\r\n      >\r\n        Input label\r\n      </label>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default InputAnimated02;\r\n',
        path: "ui/input-animated-02.tsx",
        target: "components/ui/input-animated-02.tsx",
      },
    ],
    component: React.lazy(() => import("@/registry/ui/input-animated-02")),
  },
  "password-input-01": {
    name: "password-input-01",
    type: "registry:ui",
    files: [
      {
        type: "registry:ui",
        content:
          '"use client";\r\n\r\nimport React, { useState } from "react";\r\nimport { Eye, EyeOff } from "lucide-react";\r\n\r\nconst PasswordInput01 = () => {\r\n  const [showPassword, setShowPassword] = useState(false);\r\n\r\n  return (\r\n    <div className="relative w-64 flex items-center">\r\n      <input\r\n        type={showPassword ? "text" : "password"}\r\n        className="bg-transparent py-2 px-3 border border-slate-500 rounded-lg outline-none pr-11 w-full"\r\n        placeholder="Password"\r\n      />\r\n      <button\r\n        type="button"\r\n        className="absolute right-3 cursor-pointer text-gray-500"\r\n        onClick={() => setShowPassword(!showPassword)}\r\n      >\r\n        {showPassword ? <EyeOff /> : <Eye />}\r\n      </button>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default PasswordInput01;\r\n',
        path: "ui/password-input-01.tsx",
        target: "components/ui/password-input-01.tsx",
      },
    ],
    component: React.lazy(() => import("@/registry/ui/password-input-01")),
  },
  changelog: {
    name: "changelog",
    type: "registry:ui",
    files: [
      {
        type: "registry:ui",
        content:
          'const changelog = () => {\r\n  const items = [\r\n    {\r\n      date: "September 3, 2024",\r\n      title: "Announcing Projects on Frontend Roadmap",\r\n    },\r\n    {\r\n      date: "August 28, 2024",\r\n      title: "Build your leaning habits with learning streaks",\r\n    },\r\n    { date: "August 25, 2024", title: "Git and GitHub Roadmap" },\r\n    {\r\n      date: "August 22, 2024",\r\n      title: "Submit your project solution and get feedback",\r\n    },\r\n    { date: "August 15, 2024", title: "Backend Project Ideas" },\r\n    { date: "August 10, 2024", title: "Redis roadmap" },\r\n    {\r\n      date: "August 1, 2024",\r\n      title: "Changelog page to help you stay in the loop",\r\n    },\r\n  ];\r\n\r\n  return (\r\n    <main>\r\n      {/* Change Log */}\r\n      <div className="flex flex-col items-center justify-center gap-4 px-4">\r\n        <h2 className="text-4xl font-medium">Changelog</h2>\r\n        <p className="text-stone-400 text-sm text-center">\r\n          Here\'s everything we have shipped in the past few days\r\n        </p>\r\n\r\n        <div className="w-full flex flex-col items-center relative">\r\n          <div className="relative">\r\n            {items.map((i, index) => (\r\n              <div\r\n                key={index}\r\n                className="items-center grid grid-cols-[42px_1fr] sm:grid-cols-[160px_42px_400px] py-3"\r\n              >\r\n                <p\r\n                  key={i.date}\r\n                  className="text-stone-400 sm:block hidden text-right text-xs mr-4"\r\n                >\r\n                  {i.date}\r\n                </p>\r\n                {index === 0 && (\r\n                  <div className="w-[1.5px] h-full bg-slate-500 absolute top-0 sm:left-[165.5px] left-[5.5px]" />\r\n                )}\r\n                <div\r\n                  key={index}\r\n                  className="w-3 h-3 bg-slate-500 rounded-full z-10"\r\n                ></div>\r\n                <div className="flex flex-col">\r\n                  <p\r\n                    key={i.date}\r\n                    className="text-stone-400 sm:hidden block text-xs"\r\n                  >\r\n                    {i.date}\r\n                  </p>\r\n                  <p key={i.title} className="font-semibold">\r\n                    {i.title}\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            ))}\r\n          </div>\r\n        </div>\r\n\r\n        <button className="bg-slate-500 text-white py-2 px-6 text-sm rounded-lg hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200">\r\n          Visit Complete Changelog\r\n        </button>\r\n      </div>\r\n    </main>\r\n  );\r\n};\r\n\r\nexport default changelog;\r\n',
        path: "ui/changelog.tsx",
        target: "components/ui/changelog.tsx",
      },
    ],
    component: React.lazy(() => import("@/registry/ui/changelog")),
  },
  tabs: {
    name: "tabs",
    type: "registry:ui",
    files: [
      {
        type: "registry:ui",
        content:
          '"use client";\r\n\r\nimport { useState } from "react";\r\n\r\nconst tabs = () => {\r\n  const [active, setActive] = useState(0);\r\n\r\n  return (\r\n    <div className="relative inline-flex bg-gray-200 rounded-xl p-1 min-h-[40px] w-80">\r\n      <div\r\n        className="absolute inset-y-1 left-1 w-[48.7%] bg-white rounded-lg shadow transition-transform duration-300"\r\n        style={{\r\n          transform: `translateX(${active * 100}%)`,\r\n        }}\r\n      />\r\n\r\n      <button\r\n        onClick={() => setActive(0)}\r\n        className={`relative z-10 w-1/2 text-sm font-medium transition duration-300 py-2 ${\r\n          active === 0 ? "text-gray-900" : "text-gray-500"\r\n        }`}\r\n      >\r\n        Personal profile\r\n      </button>\r\n\r\n      <button\r\n        onClick={() => setActive(1)}\r\n        className={`relative z-10 w-1/2 text-sm font-medium transition duration-300 py-2 pl-2 ${\r\n          active === 1 ? "text-gray-900" : "text-gray-500"\r\n        }`}\r\n      >\r\n        Public profile\r\n      </button>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default tabs;\r\n',
        path: "ui/tabs.tsx",
        target: "components/ui/tabs.tsx",
      },
    ],
    component: React.lazy(() => import("@/registry/ui/tabs")),
  },
  "button-animated-03": {
    name: "button-animated-03",
    type: "registry:ui",
    files: [
      {
        type: "registry:ui",
        content:
          'import React from "react";\r\n\r\nconst ButtonAnimated03 = () => {\r\n  return (\r\n    <button className="bg-slate-500 text-white py-2 px-6 text-sm rounded-lg hover:scale-[1.03] active:scale-[0.98] font-medium transition-transform duration-200">\r\n      Click\r\n    </button>\r\n  );\r\n};\r\n\r\nexport default ButtonAnimated03;\r\n',
        path: "ui/button-animated-03.tsx",
        target: "components/ui/button-animated-03.tsx",
      },
    ],
    component: React.lazy(() => import("@/registry/ui/button-animated-03")),
  },
  sidebar: {
    name: "sidebar",
    type: "registry:ui",
    files: [
      {
        type: "registry:ui",
        content:
          '"use client";\r\n\r\nimport {\r\n  BarChart3,\r\n  LayoutDashboard,\r\n  LifeBuoy,\r\n  Package,\r\n  Receipt,\r\n  Settings,\r\n  UserCircle,\r\n  ChevronFirst,\r\n  EllipsisVertical,\r\n  ChevronDown,\r\n  FolderPlus,\r\n  X,\r\n} from "lucide-react";\r\nimport { useState } from "react";\r\n\r\nconst SideBar = () => {\r\n  const [dropDown, setDropDown] = useState(false);\r\n  const [sideBar, setSideBar] = useState(true);\r\n\r\n  function toggleSidebar() {\r\n    setSideBar(!sideBar);\r\n    if (sideBar) {\r\n      setDropDown(false);\r\n    }\r\n  }\r\n  function dropDownToggle() {\r\n    setDropDown(!dropDown);\r\n    if (!sideBar) {\r\n      setSideBar(true);\r\n    }\r\n  }\r\n\r\n  return (\r\n    <div className="grid grid-cols-[auto_1fr] min-h-full min-w-full">\r\n      <aside\r\n        className={`h-full sm:sticky bg-slate-100 dark:bg-[#243041] absolute inset-y-0 left-0 transition-all duration-300 ease-in-out overflow-hidden z-50 ${\r\n          sideBar ? "max-w-72" : "sm:max-w-16 max-w-0"\r\n        }`}\r\n      >\r\n        <nav className="h-full flex flex-col border-r shadow-sm bg-slate-100 dark:bg-[#243041] dark:text-white text-black">\r\n          <div className="p-4 pb-2 flex justify-between items-center">\r\n            <span\r\n              className={`font-semibold transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${\r\n                sideBar ? "w-32" : "w-0"\r\n              }`}\r\n            >\r\n              ToolSmith\r\n            </span>\r\n            <button\r\n              onClick={toggleSidebar}\r\n              className="p-1.5 rounded-lg bg-gray-50 dark:bg-slate-600 hover:bg-gray-100 hover:dark:bg-slate-700"\r\n            >\r\n              <ChevronFirst\r\n                className={`sm:block hidden shrink-0 transition duration-300 ease-in-out ${\r\n                  sideBar ? "rotate-0" : "-rotate-180"\r\n                }`}\r\n              />\r\n              <X className="shrink-0 sm:hidden block" />\r\n            </button>\r\n          </div>\r\n\r\n          <ul className="flex-1 px-3">\r\n            <li className="flex items-center gap-3 p-2 my-1 rounded-md cursor-pointer transition bg-slate-500 text-white">\r\n              <LayoutDashboard size={20} className="shrink-0" />\r\n              <span className="w-52 ml-3">Dashboard</span>\r\n            </li>\r\n            <li className="flex items-center gap-3 p-2 my-1 rounded-md cursor-pointer transition hover:bg-slate-200 dark:hover:bg-slate-700">\r\n              <BarChart3 size={20} className="shrink-0" />\r\n              <span className="w-52 ml-3">Statistics</span>\r\n            </li>\r\n            <li className="flex items-center gap-3 p-2 my-1 rounded-md cursor-pointer transition hover:bg-slate-200 dark:hover:bg-slate-700">\r\n              <UserCircle size={20} className="shrink-0" />\r\n              <span className="w-52 ml-3">Users</span>\r\n            </li>\r\n            <li className="gap-3 ">\r\n              <button\r\n                onClick={dropDownToggle}\r\n                className="text-left w-full cursor-pointer flex items-center p-2 my-1 rounded-md transition hover:bg-slate-200 dark:hover:bg-slate-700"\r\n              >\r\n                <FolderPlus size={20} className="shrink-0" />\r\n                <span className="w-52 ml-6">Create</span>\r\n                <ChevronDown\r\n                  size={20}\r\n                  className={`${\r\n                    dropDown ? "rotate-180" : ""\r\n                  } transition-transform shrink-0`}\r\n                />\r\n              </button>\r\n              {/* Note: Adjust the height as needed */}\r\n              <ul\r\n                className={`grid transition-all duration-300 ease-in-out ${\r\n                  dropDown ? "max-h-36" : "max-h-0"\r\n                } overflow-hidden`}\r\n              >\r\n                <div className="overflow-hidden">\r\n                  <li className="py-2.5 transition hover:bg-slate-200 dark:hover:bg-slate-700 pl-6 rounded-md cursor-pointer">\r\n                    Folder\r\n                  </li>\r\n                  <li className="py-2.5 transition hover:bg-slate-200 dark:hover:bg-slate-700 pl-6 rounded-md cursor-pointer">\r\n                    Document\r\n                  </li>\r\n                  <li className="py-2.5 transition hover:bg-slate-200 dark:hover:bg-slate-700 pl-6 rounded-md cursor-pointer">\r\n                    Project\r\n                  </li>\r\n                </div>\r\n              </ul>\r\n            </li>\r\n            <li className="flex items-center gap-3 p-2 my-1 rounded-md cursor-pointer transition hover:bg-slate-200 dark:hover:bg-slate-700">\r\n              <Package size={20} className="shrink-0" />\r\n              <span className="w-52 ml-3">Orders</span>\r\n            </li>\r\n            <li className="flex items-center gap-3 p-2 my-1 rounded-md cursor-pointer transition hover:bg-slate-200 dark:hover:bg-slate-700">\r\n              <Receipt size={20} className="shrink-0" />\r\n              <span className="w-52 ml-3">Billings</span>\r\n            </li>\r\n            <hr className="my-2 dark:border-white border-black" />\r\n            <li className="flex items-center gap-3 p-2 my-1 rounded-md cursor-pointer transition hover:bg-slate-200 dark:hover:bg-slate-700">\r\n              <Settings size={20} className="shrink-0" />\r\n              <span className="w-52 ml-3">Settings</span>\r\n            </li>\r\n            <li className="flex items-center gap-3 p-2 my-1 rounded-md cursor-pointer transition hover:bg-slate-200 dark:hover:bg-slate-700">\r\n              <LifeBuoy size={20} className="shrink-0" />\r\n              <span className="w-52 ml-3">Help</span>\r\n            </li>\r\n          </ul>\r\n          <div className="border-t dark:border-white border-black flex p-3 bottom-0 bg-slate-100 dark:bg-[#243041]">\r\n            <div className="flex-shrink-0 bg-slate-500 text-white rounded-md w-10 h-10 flex items-center justify-center">\r\n              <span className="text-xl font-semibold">JD</span>\r\n            </div>\r\n            <div\r\n              className={`flex justify-between items-center ml-3 transition-all duration-300 ease-in-out overflow-hidden ${\r\n                sideBar ? "w-52" : "w-0"\r\n              }`}\r\n            >\r\n              <div className="leading-4">\r\n                <h4 className="font-semibold">John Doe</h4>\r\n                <span>johndoe@gmail.com</span>\r\n              </div>\r\n              <EllipsisVertical size={20} className="shrink-0" />\r\n            </div>\r\n          </div>\r\n        </nav>\r\n      </aside>\r\n      <main className="w-full sm:w-full">\r\n        <nav className="p-4 border-b dark:border-white border-black w-full sm:hidden sticky top-0">\r\n          <button\r\n            onClick={toggleSidebar}\r\n            className="p-1.5 rounded-lg bg-gray-50 dark:bg-slate-600 hover:bg-gray-100 hover:dark:bg-slate-700 sm:hidden block rotate-180"\r\n          >\r\n            <ChevronFirst className="shrink-0 dark:text-white text-black" />\r\n          </button>\r\n        </nav>\r\n        <section className="p-4">{/* Main content */}</section>\r\n      </main>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default SideBar;\r\n',
        path: "ui/sidebar.tsx",
        target: "components/ui/sidebar.tsx",
      },
    ],
    component: React.lazy(() => import("@/registry/ui/sidebar")),
  },
} as const;
