import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "button-01",
    type: "registry:ui",
    files: ["ui/button-01.tsx"],
  },
  {
    name: "button-animated-01",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui/button-animated-01.tsx"],
  },
  {
    name: "button-animated-02",
    type: "registry:ui",
    files: ["ui/button-animated-02.tsx"],
  },
  {
    name: "form-01",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui/form-01.tsx"],
  },
  {
    name: "input-01",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui/input-01.tsx"],
  },
  {
    name: "input-animated-01",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui/input-animated-01.tsx"],
  },
  {
    name: "input-animated-02",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui/input-animated-02.tsx"],
  },
  {
    name: "password-input-01",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui/password-input-01.tsx"],
  },
  {
    name: "changelog",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui/changelog.tsx"],
  },
  {
    name: "tabs",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui/tabs.tsx"],
  },
];
