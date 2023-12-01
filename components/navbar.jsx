import React from "react";
import navimg from "@/public/images/loaderBunny.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-[#D21EFF] h-[5.625rem] flex justify-center items-center dropshadow w-[99vw]">
      <div className="flex justify-center items-center">
        <Image src={navimg} alt="image" />
      </div>
    </div>
  );
};

export default Navbar;
