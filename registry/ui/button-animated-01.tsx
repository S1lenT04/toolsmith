import { ChevronRight } from "lucide-react";
import React from "react";

const Button = () => {
  return (
    <>
      <button className="flex items-center group">
        <span className="font-semibold">Click</span>
        <div className="flex items-center ml-4 relative">
          <div className="bg-primary w-5 h-[2px] rounded-full transition-all duration-300 ease-in-out group-hover:w-7"></div>
          <ChevronRight className="text-primary absolute -right-2 transition-all duration-300 ease-in-out group-hover:-right-[10px]" />
        </div>
      </button>
    </>
  );
};

export default Button;
