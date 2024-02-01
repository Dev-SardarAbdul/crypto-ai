import Image from "next/image";
import React from "react";
import navLogo from "@/public/images/navLogo.png";
import buttonBG from "@/public/images/buttonBG.png";
import Link from "next/link";

function Navbar() {
  return (
    <div className="border-b-2 border-[#101424]">
      <div className="flex items-center justify-between gap-4 py-6 main-container">
        <Link href={"/"}>
          <Image
            draggable={false}
            src={navLogo}
            alt="Navbar logo"
            className="cursor-pointer select-none"
          />
        </Link>
        <button className="relative w-32 h-10">
          <Image
            draggable={false}
            src={buttonBG}
            alt="button bg"
            className="absolute top-0 left-0 w-full h-full select-none"
          />
          <span className="absolute w-full text-base font-medium text-white -translate-x-1/2 -translate-y-1/2 select-none top-1/2 left-1/2">
            Launch App
          </span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
