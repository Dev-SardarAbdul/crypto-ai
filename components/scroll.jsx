import React from "react";
import scrollimg from "@/public/images/scroolimg.png";
import scrollicon from "@/public/images/scrollicon2.png";
import moonicon from "@/public/images/moonicon.png";
import duckicon from "@/public/images/duckicon.png";
import rainicon from "@/public/images/rainicon.png";
import ufoicon from "@/public/images/ufoicon.png";
import pizzaicon from "@/public/images/pizzaicon.png";
import springicon from "@/public/images/springicon.png";
import footicon from "@/public/images/footicon.png";
import testimg from "@/public/images/test.png";

import Image from "next/image";
const Scroll = () => {
  return (
    <div className="pb-[4rem] overflow-x-hidden gradient">
      <h1 className="text-[#000] text-[3.9375rem] text-center max-md:text-[1.5rem]">
        Embark on a Hilarious Odyssey
      </h1>
      <div className="flex gap-[1.5rem] justify-center items-center">
        <h5 className="text-[#000] text-[1.875rem] text-center max-md:text-[1.5rem]">
          Where Laughter Leads and Seriousness Fears to Tread!
        </h5>
        <Image
          alt="image"
          src={scrollicon}
          className="mt-[4rem] max-md:hidden"
        />
      </div>

      <div className="relative max-lg:hidden">
        <div className="mt-[1rem]">
          <Image alt="image" src={scrollimg} />
        </div>
        <div>
          <div className="absolute top-[3%] right-[21%] flex flex-col justify-center items-center">
            <Image alt="image" src={moonicon} />
            <h5 className="text-[#000] text-[2.625rem]">Hush... 🌙💤</h5>
          </div>
          <div className="absolute top-[14%] left-[20%]">
            <h5 className="text-[#000] text-[4.5rem]">Scroll a bit more</h5>
          </div>
          <div className="absolute top-[25%] right-[10%] flex flex-col justify-center items-center">
            <Image alt="image" src={duckicon} />
            <h5 className="text-[#000] text-[4.5rem]">Quack quack! 🦆</h5>
          </div>
          <div className="absolute top-[38.5%] left-[20%]">
            <h5 className="text-[#000] text-[4.5rem]">Scroll a bit more</h5>
          </div>
          <div className="absolute top-[49%] right-[10%] flex flex-col justify-center items-center">
            <Image alt="image" src={rainicon} />
            <h5 className="text-[#000] text-[2.625rem]">
              Pitter-patter... 💧💦🌧️
            </h5>
          </div>
          <div className="absolute top-[63%] left-[20%]">
            <h5 className="text-[#000] text-[4.5rem]">Almost there!</h5>
          </div>
          <div className="absolute top-[74%] right-[10%] flex flex-col justify-center items-center">
            <Image alt="image" src={ufoicon} />
            <h5 className="text-[#000] text-[2.625rem]">
              Wheeeeeeeeeeeeeeoooooooohhhh!😄
            </h5>
          </div>
          <div className="absolute top-[87%] left-[20%]">
            <h5 className="text-[#000] text-[4.5rem]">Almost there!</h5>
          </div>
          <div className="absolute top-[94%] right-[20%] flex flex-col justify-center items-center">
            <Image alt="image" src={pizzaicon} />
            <h5 className="text-[#000] text-[2.625rem]">Mmmmmmm... 😋</h5>
          </div>
        </div>
      </div>
      <div className="hidden max-lg:visible max-lg:flex max-lg:justify-center max-lg:items-center max-lg:mt-[2rem]">
        <Image alt="image" src={testimg} />
      </div>
      <div className="lg:px-[18rem] max-lg:mt-[2rem] mt-[6rem]">
        <Image alt="image" src={footicon} />
        <h5 className="text-[#000] text-[2.5rem] text-center font-[400] max-lg:text-[2rem]">
          Lorem ipsum dolor sit amet consectetur. Suspendisse nunc quam tortor
          senectus rhoncus amet. Id turpis turpis ultrices rhoncus eu eu. In
          congue neque aliquam sed orci tortor facilisis aliquam. Sagittis cras
          sagittis lectus nunc vitae bibendum malesuada habitasse gravida.
        </h5>
        <div className="flex justify-end">
          <Image alt="image" src={springicon} className="mr-[8rem]" />
        </div>
      </div>
    </div>
  );
};

export default Scroll;
