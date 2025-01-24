"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <div className="flex items-center absolute top-0 left-0 p-3">
      <button onClick={() => router.back()} className="flex gap-1">
        <ChevronLeft />
        <span>back</span>
      </button>
    </div>
  );
};

export default BackButton;
