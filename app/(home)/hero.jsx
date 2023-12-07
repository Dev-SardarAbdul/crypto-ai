"use client";
import Timer from "@/components/timer";

import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="lg:flex  items-center mt-[4.5rem] gap-[1rem] max-lg:mt-[2rem]">
          <div className="lg:w-1/2">
            <h2 className="my-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-[#f3f4f6]">
              Create a book about
              <br />
              <p className="text-pink-500 max-lg:text-center">your Baby</p>
            </h2>
            <h1 className="text-2xl  font-bold tracking-tight sm:text-3xl md:text-4xl text-primaryGreen py-2 text-[#31b14e] max-lg:text-center">
              <span className="relative px-3 bg-white rounded-lg">
                <span className="absolute -left-3 -top-5 rotate-[-20deg] text-3xl">
                  <font>
                    <font>🔥</font>
                  </font>
                </span>
                <font>
                  <font>Name book for a child</font>
                </font>
              </span>
            </h1>
            <h1 className="relative text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl max-lg:text-center">
              <span className="bg-[#31B14E] px-3 rounded-lg relative">
                <span className="absolute -right-5 -top-3 rotate-[20deg] text-3xl">
                  <font>
                    <font>🔥</font>
                  </font>
                </span>
                <font>
                  <font>FROM 249 UAH</font>
                </font>
              </span>
            </h1>
            <button
              onClick={() => router.push("/adventures/constructor")}
              className="inline-flex  items-center justify-center rounded-md border border-purple-500 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient px-4 py-2 text-xl font-medium text-white hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 cursor-pointer small xs:w-auto mt-[.5rem] max-lg:hidden"
            >
              Create a Book
            </button>

            <div className="lg:w-[90%]">
              <div className="font-bold bg-teal-500 rounded-lg text-2xl text-center py-4 mt-[1rem] ">
                <h1 className="text-white text-[24px]">Christmas Sale</h1>
                <h1 className="text-white text-[24px]">Discounts</h1>
                <h3 className="text-xl uppercase text-rose-500">-20%</h3>
                <h1 className="text-white text-[24px]">on all products</h1>
              </div>
              <p className="text-xs text-gray-500 text-center mt-[.5rem]">
                until the end of the promotion
              </p>

              <div className="max-lg:mt-[-1rem]">
                <Timer />
              </div>
            </div>
            <button className="inline-flex  items-center justify-center rounded-md border border-purple-500 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient px-4 py-2 text-xl font-medium text-white hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 cursor-pointer small xs:w-auto mt-[1rem] w-full lg:hidden">
              Create a Book
            </button>
          </div>
          <div className="lg:w-1/2 max-lg:mt-[2rem]">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src={"/images/heroBoy.png"}
                  srcSet="/images/heroBoy.png"
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={"/images/heroimg.png"}
                  srcSet="/images/heroimg.png"
                  alt="Image two"
                />
              }
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-[3rem] lg:w-[45%]">
          <div>
            <h1 className="text-6xl text-center text-gray-200">42</h1>
            <p className="text-lg text-gray-300">adventure pages</p>
          </div>
          <div>
            <h1 className="text-6xl text-center text-gray-200">16</h1>
            <p className="text-lg text-gray-300">coloring pages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
