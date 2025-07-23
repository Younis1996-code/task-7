"use client";

import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const PassInput = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="relative w-full">
      <input
        className="py-3.5 px-6 border border-[#33333333] rounded-lg text-base/[100%] font-normal text-[#333333]/50 w-full focus:outline-none"
        type={showPass ? "text" : "password"}
        id="password"
        name="password"
        placeholder="Enter your password"
      />
      <div
        className="absolute top-1/2 right-3.5 transform -translate-y-1/2 cursor-pointer"
        onClick={() => setShowPass(!showPass)}
      >
        {showPass ? (
          <IoEye className="text-base/[100%] font-normal text-[#333333]/50" />
        ) : (
          <IoEyeOff className="text-base/[100%] font-normal text-[#333333]/50" />
        )}
      </div>
    </div>
  );
};

export default PassInput;
