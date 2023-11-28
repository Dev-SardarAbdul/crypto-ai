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
    <div className="flex flex-col lg:flex-row justify-between items-center pb-4">
      <div>
        <Image src={logo} />
      </div>
      <div>
        <h1 className=" text-[#1E1F25] text-center  max-lg:text-[14px]  break-all">
          CA: 0xA187927C9185108458647AEEC193ef4A62d3bd80
        </h1>
      </div>
      <div className="flex justify-end gap-8 max-lg:mt-4 object-contain">
        <Image src={twitter} />
        <Image src={telegram} />
        <Image src={etherscan} />
        <Image src={dextool} />
        <Image src={uniswap} />
      </div>
    </div>
  );
};

export default Footer;
