import Card from "@/components/elements/Card";
import { docsConfig } from "@/config/DocsConfig";

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
  const { components } = selectedCategory;

  return (
    <>
      <section className="w-full mt-4">
        {/* Show fallback message if no components are available */}
        {!components || components.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-10">
            <img
              src="/images/ToolSmith-notfound.svg"
              alt="No components found"
              className="dark:hidden"
            />
            <img
              src="/images/ToolSmith-notfound-dark.svg"
              alt="No components found"
              className="hidden dark:block"
            />
            <p className="text-2xl font-bold mt-4">No components available</p>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-center">
              Please try another category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {components.map((component, index) => (
              <Card
                key={index}
                title={component.title}
                name={component.name}
                filePath={component.filePath}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default CategoryPage;
