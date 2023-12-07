import React from "react";
import personalizeimg from "@/public/images/personalizeimg.png";
import { IoBookOutline } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";
import Image from "next/image";
const PersonalizedBook = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mt-[4rem] lg:flex items-center gap-[4rem] max-lg:mt-[3rem] max-lg:flex max-lg:flex-col-reverse">
        <div className="lg:w-1/2 max-lg:mt-[-1rem]">
          <Image
            alt="image"
            src={personalizeimg}
            className="relative px-5 mx-auto rounded-full "
          />
        </div>
        <div className="lg:w-1/2 ">
          <h1 className="text-2xl font-bold tracking-tight text-gray-100 sm:text-3xl">
            Get a personalized book
          </h1>
          <h2 className="mt-3 text-lg text-gray-400">
            for your child and watch their face light up when they see
            themselves in the pictures!
          </h2>

          <div className="mt-[2rem]">
            <div className="flex  gap-[1rem]">
              <div className="flex items-center justify-center w-16 h-12 text-gray-100 bg-pink-500 rounded-xl max-lg:w-24">
                <IoBookOutline color="#fff" fontSize={30} />
              </div>
              <div>
                <h1 className="text-lg font-medium leading-6 text-gray-100 ">
                  Electronic version of the book
                </h1>
                <h2 className="mt-2 text-base text-gray-400">
                  Receive the book in PDF format by email. You can read on a
                  tablet or download to an e-reader.
                </h2>
              </div>
            </div>
            <div className="flex   gap-[1rem] mt-[2rem]">
              <div className="flex items-center justify-center w-16 h-12 text-gray-100 bg-pink-500 rounded-xl max-lg:w-24">
                <BsTruck color="#fff" fontSize={30} />
              </div>
              <div>
                <h1 className="text-lg font-medium leading-6 text-gray-100 ">
                  Get the book by Novaya Poshta
                </h1>
                <h2 className="mt-2 text-base text-gray-400">
                  The book will be sent within 6 working days from the moment of
                  the order. (Quality printing takes time)
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizedBook;
