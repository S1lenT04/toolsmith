import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "button-01",
    type: "registry:ui",
    files: ["ui/button-01.tsx"],
  },
  {
    name: "form-01",
    type: "registry:ui",
    dependencies: ["lucide-react"],
    files: ["ui/form-01.tsx"],
  },
];
