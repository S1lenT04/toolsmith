"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import CopyBtn from "./CopyBtn";
import { components } from "@/__registry__";
import Preview from "./component-preview";
import { ScrollArea } from "../ui/scroll-area";
import FullScreenPreview from "./FullScreenPreview";

interface CardProps {
  title: string;
  name: string;
  filePath?: string;
}

const Card: React.FC<CardProps> = ({ title, name, filePath }) => {
  const [step, setStep] = useState(1);
  const componentEntry =
    name in components
      ? components[name as keyof typeof components]
      : undefined;
  const componentCode = componentEntry?.files[0]?.content;

  const prompt = `npx shadcn@latest add https://toolsmith.vercel.app${filePath}`;

  return (
    <Dialog>
      <div className="grid grid-cols-1 gap-4">
        <DialogTrigger>
          <div className="w-full bg-neutral-50 dark:bg-gray-800 p-4 rounded-md cursor-pointer">
            <div className="bg-slate-100 dark:bg-[#243041] py-12 flex justify-center rounded-lg">
              <Image
                src={"/images/ToolSmith-icon.svg"}
                width={60}
                height={60}
                alt="Component Icon"
              />
            </div>

            <p className="mt-3 text-lg font-semibold text-left">{title}</p>
          </div>
        </DialogTrigger>
      </div>

      <DialogContent className="max-w-[90%] xl:max-w-6xl bg-slate-100 dark:bg-[#243041] p-3 sm:p-5 border-none">
        <div className="flex justify-between items-center mt-1">
          <DialogTitle>{title}</DialogTitle>

          <DialogClose>
            <X width={18} height={18} />
          </DialogClose>
        </div>

        <section>
          <section className="w-full mt-2 mb-5">
            <div className="bg-neutral-50 dark:bg-gray-800 p-1.5 rounded-md w-full">
              <button
                className={`py-2 px-4 w-1/2 rounded-sm text-sm ${
                  step === 1
                    ? "bg-slate-100 dark:bg-[#243041]"
                    : "bg-neutral-50 dark:bg-gray-800"
                }`}
                onClick={() => setStep(1)}
              >
                Preview
              </button>
              <button
                className={`py-2 px-4 w-1/2 rounded-sm text-sm ${
                  step === 2
                    ? "bg-slate-100 dark:bg-[#243041]"
                    : "bg-neutral-50 dark:bg-gray-800"
                }`}
                onClick={() => setStep(2)}
              >
                Code
              </button>
            </div>
          </section>

          <section className="flex flex-col gap-2">
            <span className="text-lg">{step === 1 ? "Preview" : "Code"}</span>

            <ScrollArea className="w-full bg-neutral-50 dark:bg-gray-800 h-56 sm:h-96 rounded-md relative border border-slate-500 p-2">
              {step === 1 && (
                <div className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
                  <Preview name={name} />
                </div>
              )}
              {step === 2 && (
                <pre className="text-xs text-left whitespace-pre-wrap overflow-auto">
                  {componentCode || "Code not available"}
                </pre>
              )}

              <div className="absolute right-2 top-2 flex gap-2">
                <FullScreenPreview name={name} />
                <CopyBtn code={componentCode} />
              </div>
            </ScrollArea>
          </section>

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
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default Card;

{
  /* Not found component */
}
{
  /* <div className="w-full flex flex-col">
        <Image
          src={"/images/ToolSmith-notfound.svg"}
          width={140}
          height={40}
          alt="Logo"
          className="block dark:hidden mx-auto"
        />
        <Image
          src={"/images/ToolSmith-notfound-dark.svg"}
          width={140}
          height={40}
          alt="Logo"
          className="hidden dark:block mx-auto"
        />

        <div className="w-full">
          <p className="text-2xl text-center font-bold mb-1">
            Component not found
          </p>
          <p className="text-center text-sm">
            No components available. Please try another search.
          </p>
        </div>
      </div> */
}
