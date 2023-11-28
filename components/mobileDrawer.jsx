"use client";
import React, { useRef, useEffect } from "react";
import { GiCrossedBones } from "react-icons/gi";
import { FaSquareFull } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

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
      className={`h-screen lg:hidden flex flex-col w-[300px] fixed overflow-x-hidden overflow-y-auto top-0 -right-5 z-[999] bg-white border-l border-black pr-12 pt-6 pb-12 pl-6 `}
      ref={containerRef}
    >
      <GiCrossedBones
        className="text-black text-[24px] cursor-pointer"
        onClick={toggleDrawer}
      />

      <div className="flex flex-col justify-start items-end gap-4 flex-1 mt-6 ">
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

      <div className="flex flex-row flex-wrap justify-center items-center gap-6 ">
        <button className="text-[#1E1F25] text-[500] flex justify-center items-center gap-2">
          Launch App <FiArrowUpRight className="text-[20px]" />
        </button>{" "}
      </div>
    </div>
  );
}

export default MobileDrawer;
