import React, { Suspense } from "react";
import { components } from "@/__registry__";

interface PreviewProps {
  name: string;
}

const Preview: React.FC<PreviewProps> = ({ name }) => {
  const componentEntry =
    name in components
      ? components[name as keyof typeof components]
      : undefined;
  const ComponentToRender = componentEntry?.component;

  return (
    <>
      <Suspense fallback={<p>Loading preview...</p>}>
        {ComponentToRender ? <ComponentToRender /> : <p>Component not found</p>}
      </Suspense>
    </>
  );
};

export default Preview;
