"use client";
import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen px-12 w-full">
      <img src="/Logo.png" className="w-[224px] h-50px mb-[60px]" alt="" />
      <div className="mb-[60px]">
        <h1 className="text-lg font-semibold text-black mb-2 text-center">
          Kampungku
        </h1>
        <h2 className="text-xs font-medium text-neutural-60 text-center">
          Akses layanan lebih mudah dan cepat
        </h2>
      </div>
      <div className="relative w-full mb-6">
        <input
          type="text"
          className="px-4 py-3 rounded-full w-full text-neutural-90 placeholder-neutural-60 border border-neutural-40 bg-neutural-10 shadow-input"
          placeholder="Username"
        />
      </div>
      <div className="relative w-full mb-6">
        <input
          type={showPassword ? "text" : "password"}
          className="px-4 py-3 rounded-full w-full text-neutural-90 placeholder-neutural-60 border border-neutural-40 bg-neutural-10 shadow-input pr-10"
          placeholder="Password"
        />
        <div className="absolute top-4 right-4">
          <button onClick={togglePasswordVisibility}>
            {showPassword ? (
              <BiShow className="text-neutural-60 w-5 h-5" />
            ) : (
              <BiHide className="text-neutural-60 w-5 h-5" />
            )}
          </button>
        </div>
      </div>
      <div className="flex justify-start w-full">
      <label className="text-neutural-90 text-sm flex items-center gap-2 mb-[34px]"><input type="checkbox" className="w-[18px] h-[18px] border rounded-full" />Ingatkan saya</label>
      </div>
      <button className="bg-primary-main w-full rounded-[6px] py-2.5 text-white font-bold hover:bg-primary-hover transition-colors duration-300">Masuk</button>
    </div>
  );
}
