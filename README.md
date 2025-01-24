# Creating a new component/category

For creating a new component you have to create some files, here's where u should work on for the files:

## Instructions

1. First of all go into (`@/config/DocsConfig.tsx`), here you can create new `Category` and `Component` that will be used in the SideBar and to display the respective `Components`.
2. Now creating the `Component` literally you have to go inside (`@/registry/ui/nameOfTheNewComponent.tsx`) and after creating it, go to (`@/registry/registry-components.ts`) and update the code so user could use the `prompt command` to import into his project.
3. After doing the last 2 steps you can now `run the command below to create the .json file` so the prompt command work as expected.

```bash
npx tsx ./scripts/build-registry.ts
```

4. Now to finish the process of creating a new component/category just go to (`@/__registry__/index.ts`) and create the component data, just copy paste the above component and change the basic stuff. For the content just copy from `.json` file created early.

## The website

Here is the website, [ToolSmith](https://toolsmith.vercel.app/)
