"use client";
import React, { useRef, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";

function MobileDrawer({ toggleDrawer, showDrawer }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showDrawer &&
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        toggleDrawer();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDrawer, toggleDrawer]);
  return (
    <div
      className={`h-screen lg:hidden flex flex-col w-[300px] fixed overflow-x-hidden overflow-y-auto top-0 -right-5 z-[999] bg-black border-l border-white pr-12 pt-6 pb-12 pl-6 `}
      ref={containerRef}
    >
      <GiCrossedBones
        className="text-[#fff] text-[24px] cursor-pointer"
        onClick={toggleDrawer}
      />

      <div className="flex flex-col justify-start items-end gap-4 flex-1 mt-6 ">
        <p className="text-white font-[700] uppercase cursor-pointer border-b pb-3">
          Tokenomics
        </p>
        <p className="text-white font-[700] uppercase cursor-pointer border-b pb-3">
          Roadmap
        </p>
        <p className="text-white font-[700] uppercase cursor-pointer border-b pb-3">
          Contact Us
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center gap-6 ">
        <FaXTwitter fontSize={32} color="#fff" className="cursor-pointer" />
      </div>
    </div>
  );
}

export default MobileDrawer;
