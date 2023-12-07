"use client";
import React from "react";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      <div>
        <div>
          <div className="relative flex flex-col items-center justify-center w-12 h-12 mt-4 text-xl bg-transparent rounded-lg  md:text-4xl">
            <div className="rounded-t-lg rounded-b-lg bg-[#343650] w-full h-full"></div>
            <div className="absolute z-10 text-lg font-bold text-rose-500 md:text-xl">
              <font>
                <font>{days}</font>
              </font>
            </div>
            <div className=" rounded-b-lg rounded-t-lg bg-[#2c2e3f] w-full h-full"></div>
            <div className="absolute top-0 w-full bg-transparent rounded-t-lg h-1/2 z-5"></div>
            <div className="absolute -right-1 top-[20px] rounded-full w-[6px] h-[6px] bg-[#1e1f29]"></div>
            <div className="absolute -left-1 top-[20px] rounded-full w-[6px] h-[6px] bg-[#1e1f29]"></div>
          </div>
        </div>
        <p className="text-sm mt-3 font-semibold text-rose-200 md:text-lg">
          days
        </p>
      </div>{" "}
      <span className="hidden text-lg md:inline-block md:text-xl font-normal text-gray-50 ">
        :
      </span>
      <div>
        <div>
          <div className="relative flex flex-col items-center justify-center w-12 h-12 mt-4 text-xl bg-transparent rounded-lg  md:text-4xl">
            <div className="rounded-t-lg rounded-b-lg bg-[#343650] w-full h-full"></div>
            <div className="absolute z-10 text-lg font-bold text-rose-500 md:text-xl">
              <font>
                <font>{hours}</font>
              </font>
            </div>
            <div className=" rounded-b-lg rounded-t-lg bg-[#2c2e3f] w-full h-full"></div>
            <div className="absolute top-0 w-full bg-transparent rounded-t-lg h-1/2 z-5"></div>
            <div className="absolute -right-1 top-[20px] rounded-full w-[6px] h-[6px] bg-[#1e1f29]"></div>
            <div className="absolute -left-1 top-[20px] rounded-full w-[6px] h-[6px] bg-[#1e1f29]"></div>
          </div>
        </div>
        <p className="text-sm mt-3 font-semibold text-rose-200 md:text-lg">
          hours
        </p>
      </div>
      <span className="hidden text-lg md:inline-block md:text-xl font-normal text-gray-50 ">
        :
      </span>
      <div>
        <div>
          <div className="relative flex flex-col items-center justify-center w-12 h-12 mt-4 text-xl bg-transparent rounded-lg  md:text-4xl">
            <div className="rounded-t-lg rounded-b-lg bg-[#343650] w-full h-full"></div>
            <div className="absolute z-10 text-lg font-bold text-rose-500 md:text-xl">
              <font>
                <font>{minutes}</font>
              </font>
            </div>
            <div className=" rounded-b-lg rounded-t-lg bg-[#2c2e3f] w-full h-full"></div>
            <div className="absolute top-0 w-full bg-transparent rounded-t-lg h-1/2 z-5"></div>
            <div className="absolute -right-1 top-[20px] rounded-full w-[6px] h-[6px] bg-[#1e1f29]"></div>
            <div className="absolute -left-1 top-[20px] rounded-full w-[6px] h-[6px] bg-[#1e1f29]"></div>
          </div>
        </div>
        <p className="text-sm mt-3 font-semibold text-rose-200 md:text-lg">
          minutes
        </p>
      </div>
      <span className="hidden text-lg md:inline-block md:text-xl font-normal text-gray-50 ">
        :
      </span>
      <div>
        <div>
          <div className="relative flex flex-col items-center justify-center w-12 h-12 mt-4 text-xl bg-transparent rounded-lg  md:text-4xl">
            <div className="rounded-t-lg rounded-b-lg bg-[#343650] w-full h-full"></div>
            <div className="absolute z-10 text-lg font-bold text-rose-500 md:text-xl">
              <font>
                <font>{seconds}</font>
              </font>
            </div>
            <div className=" rounded-b-lg rounded-t-lg bg-[#2c2e3f] w-full h-full"></div>
            <div className="absolute top-0 w-full bg-transparent rounded-t-lg h-1/2 z-5"></div>
            <div className="absolute -right-1 top-[20px] rounded-full w-[6px] h-[6px] bg-[#1e1f29]"></div>
            <div className="absolute -left-1 top-[20px] rounded-full w-[6px] h-[6px] bg-[#1e1f29]"></div>
          </div>
        </div>
        <p className="text-sm mt-3 font-semibold text-rose-200 md:text-lg">
          seconds
        </p>
      </div>
    </div>
  );
}

export default function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}
