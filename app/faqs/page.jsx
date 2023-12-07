"use client";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import {
  FaInstagram,
  FaTiktok,
  FaTelegram,
  FaViber,
  FaFacebookF,
} from "react-icons/fa";
import { booksData } from "./data";
import { useRouter } from "next/navigation";

function Faqs() {
  const router = useRouter();
  return (
    <section className="px-4 pb-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex items-center justify-start gap-1 mt-4">
        <p className="text-[16px] text-[rgb(229,231,235)] font-[500]">Main</p>
        <IoIosArrowForward className="text-[16px] text-[rgb(229,231,235)] font-[500]" />
        <p className="text-[16px] text-gray-400 font-[500]">
          Answers to questions
        </p>
      </div>

      <div className="flex flex-col gap-8 mt-16 lg:flex-row">
        <div className="w-full lg:w-[400px]">
          <h2 className="text-[rgb(229,231,235)] text-[30px] font-[800]">
            Other questions
          </h2>
          <p className="mt-3 text-lg leading-6 text-gray-400 ">
            If you did not find the answer to your question, you can contact our
            team in any convenient way for you or write to us{" "}
            <span
              className="text-[#31b14e] cursor-pointer"
              onClick={() => router.push("/contact")}
            >
              {" "}
              here
            </span>
          </p>

          <div className="mt-4">
            <div className="flex items-center justify-start gap-4 mt-4">
              <FaInstagram className="text-gray-300 text-[24px]" />
              <p className="text-lg leading-6 text-gray-300 cursor-pointer">
                Instagram
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 mt-4">
              <FaTiktok className="text-gray-300 text-[24px]" />
              <p className="text-lg leading-6 text-gray-300 cursor-pointer">
                Tiktok
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 mt-4">
              <FaTelegram className="text-gray-300 text-[24px]" />
              <p className="text-lg leading-6 text-gray-300 cursor-pointer">
                Telegram
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 mt-4">
              <FaViber className="text-gray-300 text-[24px]" />
              <p className="text-lg leading-6 text-gray-300 cursor-pointer">
                Viber
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 mt-4">
              <FaFacebookF className="text-gray-300 text-[24px]" />
              <p className="text-lg leading-6 text-gray-300 cursor-pointer">
                Facebook
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 min-h-screen p-4 bg-gray-900 rounded-md">
          {booksData?.map((item, index) => (
            <div key={item.id} className={`${index > 0 ? "mt-8" : ""}`}>
              <h2 className="text-[#31b14e] text-[1.8rem]">{item.header}</h2>

              {item?.questions.map((x, index) => (
                <div className="mt-8" key={index}>
                  <h4 className="text-[1.15rem] leading-6 text-[rgb(229,231,235)] font-[500]">
                    {x?.question}
                  </h4>
                  <p className="mt-2 leading-6 text-gray-400 ">{x?.answer}</p>
                </div>
              ))}
            </div>
          ))}

          <p className="mt-8 leading-6 text-gray-400">
            Email{" "}
            <a
              className="cursor-pointer text-[#0E98D7]"
              href="mailto:piuwee.com@gmail.com"
            >
              piuwee.com@gmail.com
            </a>{" "}
            or call{" "}
            <span className="cursor-pointer text-[#0E98D7]">
              +(380) 96 096 8646{" "}
            </span>
            to our support.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
