import React from "react";
import logo from "@/public/images/logo.png";
import twitter from "@/public/images/twitter.png";
import telegram from "@/public/images/telegram.png";
import etherscan from "@/public/images/etherscan.png";
import dextool from "@/public/images/dextool.png";
import uniswap from "@/public/images/uniswap.png";

import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center pb-4">
        <div>
          <Image src={logo} />
        </div>
        <div>
          <h1 className=" text-[#1E1F25] text-center max-lg:text-[14px]  break-all lg:ml-[10rem]">
            CA: 0xA187927C9185108458647AEEC193ef4A62d3bd80
          </h1>
        </div>
        <div className="flex justify-end gap-7 max-lg:mt-4  ">
          <Image src={uniswap} className="w-[1.88331rem] h-[2.15231rem]" />
          <Image src={twitter} className="w-[2.0815rem] h-[1.93794rem]" />
          <Image src={dextool} className="w-[1.88688rem] h-[1.88688rem]" />
          <Image src={telegram} className="w-[2.07919rem] h-[1.97344rem]" />
          <Image src={etherscan} className="w-[1.88688rem] h-[1.88688rem]" />
        </div>
      </div>
      <p className="text-[#1E1F25] text-[0.9375rem] font-normal italic text-center pb-[1rem]">
        © {new Date().getFullYear()} - All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
