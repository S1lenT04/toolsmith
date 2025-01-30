export interface DocsConfig {
  categories: Category[];
}

export interface Category {
  title: string;
  href: string;
  status?: "new" | "updated";
  components: Component[];
}

export interface Component {
  title: string;
  name: string;
  filePath: string;
}

export const docsConfig: DocsConfig = {
  categories: [
    {
      title: "Button",
      href: "/docs/button",
      status: "updated",
      components: [
        {
          title: "Button",
          name: "button-01",
          filePath: "/registry/button-01.json",
        },
        {
          title: "Button Animated 1",
          name: "button-animated-01",
          filePath: "/registry/button-animated-01.json",
        },
        {
          title: "Button Animated 2",
          name: "button-animated-02",
          filePath: "/registry/button-animated-02.json",
        },
      ],
    },
    {
      title: "Form",
      href: "/docs/form",
      status: "new",
      components: [
        {
          title: "Form",
          name: "form-01",
          filePath: "/registry/form-01.json",
        },
      ],
    },
  ],
};
