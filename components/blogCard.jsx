import Image from "next/image";
import React from "react";
import cardBG from "@/public/images/cardBG.png";

function BlogCard({ item }) {
  return (
    <div className="relative w-full main-card ">
      <Image
        src={cardBG}
        alt="Cards BG"
        draggable={false}
        className="absolute top-0 left-0 w-full h-full select-none"
      />
      <div className="relative w-full h-full p-4 sm:p-6 ">
        <Image
          src={item.image}
          alt="Cards Image"
          draggable={false}
          className="w-full select-none"
        />
        <h2 className="mt-2 text-lg font-medium text-white">
          {item.name.length > 60 ? item.name.slice(0, 60) + "..." : item.name}
        </h2>
        <p className="text-sm text-white font-extralight">
          {item.text.length > 135 ? item.text.slice(0, 135) + "..." : item.text}
        </p>
        {/* <p className="text-xs text-white font-extralight">July 19, 2023</p> */}
      </div>
    </div>
  );
}

export default BlogCard;
