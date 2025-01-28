import React from "react";
import Image from "next/image";
import { ToggleDarkMode } from "./ToggleDarkMode";
import SearchBar from "./Search";
import Link from "next/link";
import { docsConfig } from "@/config/DocsConfig";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="py-3 px-4  shadow-lg flex justify-center items-center w-full sticky top-0 z-50 backdrop-blur-md">
        <div className="flex justify-between items-center max-w-[1584px] w-full">
          <div className="flex gap-1">
            <Sheet>
              <SheetTrigger>
                <Menu
                  width={30}
                  height={30}
                  className="text-neutral-900 dark:text-white md:hidden"
                />
              </SheetTrigger>
              <SheetContent
                side={"left"}
                className="bg-neutral-50 dark:bg-gray-800"
              >
                <SheetHeader>
                  <SheetTitle className="sr-only">Navbar</SheetTitle>
                </SheetHeader>

                <div className="flex justify-between items-center mt-1.5 mb-7">
                  <Image
                    src={"/images/ToolSmith-dark.svg"}
                    width={120}
                    height={40}
                    alt="Logo"
                    className="block dark:hidden"
                  />
                  <Image
                    src={"/images/ToolSmith.svg"}
                    width={120}
                    height={40}
                    alt="Logo"
                    className="hidden dark:block"
                  />

                  <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </div>

                <span className="text-lg font-semibold">Categories</span>

                <div className="flex flex-col">
                  {docsConfig.categories.map((category, index) => (
                    <Link
                      key={index}
                      href={category.href}
                      className="mt-1 border-b-[2px] border-slate-500"
                    >
                      <SheetClose className="w-full text-left pl-2 py-2 flex items-center">
                        {category.title}
                        {category.components.map((component) => {
                          // Check if status exists and render accordingly
                          return (
                            <>
                              {component.status &&
                                component.status === "new" && (
                                  <span className="ml-2 text-xs bg-slate-500 text-white px-2 py-0.5 rounded-full">
                                    New
                                  </span>
                                )}
                              {component.status &&
                                component.status === "updated" && (
                                  <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
                                    Updated
                                  </span>
                                )}
                            </>
                          );
                        })}
                        <span className="sr-only">Close</span>
                      </SheetClose>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/" className="cursor-pointer">
              <Image
                src={"/images/ToolSmith-dark.svg"}
                width={120}
                height={40}
                alt="Logo"
                className="block dark:hidden"
              />
            </Link>
            <Link href="/" className="cursor-pointer">
              <Image
                src={"/images/ToolSmith.svg"}
                width={120}
                height={40}
                alt="Logo"
                className="hidden dark:block"
              />
            </Link>
          </div>
          <div className="flex  gap-2">
            <SearchBar />
            <ToggleDarkMode />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
