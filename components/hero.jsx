import React from "react";
import Navbar from "./navbar";
import heroShape from "@/public/images/heroShape.png";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center flex-1">
        <div className="block lg:hidden">
          <Image src={heroShape} height={400} />
        </div>
        <h1 className="text-[#1E1F25] text-[40px] sm:text-[60px]  lg:text-[83px]  text-center lg:text-left w-full lg:w-[875px] uppercase leading-[91px] font-[500]">
          Lorem ipsum dolor sitLorem{" "}
          <span className="hero-span"> ipsum dolo..</span>
        </h1>
      </div>
    </div>
  );
}

export default Hero;
