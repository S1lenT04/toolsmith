"use client";

import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useId, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";

export default function SearchBar() {
  const id = useId();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearInput = () => {
    setInputValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger className="border-[2px] p-1.5 rounded-lg border-slate-500">
          <Search className="text-neutral-900 dark:text-white" />
        </DialogTrigger>
        <DialogContent className="top-[8%] border-none">
          <DialogTitle className="sr-only">
            Are you absolutely sure?
          </DialogTitle>

          <div className="relative">
            <Search className="text-slate-500 absolute m-2" />

            <Input
              id={id}
              ref={inputRef}
              className="pe-9 pl-10 bg-neutral-50 dark:bg-gray-800"
              placeholder="Search here..."
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {inputValue && (
              <button
                className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-0 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-0 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Clear input"
                onClick={handleClearInput}
              >
                <X
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="text-slate-500"
                />
              </button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
