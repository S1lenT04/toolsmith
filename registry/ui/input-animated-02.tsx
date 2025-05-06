import React from "react";

const InputAnimated02 = () => {
  return (
    <div className="relative w-64">
      <input
        type="text"
        className="peer w-full px-3 pt-4 pb-2 border-b bg-transparent border-slate-500 focus:outline-none"
        placeholder=" "
        id="password2"
      />
      <label
        htmlFor="password2"
        className="absolute left-3 -top-2 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm cursor-text"
      >
        Input label
      </label>
    </div>
  );
};

export default InputAnimated02;
