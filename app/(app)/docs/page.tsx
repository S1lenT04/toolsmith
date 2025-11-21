import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { docsConfig } from "@/config/DocsConfig";
import Link from "next/link";
import React from "react";

const DocsPage = () => {
  return (
    <>
      <section className="w-full h-auto">
        <div className="mb-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="dark:text-zinc-400 text-stone-600">
                  Components
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <h1 className="font-bold text-3xl">Components</h1>
        <p className="mt-2 text-sm sm:text-base">
          Here you can find all the components available in the library. We are
          working on adding more components.
        </p>
        <div className="grid lg:grid-cols-[200px_200px_200px] sm:grid-cols-[200px_200px] grid-cols-1 gap-x-10 mt-6 gap-y-2">
          {docsConfig.categories
            .slice()
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="mt-1 hover:underline underline-offset-4 flex items-center"
              >
                {category.title}
                {(category.status === "new" ||
                  category.status === "updated") && (
                  <div className="ml-2 text-xs bg-slate-500 text-white p-1 mt-0.5 rounded-full"></div>
                )}
              </Link>
            ))}
        </div>
      </section>
    </>
  );
};

export default DocsPage;
