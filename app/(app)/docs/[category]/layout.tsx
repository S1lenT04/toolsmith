"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { docsConfig } from "@/config/DocsConfig";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const params = useParams();
  // Ensure the category is a string
  const category = Array.isArray(params.category)
    ? params.category[0]
    : params.category;

  const capitalizeFirstLetter = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  // State for category title
  const [currentTitle, setCurrentTitle] = useState(
    category ? capitalizeFirstLetter(category) : "Category not found"
  );

  const handleTriggerClick = () => {
    setCurrentTitle((prevTitle) =>
      prevTitle === "Categories"
        ? capitalizeFirstLetter(category) || "Category not found"
        : "Categories"
    );
  };

  return (
    <>
      <section className="w-full px-4 mt-8">
        <section className="flex gap-4">
          <ScrollArea className="h-auto max-h-[500px] w-[350px] rounded-md bg-neutral-50 dark:bg-gray-800 p-4 sm:block hidden">
            <div className="w-full sticky top-0 bg-neutral-50 dark:bg-gray-800 pb-1">
              <span className="text-xl font-semibold">Categories</span>
            </div>
            <div className="w-full flex flex-col">
              {docsConfig.categories.map((category, index) => (
                <Link
                  key={index}
                  href={category.href}
                  className="pl-2 mt-1 border-b-[2px] border-slate-500 py-2 cursor-pointer w-full"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </ScrollArea>

          <div className="w-full">
            <div className="bg-neutral-50 dark:bg-gray-800 px-3 border-none rounded-md py-4 hidden sm:block">
              <span className="text-lg font-medium">{currentTitle}</span>
            </div>

            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="bg-neutral-50 dark:bg-gray-800 px-3 border-none rounded-md block sm:hidden"
              >
                <AccordionTrigger
                  className="text-lg font-medium"
                  onClick={handleTriggerClick} // Toggle title on click
                >
                  {currentTitle}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="w-full flex flex-col overflow-y-scroll max-h-[190px]">
                    {docsConfig.categories.map((category, index) => (
                      <Link
                        key={index}
                        href={category.href}
                        className="pl-2 mt-1 border-b-[2px] border-slate-500 py-2 cursor-pointer w-full"
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {children}
          </div>
        </section>
      </section>
    </>
  );
}
