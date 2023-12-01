import Image from "next/image";
import React from "react";
import loaderBunny from "@/public/images/loaderBunny.png";
import dextools from "@/public/images/dextools.png";
import telegram from "@/public/images/telegram.png";
import twitter from "@/public/images/twitter.png";

function Footer() {
  return (
    <div className="flex flex-col lg:flex-row max-lg:gap-4 justify-between items-center py-8">
      <div className="flex justify-start gap-8">
        <Image src={dextools} alt="footer text" className="cursor-pointer" />
        <Image src={telegram} alt="footer text" className="cursor-pointer" />
        <Image src={twitter} alt="footer text" className="cursor-pointer" />
      </div>
      <h1 className="text-[25px] text-black text-center">
        © {new Date().getFullYear()} You Have Rights.... Right! haha...
      </h1>
      <Image src={loaderBunny} alt="footer text" />
    </div>
  );
}

export default Footer;
