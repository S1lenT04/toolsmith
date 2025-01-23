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
}

export const docsConfig: DocsConfig = {
  categories: [
    {
      title: "Button",
      href: "/docs/button",
      components: [
        {
          title: "Button 01",
          name: "button-01",
          filePath: "/registry/ui/button-01.json",
        },
      ],
    },
    {
      title: "Navbar",
      href: "/docs/navbar",
      components: [
        {
          title: "Navbar 01",
          name: "navbar-01",
          filePath: "/registry/ui/navbar-01.json",
        },
      ],
    },
  ],
};
