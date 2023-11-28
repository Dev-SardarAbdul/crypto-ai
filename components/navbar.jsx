"use client";
import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import MobileDrawer from "./mobileDrawer";

function Navbar() {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <div className="py-6 flex justify-between items-center">
      <img className="cursor-pointer" src="/images/logo.png" />
      <div className="hidden lg:flex justify-start items-center gap-6 xl:gap-12">
        <p className="text-[#1E1F25] font-[500] uppercase cursor-pointer border-b-2 border-dashed border-[#1E1F25] pb-2">
          Home{" "}
        </p>
        <p className="text-[#1E1F25] font-[500] uppercase cursor-pointer border-b-2 border-dashed border-[#1E1F25] pb-2">
          How It Works
        </p>
        <p className="text-[#1E1F25] font-[500] uppercase cursor-pointer border-b-2 border-dashed border-[#1E1F25] pb-2">
          Token
        </p>
        <p className="text-[#1E1F25] font-[500] uppercase cursor-pointer border-b-2 border-dashed border-[#1E1F25] pb-2">
          Docs
        </p>
      </div>
      <div className="hidden lg:flex justify-end items-center gap-6 xl:gap-12">
        <FaXTwitter fontSize={32} color="#fff" className="cursor-pointer" />
      </div>

      <CgMenuGridO
        className="text-white text-[42px] block lg:hidden"
        onClick={toggleDrawer}
      />
      {showDrawer && (
        <MobileDrawer showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
      )}
    </div>
  );
}

export default Navbar;
