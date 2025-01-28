export interface DocsConfig {
  categories: Category[];
}

export interface Category {
  title: string;
  href: string;
  components: Component[];
}

export interface Component {
  title: string;
  name: string;
  filePath: string;
  status?: "new" | "updated";
}

export const docsConfig: DocsConfig = {
  categories: [
    {
      title: "Button",
      href: "/docs/button",
      components: [
        {
          title: "Button",
          name: "button-01",
          filePath: "/registry/button-01.json",
        },
      ],
    },
    {
      title: "Form",
      href: "/docs/form",
      components: [
        {
          title: "Form",
          name: "form-01",
          filePath: "/registry/form-01.json",
          status: "new",
        },
      ],
    },
  ],
};
