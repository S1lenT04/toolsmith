"use client";

import React from "react";
import { components } from "@/__registry__";
import CopyBtn from "./CopyBtn";

interface CardProps {
  name: string;
}

const CardComp: React.FC<CardProps> = ({ name }) => {
  const componentEntry =
    name in components
      ? components[name as keyof typeof components]
      : undefined;
  const componentCode = componentEntry?.files[0]?.content;

  return (
    <>
      <div>
        {componentCode || "Code not available"}

        <div className="absolute top-3 right-3">
          <CopyBtn code={componentCode} />
        </div>
      </div>
    </>
  );
};

export default CardComp;
