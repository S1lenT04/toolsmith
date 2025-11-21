"use client";

import {
  BarChart3,
  LayoutDashboard,
  LifeBuoy,
  Package,
  Receipt,
  Settings,
  UserCircle,
  ChevronFirst,
  EllipsisVertical,
  ChevronDown,
  FolderPlus,
  X,
} from "lucide-react";
import { useState } from "react";

const SideBar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [sideBar, setSideBar] = useState(true);

  function toggleSidebar() {
    setSideBar(!sideBar);
    if (sideBar) {
      setDropDown(false);
    }
  }
  function dropDownToggle() {
    setDropDown(!dropDown);
    if (!sideBar) {
      setSideBar(true);
    }
  }

  return (
    <>
      <div className="sm:grid sm:grid-cols-[auto_1fr] sm:min-h-full sm:min-w-full">
        <aside
          className={`h-full sm:sticky bg-slate-100 dark:bg-[#243041] absolute inset-y-0 left-0 transition-all duration-300 ease-in-out overflow-hidden z-50 ${
            sideBar ? "max-w-72" : "sm:max-w-16 max-w-0"
          }`}
        >
          <nav className="h-full flex flex-col border-r shadow-sm bg-slate-100 dark:bg-[#243041] dark:text-white text-black">
            <div className="p-4 pb-2 flex justify-between items-center">
              <span
                className={`font-semibold transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
                  sideBar ? "w-32" : "w-0"
                }`}
              >
                ToolSmith
              </span>
              <button
                onClick={toggleSidebar}
                className="p-1.5 rounded-lg bg-gray-50 dark:bg-slate-600 hover:bg-gray-100 hover:dark:bg-slate-700"
              >
                <ChevronFirst
                  className={`sm:block hidden shrink-0 transition duration-300 ease-in-out ${
                    sideBar ? "rotate-0" : "-rotate-180"
                  }`}
                />
                <X className="shrink-0 sm:hidden block" />
              </button>
            </div>

            <ul className="flex-1 px-3">
              <li className="flex items-center gap-3 p-2 my-1 rounded-md cursor-pointer transition bg-slate-500 text-white">
                <LayoutDashboard size={20} className="shrink-0" />
                <span className="w-52 ml-3">Dashboard</span>
              </li>
              <li className="flex items-center gap-3 p-2 my-1 rounded-md cursor-pointer transition hover:bg-slate-200 dark:hover:bg-slate-700">
                <BarChart3 size={20} className="shrink-0" />
                <span className="w-52 ml-3">Statistics</span>
              </li>
              <li className="flex items-center gap-3 p-2 my-1 rounded-md cursor-pointer transition hover:bg-slate-200 dark:hover:bg-slate-700">
                <UserCircle size={20} className="shrink-0" />
                <span className="w-52 ml-3">Users</span>
              </li>
              <li className="gap-3 ">
                <button
                  onClick={dropDownToggle}
                  className="text-left w-full cursor-pointer flex items-center p-2 my-1 rounded-md transition hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  <FolderPlus size={20} className="shrink-0" />
                  <span className="w-52 ml-6">Create</span>
                  <ChevronDown
                    size={20}
                    className={`${
                      dropDown ? "rotate-180" : ""
                    } transition-transform shrink-0`}
                  />
                </button>
                {/* Note: Adjust the height as needed */}
                <ul
                  className={`grid transition-all duration-300 ease-in-out ${
                    dropDown ? "max-h-36" : "max-h-0"
                  } overflow-hidden`}
                >
                  <div className="overflow-hidden">
                    <li className="py-2.5 transition hover:bg-slate-200 dark:hover:bg-slate-700 pl-6 rounded-md cursor-pointer">
                      Folder
                    </li>
                    <li className="py-2.5 transition hover:bg-slate-200 dark:hover:bg-slate-700 pl-6 rounded-md cursor-pointer">
                      Document
                    </li>
                    <li className="py-2.5 transition hover:bg-slate-200 dark:hover:bg-slate-700 pl-6 rounded-md cursor-pointer">
                      Project
                    </li>
                  </div>
                </ul>
              </li>
              <li className="flex items-center gap-3 p-2 my-1 rounded-md cursor-pointer transition hover:bg-slate-200 dark:hover:bg-slate-700">
                <Package size={20} className="shrink-0" />
                <span className="w-52 ml-3">Orders</span>
              </li>
              <li className="flex items-center gap-3 p-2 my-1 rounded-md cursor-pointer transition hover:bg-slate-200 dark:hover:bg-slate-700">
                <Receipt size={20} className="shrink-0" />
                <span className="w-52 ml-3">Billings</span>
              </li>
              <hr className="my-2 dark:border-white border-black" />
              <li className="flex items-center gap-3 p-2 my-1 rounded-md cursor-pointer transition hover:bg-slate-200 dark:hover:bg-slate-700">
                <Settings size={20} className="shrink-0" />
                <span className="w-52 ml-3">Settings</span>
              </li>
              <li className="flex items-center gap-3 p-2 my-1 rounded-md cursor-pointer transition hover:bg-slate-200 dark:hover:bg-slate-700">
                <LifeBuoy size={20} className="shrink-0" />
                <span className="w-52 ml-3">Help</span>
              </li>
            </ul>
            <div className="border-t dark:border-white border-black flex p-3 bottom-0 bg-slate-100 dark:bg-[#243041]">
              <div className="flex-shrink-0 bg-slate-500 text-white rounded-md w-10 h-10 flex items-center justify-center">
                <span className="text-xl font-semibold">JD</span>
              </div>
              <div
                className={`flex justify-between items-center ml-3 transition-all duration-300 ease-in-out overflow-hidden ${
                  sideBar ? "w-52" : "w-0"
                }`}
              >
                <div className="leading-4">
                  <h4 className="font-semibold">John Doe</h4>
                  <span>johndoe@gmail.com</span>
                </div>
                <EllipsisVertical size={20} className="shrink-0" />
              </div>
            </div>
          </nav>
        </aside>
        <button
          onClick={toggleSidebar}
          className="p-1.5 rounded-lg bg-gray-50 dark:bg-slate-600 hover:bg-gray-100 hover:dark:bg-slate-700 sm:hidden block rotate-180"
        >
          <ChevronFirst className="shrink-0 dark:text-white text-black" />
        </button>
      </div>
    </>
  );
};

export default SideBar;
