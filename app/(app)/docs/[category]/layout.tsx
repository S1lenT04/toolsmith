import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { docsConfig } from "@/config/DocsConfig";
import Link from "next/link";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
                  className="pl-2 mt-1 border-b-[2px] border-slate-500 py-2 cursor-pointer"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </ScrollArea>

          <div className="w-full">
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="bg-neutral-50 dark:bg-gray-800 px-3 border-none rounded-md"
              >
                <AccordionTrigger className="text-lg font-medium">
                  Navbar
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mt-1 ml-2">
                    <span className="font-medium text-lg">Filter</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4 ml-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="React" />
                      <Label htmlFor="React" className="cursor-pointer">
                        React
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="Tailwind" />
                      <Label htmlFor="Tailwind" className="cursor-pointer">
                        Tailwind css
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="shadcn" />
                      <Label htmlFor="shadcn" className="cursor-pointer">
                        shadcn/ui
                      </Label>
                    </div>
                  </div>
                  <div className="flex justify-end mt-6">
                    <button className="px-5 py-1.5 bg-slate-500 rounded-md text-white hover:">
                      Apply
                    </button>
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
