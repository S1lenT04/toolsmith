"use client";

import React, { useId, useRef, useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { X, Search as SearchIcon, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { docsConfig } from "@/config/DocsConfig";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const id = useId();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState<number>(-1);
  const router = useRouter();

  // Flatten components with category reference
  const items = useMemo(() => {
    const list: {
      title: string;
      name: string;
      href: string;
      category: string;
    }[] = [];
    docsConfig.categories.forEach((cat) => {
      cat.components.forEach((c) => {
        list.push({
          title: c.title,
          name: c.name,
          href: cat.href,
          category: cat.title,
        });
      });
    });
    return list;
  }, []);

  const matches = useMemo(() => {
    const q = inputValue.trim().toLowerCase();
    if (!q) return [];
    return items.filter((it) => it.title.toLowerCase().includes(q));
  }, [inputValue, items]);

  const handleClearInput = () => {
    setInputValue("");
    setHighlighted(-1);
    if (inputRef.current) inputRef.current.focus();
  };

  const navigateTo = (href: string, name?: string) => {
    const url = name ? `${href}?component=${encodeURIComponent(name)}` : href;
    setOpen(false);
    router.push(url);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlighted((h) => Math.min(h + 1, matches.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlighted((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlighted >= 0 && highlighted < matches.length) {
        const sel = matches[highlighted];
        navigateTo(sel.href, sel.name);
      } else if (matches.length === 1) {
        navigateTo(matches[0].href, matches[0].name);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="border-[2px] p-1.5 rounded-lg border-slate-500">
          <SearchIcon className="text-neutral-900 dark:text-white" />
        </DialogTrigger>
        <DialogContent className="border-none w-[min(700px,95%)]">
          <DialogTitle className="sr-only">Search components</DialogTitle>

          <div className="relative">
            <div className="rounded-lg bg-white dark:bg-gray-800 shadow-lg p-3">
              <div className="relative">
                <SearchIcon className="text-slate-500 absolute m-2" />

                <Input
                  id={id}
                  ref={inputRef}
                  className="pe-9 pl-10 bg-transparent"
                  placeholder="Search components by title..."
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setHighlighted(-1);
                  }}
                  onKeyDown={onKeyDown}
                  onFocus={() => setOpen(true)}
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                />
                {inputValue && (
                  <button
                    className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 transition-colors hover:text-foreground"
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

              {/* Results box */}
              <div className="mt-3 max-h-64 overflow-auto">
                <div className="flex flex-col gap-2">
                  {matches.length === 0 && inputValue ? (
                    <div className="text-sm text-muted-foreground px-2 py-2">
                      No results
                    </div>
                  ) : (
                    matches.map((m, i) => (
                      <div
                        key={`${m.href}-${m.name}`}
                        role="option"
                        aria-selected={highlighted === i}
                        onMouseEnter={() => setHighlighted(i)}
                        onMouseDown={(e) => e.preventDefault()} // prevent input blur
                        onClick={() => navigateTo(m.href, m.name)}
                        className={`cursor-pointer px-3 py-2 rounded-md flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 ${
                          highlighted === i
                            ? "bg-slate-50 dark:bg-slate-700"
                            : ""
                        }`}
                      >
                        <div className="flex-none w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-sm font-medium">
                          {m.title
                            .split(" ")
                            .map((s) => s[0])
                            .slice(0, 2)
                            .join("")}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{m.title}</div>
                          <div className="text-xs text-muted-foreground truncate">
                            {m.category}
                          </div>
                        </div>

                        <div className="flex-none text-muted-foreground">
                          <ChevronRight size={16} />
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="mt-2 text-xs text-muted-foreground flex justify-between">
                <div>
                  {matches.length} result{matches.length !== 1 ? "s" : ""}
                </div>
                <div className="text-right">Use ↑/↓ and Enter to open</div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
