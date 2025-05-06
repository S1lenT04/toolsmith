import React from "react";

const Input01 = () => {
  return (
    <div className="flex flex-col gap-2 w-64">
      <label className="ml-1.5">Input label</label>
      <input
        type="text"
        className="bg-transparent py-2 px-3 border border-slate-500 rounded-lg outline-none"
      />
    </div>
  );
};

export default Input01;
