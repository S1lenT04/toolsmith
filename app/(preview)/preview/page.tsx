"use client";

import BackButton from "@/components/elements/BackButton";
import Preview from "@/components/elements/component-preview";
import React from "react";
import { useSearchParams } from "next/navigation";

const PreviewPage: React.FC = () => {
  const searchParams = useSearchParams(); // Access query parameters
  const name = searchParams.get("name"); // Get the 'name' parameter from the URL

  if (!name) {
    return <p>Invalid component name</p>;
  }

  return (
    <>
      <BackButton />
      <div className="w-full h-dvh flex justify-center items-center bg-slate-100 dark:bg-[#243041]">
        <Preview name={name} />
      </div>
    </>
  );
};

export default PreviewPage;
