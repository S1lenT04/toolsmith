"use client";

import React from "react";
import { docsConfig } from "@/config/DocsConfig";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <>
      <section className="w-full h-auto">
        <div className="w-full h-auto flex gap-4 pt-4 px-4">
          <div className="w-80 sticky top-20 h-full md:block hidden">
            <div className="flex flex-col gap-2 mb-10">
              <span className="font-semibold">Getting Started</span>
              <span className="dark:text-stone-200 text-sm dark:hover:text-slate-400 cursor-not-allowed">
                Introduction
              </span>
            </div>

            {/* Components Section */}
            <span className="font-semibold">Components</span>

            {/* Dynamic Categories */}
            <div className="mb-8">
              <div className="flex flex-col gap-2 mt-2">
                {docsConfig.categories
                  .slice()
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className={`text-sm dark:hover:text-slate-400 flex items-center ${
                        pathname === category.href
                          ? "dark:text-slate-400 text-slate-400"
                          : ""
                      }`}
                    >
                      {category.title}
                      {(category.status === "new" ||
                        category.status === "updated") && (
                        <div className="ml-2 text-xs bg-slate-500 text-white p-1 mt-0.5 rounded-full"></div>
                      )}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          <div className="max-w-6xl w-full mx-auto">{children}</div>
        </div>
      </section>
    </>
  );
}
