import React from "react";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import navbarCardImg from "@/public/images/navbarCardImg.webp";

function MobileNav({ setIsCollapsed }) {
  const router = useRouter();

  const navData = [
    {
      id: 1,
      text: "Question and answers",
      route: "/faqs",
    },
    {
      id: 2,
      text: "Payment and delivery",
      route: "/terms-and-conditions",
    },
    {
      id: 1,
      text: "Contact",
      route: "/contact",
    },
    {
      id: 1,
      text: "Track the orders",
      route: "",
    },
  ];
  return (
    <motion.div
      className="fixed top-0 left-0 z-20 w-full h-full px-2 py-4 bg-gray-900"
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <IoClose
        className="text-gray-500 text-[32px]"
        onClick={() => setIsCollapsed(false)}
      />
      <div className="w-full pb-4 mt-4 overflow-x-auto">
        <div className="inline-flex gap-x-4">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <motion.div
              className="w-[170px]"
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: (index + 1) * 0.1 }}
              onClick={() => {
                router.push("/constructor");
                setIsCollapsed(false);
              }}
            >
              <Image src={navbarCardImg} className="w-full rounded-lg" />
              <p
                className={`text-gray-200 mt-4 hover:text-gray-300 font-[500]  text-[16px]  cursor-pointer`}
              >
                Adventure on Treasure Island
              </p>
              <button
                className={`mt-2 text-sm font-medium transition-colors duration-200 ease-out bg-pink-500 text-white px-3 py-2 rounded-md cursor-pointer w-full`}
              >
                Create a book
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        {navData?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.25, delay: (index + 1) * 0.1 }}
            onClick={() => {
              router.push(item.route);
              setIsCollapsed(false);
            }}
          >
            <p
              className={`text-gray-200 mt-8 hover:text-gray-300 font-[500]  text-[16px]  cursor-pointer`}
            >
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default MobileNav;
