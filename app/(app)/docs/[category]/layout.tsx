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
          <div className="w-80 sticky top-20 h-full">
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
                {docsConfig.categories.map((category, index) => (
                  <Link
                    key={index}
                    href={category.href}
                    className={`dark:text-stone-200 text-sm dark:hover:text-slate-400 flex items-center ${
                      pathname === category.href
                        ? "dark:text-slate-400 text-slate-400"
                        : ""
                    }`}
                  >
                    {category.title}
                    {category.components.map((component) => {
                      // Check if status exists and render accordingly
                      return (
                        <>
                          {component.status && component.status === "new" && (
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
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full">{children}</div>
        </div>
      </section>
    </>
  );
}
