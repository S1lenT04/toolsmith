import React from "react";
import { Button } from "../ui/button";
import { Fullscreen } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface FullscreenButtonProps {
  name: string;
}

const FullScreenPreview: React.FC<FullscreenButtonProps> = ({ name }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href={`/preview/${name}`}>
            <Button
              variant="outline"
              size="icon"
              className="disabled:opacity-100 bg-neutral-50 dark:bg-gray-800 border-slate-500"
            >
              <Fullscreen size={16} strokeWidth={2} aria-hidden="true" />
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent className="px-2 py-1 text-xs">
          Fullscreen
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default FullScreenPreview;
