import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { ToggleDarkMode } from "./ToggleDarkMode";
import SearchBar from "./Search";
import { docsConfig } from "@/config/DocsConfig";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="py-3 px-4 bg-neutral-50 dark:bg-gray-800 shadow-lg flex justify-center items-center w-full sticky top-0">
        <div className="flex justify-between items-center max-w-[1584px] w-full">
          <div className="flex gap-1">
            <Sheet>
              <SheetTrigger>
                <Menu
                  width={30}
                  height={30}
                  className="text-neutral-900 dark:text-white sm:hidden"
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
                      className="pl-2 mt-1 border-b-[2px] border-slate-500 py-2"
                    >
                      {category.title}
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
