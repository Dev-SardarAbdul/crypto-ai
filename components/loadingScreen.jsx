"use client";
import React, { useState, useEffect } from "react";
import loadergif from "@/public/images/loadergif.gif";
import viewApologyBtn from "@/public/images/viewApologyBtn.png";
import loaderBunny from "@/public/images/loaderBunny.png";
import stoppedLoader from "@/public/images/stoppedLoader.png";
import Image from "next/image";

const LoadingScreen = () => {
  const [count, setCount] = useState(0);
  const [left, setLeft] = useState("0%");
  const [top, setTop] = useState("0%");
  const [showBottomText, setShowBottomText] = useState(false);

  const handleMouseOver = () => {
    const newLeft = `${Math.ceil(Math.random() * 90)}%`;
    const newTop = `${Math.ceil(Math.random() * 90)}%`;
    setLeft(newLeft);
    setTop(newTop);
    setShowBottomText(true);
  };

  const buttonStyle = {
    position: top == "0%" && left == "0%" ? "relative" : "absolute",
    transition: ".5s",
    left: top == "0%" && left == "0%" ? "" : left,
    top: top == "0%" && left == "0%" ? "" : top,
  };

  useEffect(() => {
    let intervalDuration = 3000;
    let timeoutDuration = 8000;
    let currentTimeout = null;

    const incrementCount = () => {
      setCount((prevCount) => {
        if (prevCount < 3) {
          return prevCount + 1;
        } else if (prevCount === 3 && currentTimeout === null) {
          currentTimeout = setTimeout(() => {
            setCount(4);
            currentTimeout = null;
          }, timeoutDuration);
          return prevCount;
        } else if (prevCount === 4 && currentTimeout === null) {
          currentTimeout = setTimeout(() => {
            setCount(0);
            currentTimeout = null;
          }, timeoutDuration);
          return prevCount;
        } else {
          return prevCount;
        }
      });
    };

    const interval = setInterval(incrementCount, intervalDuration);

    return () => {
      clearInterval(interval);
      if (currentTimeout !== null) {
        clearTimeout(currentTimeout);
      }
    };
  }, []);

  return (
    <div
      className={`h-screen flex flex-col justify-center items-center fixed top-0 left-0 w-full z-[100]`}
      style={{
        background: `${
          count == 0
            ? "#FA0019"
            : count == 1
            ? "#31FF28"
            : count == 2
            ? "#2000FB"
            : count == 3
            ? "#D21EFF"
            : count == 4
            ? "#FFF500"
            : "#FA0019"
        }`,
      }}
    >
      {count !== 4 && (
        <Image
          src={count == 3 ? stoppedLoader : loadergif}
          alt="loader gif"
          height={150}
        />
      )}

      <h3 className="text-[#000] text-[4.5rem] w-full xl:w-[1180px] text-center">
        {count == 0
          ? "Don’t you have anything better to do"
          : count == 1
          ? "Cancel my subscription because I don't need your issues"
          : count == 2
          ? "You are wasting time like you waste your money"
          : count == 3
          ? "It is not my fault, your internet is slow, get a better connection peep"
          : count == 4
          ? "Sorry for the inconvenience! Please accept our apology"
          : "Don’t you have anything better to do"}
      </h3>

      {count == 4 && (
        <>
          <div className="h-[80px]">
            <Image
              src={viewApologyBtn}
              alt="apology button"
              className="mx-auto mt-4"
              id="btn"
              style={buttonStyle}
              onMouseOver={handleMouseOver}
            />
          </div>

          {showBottomText ? (
            <Image
              src={loaderBunny}
              alt="Loader Bunny"
              className="mx-auto mt-20"
            />
          ) : (
            <Image
              src={loaderBunny}
              alt="Loader Bunny"
              className="mx-auto mt-20 opacity-0"
            />
          )}

          {showBottomText ? (
            <h3 className="text-center text-[32px] mt-4">
              haha! The fool can’t even click a button...{" "}
            </h3>
          ) : (
            <h3 className="text-center text-[32px] mt-4 opacity-0">
              haha! The fool can’t even click a button...{" "}
            </h3>
          )}
        </>
      )}
    </div>
  );
};

export default LoadingScreen;
