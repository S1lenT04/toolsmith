import BackButton from "@/components/elements/BackButton";
import Preview from "@/components/elements/component-preview";
import React from "react";

const PreviewPage = ({ params }: { params: { name: string } }) => {
  const { name } = params;

  return (
    <>
      <BackButton />
      <div className="w-full min-h-dvh flex justify-center items-center bg-slate-100 dark:bg-gray-800">
        <Preview name={name} />
      </div>
    </>
  );
};

export default PreviewPage;
