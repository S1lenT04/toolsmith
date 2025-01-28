import { docsConfig } from "@/config/DocsConfig";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import CopyBtn from "@/components/elements/CopyBtn";
import { ScrollArea } from "@/components/ui/scroll-area";
import CardComp from "@/components/elements/Card";
import Preview from "@/components/elements/component-preview";
import FullScreenPreview from "@/components/elements/FullScreenPreview";

interface Props {
  params: { category: string };
}

const CategoryPage = ({ params }: Props) => {
  const { category } = params;

  // Find the selected category
  const selectedCategory = docsConfig.categories.find(
    (cat) => cat.href === `/docs/${category}`
  );

  // If category is not found, show a 404 page
  if (!selectedCategory) {
    return (
      <div className="flex flex-col items-center justify-center mt-10">
        <img
          src="/images/ToolSmith-notfound.svg"
          alt="No components found"
          className="dark:hidden w-36"
        />
        <img
          src="/images/ToolSmith-notfound-dark.svg"
          alt="No components found"
          className="hidden dark:block w-36"
        />
        <p className="text-2xl font-bold">No components available</p>
        <p className="text-gray-600 dark:text-gray-400 mt-2 text-center">
          Please try another category.
        </p>
      </div>
    );
  }

  // Destructure components from the selected category
  const { title, components } = selectedCategory;

  return (
    <>
      <div className="w-full h-auto">
        <div className="mb-2">
          <div className="mb-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="dark:text-stone-200 text-stone-600">
                    Components
                  </BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="dark:font-medium">
                    {title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <span className="font-bold text-3xl">{title}</span>
          {/* <p className="dark:text-stone-200 mt-2">
            A responsive navigation bar with various styles and dropdown
            support.
          </p> */}
        </div>

        <section className="space-y-8">
          {components.map((component, index) => {
            const prompt = `npx shadcn@latest add https://toolsmith.vercel.app${component.filePath}`;

            return (
              <div key={index}>
                {/* Component Header */}
                {index !== 0 && (
                  <div className="mb-4">
                    <span className="text-xl font-bold">{component.title}</span>
                  </div>
                )}
                {/* Tabs for Preview and Code */}
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList className="w-full justify-start relative">
                    <div className="flex z-10">
                      <TabsTrigger value="preview">Preview</TabsTrigger>
                      <TabsTrigger value="code">Code</TabsTrigger>
                    </div>
                    <div className="absolute w-full dark:bg-white/20 bg-stone-300 h-[1px] bottom-[2.5px] z-0"></div>
                  </TabsList>
                  <TabsContent value="preview" className="mt-5">
                    <Card className="relative">
                      <CardContent className="pt-6 w-full relative flex items-center justify-center lg:p-6 p-2">
                        <Preview name={component.name} />
                        <FullScreenPreview name={component.name} />
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="code" className="mt-5">
                    <Card className="relative">
                      <ScrollArea className="h-56 sm:h-96 max-h-96 rounded-md relative p-2 overflow-x-auto overflow-y-auto">
                        <pre className="whitespace-pre-wrap break-words text-xs md:text-base">
                          <CardComp name={component.name} />
                        </pre>
                      </ScrollArea>
                    </Card>
                  </TabsContent>
                </Tabs>

                <section className="mt-5">
                  <span className="text-lg">Installation</span>

                  <div className="w-full bg-neutral-50 dark:bg-gray-800 px-4 py-2 rounded-md relative mt-2 border border-slate-500">
                    <span className="text-sm border-b-2 py-1 px-1 border-slate-500 sm:text-base">
                      npm
                    </span>

                    <p className="mt-4 mb-3 sm:text-base text-xs">{prompt}</p>

                    <div className="absolute right-2 top-2 flex gap-2">
                      <CopyBtn code={prompt} />
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default CategoryPage;
