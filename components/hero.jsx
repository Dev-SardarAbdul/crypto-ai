"use client";
import React from "react";
import herogif from "@/public/images/herogif.gif";
import skeletongif from "@/public/images/skeletongif.gif";
import mousegif from "@/public/images/mousegif.gif";
import clickgif from "@/public/images/clickgif.gif";

import scrollicon from "@/public/images/scrollicon.png";
import searchicon from "@/public/images/searchicon.png";
import crownicon from "@/public/images/crownicon.png";
import staricon from "@/public/images/staricon.png";
import herobtn from "@/public/images/herobtn.png";
import caline from "@/public/images/caline.png";
import loaderBunny from "@/public/images/loaderBunny.png";
import meme1 from "@/public/images/meme1.gif";
import meme2 from "@/public/images/meme2.gif";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const Hero = ({ loaded }) => {
  const [showModal, setShowModal] = useState("");
  const [showPrankedDiv, setShowPrankedDiv] = useState(false);
  const [left, setLeft] = useState("0%");
  const [top, setTop] = useState("0%");
  const divRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/sounds/funny.mp3");

    // Enable loop for continuous play
    audio.loop = true;

    if (showPrankedDiv) {
      // Play audio when content is shown
      audio.play();
    } else {
      // Pause and reset audio when content is hidden
      audio.pause();
      audio.currentTime = 0;
    }

    // Clean up the audio object when the component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [showPrankedDiv]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showModal == "firstModal" &&
        divRef.current &&
        !divRef.current.contains(event.target)
      ) {
        setShowModal("firstModal");
      } else {
        setShowModal("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (showModal !== "") {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }

    return () => {
      document.body.classList.remove("disable-scroll");
    };
  }, [showModal]);

  const handleMouseOver = () => {
    const newLeft = `${Math.ceil(Math.random() * 90)}%`;
    const newTop = `${Math.ceil(Math.random() * 90)}%`;
    setLeft(newLeft);
    setTop(newTop);
  };

  const buttonStyle = {
    position: top == "0%" && left == "0%" ? "relative" : "absolute",
    transition: ".5s",
    left: top == "0%" && left == "0%" ? "" : left,
    top: top == "0%" && left == "0%" ? "" : top,
  };

  useEffect(() => {
    if (!loaded) {
      setShowModal("firstModal");
    }
  }, [loaded]);

  return (
    <>
      {!loaded && showModal === "firstModal" && (
        <div
          className="fixed max-sm:px-[1rem] inset-0 w-full h-screen bg-[#000] bg-opacity-70 flex flex-col justify-center items-center z-50"
          ref={divRef}
        >
          <div
            className={`w-full md:w-[584px] h-[380px] md:p-16 bg-[#2000FB] shadow-whiteShadow relative flex justify-center items-center`}
          >
            <IoClose className="absolute top-2 right-2 text-[20px]  cursor-pointer text-white" />
            <video autoPlay loop>
              <source src={"/videos/meme1.mp4"} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      {showModal === "secondModal" && (
        <div
          className="fixed max-sm:px-[1rem] inset-0 w-full h-screen bg-[#000] bg-opacity-70 flex flex-col justify-center items-center z-50"
          ref={divRef}
        >
          <div
            className={`w-full md:w-[584px] h-[380px] md:p-16 bg-[#D21EFF] shadow-whiteShadow relative flex justify-center items-center`}
          >
            <IoClose className="absolute top-2 right-2 text-[20px] text-white cursor-pointer" />
            <Image src={meme2} alt="meme 2" />
            <h2 className="text-white text-[32px] text-center absolute w-full bottom-6 font-[700] uppercase">
              You right now!
            </h2>
          </div>
        </div>
      )}

      <div className="mt-[2rem] pb-[4rem] overflow-x-hidden">
        <div className="items-center justify-between lg:flex">
          <div className="max-lg:flex max-lg:justify-center max-lg:flex-col max-lg:items-center">
            <Image
              alt="image"
              src={herogif}
              className="w-[5.1875rem] h-[5.1875rem] cursor-pointer"
              onClick={() => setShowModal("firstModal")}
            />
            <h1 className="text-[#000] text-[1.1875rem] ml-[0rem]">
              Click me!
            </h1>
          </div>

          <div className="relative cursor">
            <div
              className="flex justify-between items-center lg:w-[27.5rem] h-[2.8125rem] border border-solid border-[#000] px-[1rem] searchinputdropshadow max-lg:mt-[2rem] cursor-pointer"
              onClick={() => setShowPrankedDiv(true)}
            >
              <h1 className="text-[#000] text-[1.1875rem]">Don’t Search!</h1>
              <Image alt="image" src={searchicon} />
            </div>

            {showPrankedDiv && (
              <div className="absolute top-[4rem] right-0 p-4 w-full border border-black flex flex-col justify-start items-center gap-4 bg-[#fff500]">
                <IoClose
                  className="absolute top-2 right-2 text-[20px] text-black cursor-pointer"
                  onClick={() => setShowPrankedDiv(false)}
                />
                <Image alt="image" src={loaderBunny} />
                <h1 className="text-[22px] text-black text-center">
                  haha! Do you think this is Search Bar?
                </h1>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center mt-[2rem]">
            <Image
              alt="image"
              src={crownicon}
              className="mt-[-17rem] max-lg:hidden"
            />
            <h1 className="text-[#000] text-[6.34331rem] font-700 leading-[8rem] text-center max-lg:text-[3rem] max-lg:leading-none">
              Welcome to the
              <br /> Chaos Zone!
            </h1>
            <Image
              alt="image"
              src={staricon}
              className="mt-[-15rem] ml-[2rem] max-lg:hidden"
            />
          </div>
          <h3 className="text-center text-[#000] text-[3.78838rem] mt-[3rem] max-lg:text-[1.6rem]">
            Where Nothing Makes Sense
          </h3>
          <div className="flex justify-center items-center mt-[2rem]  h-[60px]">
            <Image
              alt="image"
              src={herobtn}
              className="cursor-pointer"
              style={buttonStyle}
              onMouseOver={handleMouseOver}
            />
          </div>
        </div>

        <div className="lg:flex justify-between items-center mt-[1rem]">
          <div className="max-lg:flex max-lg:justify-center max-lg:flex-col max-lg:items-center">
            <Image
              alt="image"
              src={skeletongif}
              className="w-[4.5rem] h-[4.57rem] cursor-pointer"
              onClick={() => setShowModal("secondModal")}
            />
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-[#000] text-[1.875rem] max-lg:text-[1rem] max-lg:mt-[1rem]">
              CA:0x71C7656EC7ab88b098defB751B7401B5f6d8976F
            </h5>
            <Image alt="image" src={caline} />
          </div>

          <div className="flex items-center flex-col max-lg:mt-[1rem]">
            <Image
              src={clickgif}
              alt="image"
              className="w-[96px] cursor-pointer"
            />
            {/* <Image alt="image" src={mousegif} className="w-[6rem]" />
            <Image alt="image" src={scrollicon} className="w-[2rem]" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
