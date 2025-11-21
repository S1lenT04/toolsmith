"use client";

import { useState } from "react";

const tabs = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="relative inline-flex bg-slate-100 dark:bg-[#243041] rounded-xl p-1 min-h-[40px] w-80">
      <div
        className="absolute inset-y-1 left-1 w-[48.7%] bg-slate-500 rounded-lg shadow transition-transform duration-300"
        style={{
          transform: `translateX(${active * 100}%)`,
        }}
      />

      <button
        onClick={() => setActive(0)}
        className={`relative z-10 w-1/2 text-sm font-medium transition duration-300 py-2 ${
          active === 0 ? "text-white dark:text-gray-900" : "text-gray-500"
        }`}
      >
        First Tab
      </button>

      <button
        onClick={() => setActive(1)}
        className={`relative z-10 w-1/2 text-sm font-medium transition duration-300 py-2 pl-2 ${
          active === 1 ? "text-white dark:text-gray-900" : "text-gray-500"
        }`}
      >
        Second Tab
      </button>
    </div>
  );
};

export default tabs;
