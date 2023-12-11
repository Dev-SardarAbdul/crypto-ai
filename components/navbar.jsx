"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShopping } from "react-icons/ai";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MobileNav from "./mobileNav";
import { AnimatePresence } from "framer-motion";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isCollapsed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCollapsed]);

  return (
    <div className="py-6  lg:h-[5rem] bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="p-2 text-gray-100 bg-gray-700 rounded-md lg:hidden">
            <GiHamburgerMenu
              className="text-[18px] cursor-pointer"
              onClick={() => setIsCollapsed(true)}
            />
          </div>

          <Image
            alt="image"
            src={logo}
            className="text-black cursor-pointer small h-8 w-[51px] "
            onClick={() => router.push("/")}
          />
          <div className="flex items-center justify-start gap-8 max-lg:hidden">
            <p
              className={`relative z-10 flex justify-center items-center text-sm font-medium transition-colors duration-200 ease-out bg-pink-500 text-white px-3 py-2 rounded-md cursor-pointer`}
            >
              Books
            </p>
            {/* <p
              className={`text-gray-200 hover:text-gray-300 font-[500]  text-[14px]  cursor-pointer`}
            >
              Blog
            </p> */}
            <p
              className={`text-gray-200 hover:text-gray-300 font-[500]  text-[14px]  cursor-pointer`}
              onClick={() => router.push("/faqs")}
            >
              Question and answers
            </p>
            <p
              className={`text-gray-200 hover:text-gray-300 font-[500]  text-[14px]  cursor-pointer`}
              onClick={() => router.push("/terms-and-conditions")}
            >
              Payment and delivery
            </p>
            <p
              className={`text-gray-200 hover:text-gray-300 font-[500]  text-[14px]  cursor-pointer`}
              onClick={() => router.push("/contact")}
            >
              Contact
            </p>
            <p
              className={`text-pink-500 hover:text-pink-600 font-[500]  text-[14px]  cursor-pointer`}
            >
              Track the orders
            </p>
          </div>

          <div className="flex items-center p-2 -m-2 ">
            <AiOutlineShopping color="#fff" fontSize={25} cursor="pointer" />
            <span className="ml-2 text-sm font-medium text-gray-200 group-hover:text-gray-300">
              0
            </span>
          </div>
        </div>

        <AnimatePresence>
          {isCollapsed && (
            <MobileNav setIsCollapsed={setIsCollapsed} key="drawer" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Navbar;
