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
      components: [
        {
          title: "Form",
          name: "form-01",
          filePath: "/registry/form-01.json",
        },
      ],
    },
    {
      title: "Input",
      href: "/docs/input",
      status: "new",
      components: [
        {
          title: "Input",
          name: "input-01",
          filePath: "/registry/input-01.json",
        },
        {
          title: "Input Animated 1",
          name: "input-animated-01",
          filePath: "/registry/input-animated-01.json",
        },
        {
          title: "Input Animated 2",
          name: "input-animated-02",
          filePath: "/registry/input-animated-02.json",
        },
        {
          title: "Password Input w/Eye",
          name: "password-input-01",
          filePath: "/registry/password-input-01.json",
        },
      ],
    },
  ],
};
