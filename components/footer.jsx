import React from "react";
import { MdOutlinePhone, MdOutlineMail, MdLocationOn } from "react-icons/md";
import {
  FaInstagram,
  FaTiktok,
  FaTelegram,
  FaViber,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900">
      <footer className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 py-8 border-t border-b border-gray-700 lg:items-center lg:flex-row">
          <div className="flex-1">
            <h2 className="text-white text-[1rem] font-medium max-sm:text-center">
              Subscribe to our news letter
            </h2>
            <p className="mt-2 text-gray-300 text-[1rem] max-sm:text-center ">
              Alwats be the first to know about promotions and new book
              releases.
            </p>
          </div>
          <div className="flex items-center justify-end flex-1 gap-4 max-sm:w-full max-sm:items-center max-sm:flex-col">
            <input
              className="px-4 py-2 bg-[#374151] border border-[rgb(75,85,99)] rounded-md  text-white outline-none focus:border-white"
              placeholder="Enter your email"
            />

            <button className=" w-[120px] px-4 py-2 text-xl text-white font-medium bg-green-500 border border-transparent rounded-md shadow-md cursor-pointer bg-primaryGreen hover:bg-green-600">
              Sign Up
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 my-8 lg:gap-0 lg:items-start lg:flex-row">
          <div>
            <div className="flex items-center justify-start gap-4">
              <MdOutlinePhone className="text-[#9CA3AF] text-[24px]" />
              <p className="text-[#9CA3AF] text-[14px] cursor-pointer">
                +(380) 96 096 8646
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 mt-4">
              <MdOutlineMail className="text-[#9CA3AF] text-[24px]" />
              <p className="text-[#9CA3AF] text-[14px] cursor-pointer">
                xyz@gmail.com{" "}
              </p>
            </div>
            <div className="flex items-center justify-start gap-4 mt-4">
              <MdLocationOn className="text-[#9CA3AF] text-[24px]" />
              <p className="text-[#9CA3AF] text-[14px] cursor-pointer">
                Location Here
              </p>
            </div>
          </div>
          <div>
            <p className="text-center text-blue-500 cursor-pointer small hover:text-blue-400 ">
              Privacy Policy
            </p>
            <p className="mt-4 text-center text-blue-500 cursor-pointer small hover:text-blue-400">
              Exchange and return
            </p>
            <p className="mt-4 text-center text-blue-500 cursor-pointer small hover:text-blue-400">
              Guarantee
            </p>

            <p className="text-[#9CA3AF] text-[16px] mt-4 text-center">
              © {new Date().getFullYear()} Piuwee Books LLC. All rights
              reserved.
            </p>
          </div>
          <div className="flex items-center justify-end gap-8 lg:mt-6">
            <FaInstagram className="text-[24px] text-[#9CA3AF] cursor-pointer hover:text-gray-500 transition-colors" />
            <FaTiktok className="text-[24px] text-[#9CA3AF] cursor-pointer hover:text-gray-500 transition-colors" />
            <FaTelegram className="text-[24px] text-[#9CA3AF] cursor-pointer hover:text-gray-500 transition-colors" />
            <FaViber className="text-[24px] text-[#9CA3AF] cursor-pointer hover:text-gray-500 transition-colors" />
            <FaFacebookF className="text-[24px] text-[#9CA3AF] cursor-pointer hover:text-gray-500 transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
