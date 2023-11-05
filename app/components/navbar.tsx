import React from "react";
import {
  HiHome,
  HiOutlineChartBarSquare,
  HiUser,
  HiBell,
} from "react-icons/hi2";

const Navbar = () => {
  return (
    <div>
      <div className="w-full py-4 flex justify-center gap-16 rounded-t-[20px] shadow-menu">
        <a
          href="/"
          className="flex flex-col text-[10px] text-neutural-6 justify-center items-center"
        >
          <HiHome className="w-6 h-6" />
          Beranda
        </a>
        <a
          href="/"
          className="flex flex-col text-[10px] text-neutural-6 justify-center items-center"
        >
          <HiOutlineChartBarSquare className="w-6 h-6" />
          Keuangan
        </a>
        <a
          href="/"
          className="flex flex-col text-[10px] text-neutural-6 justify-center items-center"
        >
          <HiBell className="w-6 h-6" />
          Notifikasi
        </a>
        <a
          href="/"
          className="flex flex-col text-[10px] text-neutural-6 justify-center items-center"
        >
          <HiUser className="w-6 h-6" />
          Profile
        </a>
      </div>
    </div>
  );
};

export default Navbar;
