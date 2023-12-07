import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlinePhone, MdOutlineMail } from "react-icons/md";
import {
  FaInstagram,
  FaTiktok,
  FaTelegram,
  FaViber,
  FaFacebookF,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="px-4 pb-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex items-center justify-start gap-1 mt-4">
        <p className="text-[16px] text-[rgb(229,231,235)] font-[500]">Main</p>
        <IoIosArrowForward className="text-[16px] text-[rgb(229,231,235)] font-[500]" />
        <p className="text-[16px] text-gray-400 font-[500]">Contact</p>
      </div>

      <div className="flex flex-col gap-16 mt-16 lg:flex-row">
        <div className="w-full lg:w-[400px] lg:pr-8">
          <h2 className="text-[rgb(229,231,235)] text-[30px] font-[800]">
            Contact Us
          </h2>
          <p className="mt-3 text-lg leading-6 text-gray-200 ">
            We will always be happy to answer your questions
          </p>

          <p className="mt-12 text-lg italic leading-6 text-gray-200">
            St. Cosmonauts 312, office 7 <br /> Mykolaiv region, Mykolaiv city{" "}
            <br /> Ukraine 54001
          </p>

          <div className="mt-4">
            <div className="flex items-center justify-start gap-4">
              <MdOutlinePhone className="text-gray-300 text-[24px]" />
              <p className="text-lg italic leading-6 text-gray-300 cursor-pointer">
                +(380) 96 096 8646
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 mt-4">
              <MdOutlineMail className="text-gray-300 text-[24px]" />
              <p className="text-lg italic leading-6 text-gray-300 cursor-pointer">
                Mail here
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 mt-4">
              <FaInstagram className="text-gray-300 text-[24px]" />
              <p className="text-lg italic leading-6 text-gray-300 cursor-pointer">
                Instagram
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 mt-4">
              <FaTiktok className="text-gray-300 text-[24px]" />
              <p className="text-lg italic leading-6 text-gray-300 cursor-pointer">
                Tiktok
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 mt-4">
              <FaTelegram className="text-gray-300 text-[24px]" />
              <p className="text-lg italic leading-6 text-gray-300 cursor-pointer">
                Telegram
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 mt-4">
              <FaViber className="text-gray-300 text-[24px]" />
              <p className="text-lg italic leading-6 text-gray-300 cursor-pointer">
                Viber
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 mt-4">
              <FaFacebookF className="text-gray-300 text-[24px]" />
              <p className="text-lg italic leading-6 text-gray-300 cursor-pointer">
                Facebook
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <input
            className="px-4 w-full py-2 bg-[#374151] border border-[rgb(75,85,99)] rounded-md  text-white outline-none focus:border-white"
            placeholder="Full Name"
          />

          <input
            className="px-4  bg-[#374151] mt-8 py-2 w-full  border border-[rgb(75,85,99)] rounded-md  text-white outline-none focus:border-white"
            placeholder="Phone or email"
          />
          <textarea
            className="px-4  bg-[#374151] mt-8 py-2 w-full  border border-[rgb(75,85,99)] rounded-md  text-white outline-none focus:border-white min-h-[100px]"
            placeholder="Write us a message"
          />
          <button className="block px-6 py-3 mt-8 ml-auto text-lg font-medium text-white border border-transparent border-purple-500 rounded-md shadow-md first-letter: bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 ">
            Send
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
