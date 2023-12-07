import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";

const OrderBook = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mt-[6rem] lg:flex items-center gap-[6rem] max-lg:mt-[3rem]">
        <div className="lg:w-1/2 ">
          <h1 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-3xl">
            Order a book about{" "}
            <span className="text-pink-500">your hero or heroine</span> in just
            a few clicks
          </h1>
          <h2 className="mt-3 text-lg text-gray-400">
            Add a special accent to the evening bedtime stories with a
            personalized book about your baby.
          </h2>

          <div className="mt-[2rem]">
            <div className="flex  gap-[1rem]">
              <div className="flex items-center justify-center w-12 h-12 text-gray-100 bg-pink-500 rounded-xl">
                <CiClock2 color="#fff" fontSize={30} />
              </div>
              <div>
                <h1 className="text-lg font-medium leading-6 text-gray-100 ">
                  Create your book character
                </h1>
                <h2 className="mt-2 text-base text-gray-400">
                  It will take only a few minutes.
                </h2>
              </div>
            </div>
            <div className="flex  gap-[1rem] mt-[2rem]">
              <div className="flex items-center justify-center w-12 h-12 text-gray-100 bg-pink-500 rounded-xl">
                <IoBookOutline color="#fff" fontSize={30} />
              </div>
              <div>
                <h1 className="text-lg font-medium leading-6 text-gray-100 ">
                  Check out the book for FREE
                </h1>
                <h2 className="mt-2 text-base text-gray-400">
                  You can read the whole book before buying.
                </h2>
              </div>
            </div>
            <div className="flex  gap-[1rem] mt-[2rem]">
              <div className="flex items-center justify-center w-12 h-12 text-gray-100 bg-pink-500 rounded-xl">
                <AiOutlineSafety color="#fff" fontSize={30} />
              </div>
              <div>
                <h1 className="text-lg font-medium leading-6 text-gray-100 ">
                  Pay online
                </h1>
                <h2 className="mt-2 text-base text-gray-400">
                  We guarantee safety.
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 max-lg:mt-[2rem]">
          <video
            muted
            autoPlay
            loop
            className="relative w-auto mx-auto shadow-2xl rounded-2xl"
          >
            <source src={"/videos/video1.mp4"} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default OrderBook;
