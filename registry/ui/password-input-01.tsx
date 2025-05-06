"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput01 = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-64 flex items-center">
      <input
        type={showPassword ? "text" : "password"}
        className="bg-transparent py-2 px-3 border border-slate-500 rounded-lg outline-none pr-11 w-full"
        placeholder="Password"
      />
      <button
        type="button"
        className="absolute right-3 cursor-pointer text-gray-500"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff /> : <Eye />}
      </button>
    </div>
  );
};

export default PasswordInput01;
