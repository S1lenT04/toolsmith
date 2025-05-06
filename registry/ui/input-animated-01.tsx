import React from "react";

const InputAnimated01 = () => {
  return (
    <div className="relative w-64">
      <input
        type="text"
        id="password1"
        className="peer w-full px-3 pt-4 pb-2 border bg-transparent border-slate-500 rounded-lg focus:outline-none"
        placeholder=" "
      />
      <label
        htmlFor="password1"
        className="absolute bg-slate-50 dark:bg-gray-800 left-3 px-1 -top-2 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm cursor-text"
      >
        Input label
      </label>
    </div>
  );
};

export default InputAnimated01;
