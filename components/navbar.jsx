"use client";
import React, { useState } from "react";
import MobileDrawer from "./mobileDrawer";
import { FaSquareFull } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { RiMenu4Fill } from "react-icons/ri";

function Navbar() {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <div className="py-6 flex justify-between items-center">
      <img className="cursor-pointer" src="/images/logo.png" />
      <div className="hidden lg:flex justify-start items-center gap-6 xl:gap-12">
        <p className="text-[#1E1F25] opacity-60 flex justify-between items-center gap-8 font-[500] uppercase cursor-pointer border-b-2 border-dashed border-[#1E1F25] pb-2">
          Home{" "}
          <FaSquareFull className="opacity-40 text-[#1E1F25] text-[12px]" />
        </p>
        <p className="text-[#1E1F25] opacity-60 flex justify-between items-center gap-8 font-[500] uppercase cursor-pointer border-b-2 border-dashed border-[#1E1F25] pb-2">
          How It Works{" "}
          <FaSquareFull className="opacity-40 text-[#1E1F25] text-[12px]" />
        </p>
        <p className="text-[#1E1F25] opacity-60 flex justify-between items-center gap-8 font-[500] uppercase cursor-pointer border-b-2 border-dashed border-[#1E1F25] pb-2">
          Token{" "}
          <FaSquareFull className="opacity-40 text-[#1E1F25] text-[12px]" />
        </p>
        <p className="text-[#1E1F25] opacity-60 flex justify-between items-center gap-8 font-[500] uppercase cursor-pointer border-b-2 border-dashed border-[#1E1F25] pb-2">
          Docs{" "}
          <FaSquareFull className="opacity-40 text-[#1E1F25] text-[12px]" />
        </p>
      </div>
      <div className="hidden lg:block">
        <button className="text-[#1E1F25] text-[500] flex justify-center items-center gap-2">
          Launch App <FiArrowUpRight className="text-[20px]" />
        </button>
      </div>

      <RiMenu4Fill
        className="text-black text-[42px] block lg:hidden"
        onClick={toggleDrawer}
      />
      {showDrawer && (
        <MobileDrawer showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
      )}
    </div>
  );
}

export default Navbar;
