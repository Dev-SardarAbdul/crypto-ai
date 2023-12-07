import React from "react";
import glassesRound from "@/public/images/constructor/glasses/glassesRound.webp";
import glassesCurved from "@/public/images/constructor/glasses/glassesCurved.webp";
import Image from "next/image";
import { swiperBoyData, swiperGirlData } from "./data";
import BoyHairs from "./boyHairs";
import GirlHairs from "./girlHairs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SliderComp({
  showGlasses,
  glassesType,
  gender,
  eyesColor,
  hairColor,
}) {
  const swiperData = gender === "girl" ? swiperGirlData : swiperBoyData;

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          350: {
            slidesPerView: 1,
          },
          450: {
            slidesPerView: 1.3,
          },
          600: {
            slidesPerView: 1.8,
          },
          768: {
            slidesPerView: 2.2,
          },
          992: {
            slidesPerView: 2,
          },
        }}
      >
        {swiperData?.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative min-h-[350px] mx-auto"
              style={{ width: 325 }}
            >
              <div className="absolute inset-0 px-2  w-[85%] h-[90%] bg-[#f09dab] rounded-[20px]">
                <Image
                  src={item.character}
                  className="w-full h-full"
                  alt="character type"
                />
                <div className="absolute top-[5px] left-0 z-10 ">
                  {gender === "girl" ? (
                    <GirlHairs index={index} hairColor={hairColor} />
                  ) : (
                    <BoyHairs index={index} hairColor={hairColor} />
                  )}
                </div>
                <div className="absolute left-0 z-10 w-full h-full top-0 rounded-[20px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    strokeMiterlimit="10"
                    viewBox="740.4 1233.32 609.15 194.82"
                    className=" w-[75px] opacity-30 absolute top-[170px] left-1/2 -translate-x-1/2"
                    fill={eyesColor}
                  >
                    <g>
                      <path d="M822.214 1234.19c-8.123 1.16-15.667 3.1-22.63 5.8-6.963 2.71-12.185 5.23-15.666 7.55-3.482 2.32-9.478 8.31-17.988 17.99-8.51 9.67-14.313 17.98-17.408 24.95-3.094 6.96-5.222 13.73-6.382 20.3-1.161 6.58-1.741 12.58-1.741 17.99 0 5.42 1.547 13.54 4.642 24.37 3.095 10.83 7.737 20.89 13.926 30.18 6.189 9.28 10.638 14.89 13.346 16.82 2.708 1.94 5.415 4.84 8.123 8.71 2.708 3.87 5.609 6.57 8.704 8.12 3.095 1.55 8.704 1.16 16.827-1.16 8.124-2.32 17.601-4.26 28.432-5.8 10.832-1.55 27.272-2.32 49.322-2.32 22.049 0 35.395-2.13 40.037-6.39 4.642-4.25 8.123-8.12 10.444-11.6 2.321-3.48 5.029-9.09 8.124-16.83 3.095-7.74 5.029-16.25 5.802-25.53.774-9.28-.193-19.73-2.901-31.33-2.708-11.61-6.576-21.47-11.605-29.6-5.029-8.12-12.378-16.44-22.049-24.95-9.671-8.51-19.535-14.89-29.593-19.14a109.927 109.927 0 0 0-31.334-8.13c-10.831-1.16-20.308-1.16-28.432 0Zm386.446 12.77c-9.67 1.93-17.6 4.25-23.79 6.96-6.19 2.71-12.96 7.35-20.31 13.93-7.35 6.57-12.57 11.99-15.67 16.24-3.09 4.26-5.8 9.29-8.12 15.09-2.32 5.8-4.25 12.38-5.8 19.73-1.55 7.35-2.32 14.7-2.32 22.05 0 7.35.77 14.7 2.32 22.05 1.55 7.35 4.45 15.08 8.7 23.21 4.26 8.12 10.25 15.86 17.99 23.21 7.74 7.35 17.99 11.02 30.75 11.02 12.77 0 30.76.78 53.97 2.32 23.21 1.55 37.52 2.9 42.94 4.06 5.41 1.17 10.05 1.55 13.92 1.17 3.87-.39 9.48-3.87 16.83-10.45 7.35-6.58 13.73-14.89 19.15-24.95 5.41-10.06 8.7-21.47 9.86-34.23 1.16-12.77.19-24.57-2.9-35.4-3.09-10.83-6.58-19.34-10.44-25.53-3.87-6.19-8.9-12.38-15.09-18.57-6.19-6.19-12.19-11.22-17.99-15.09-5.8-3.86-14.51-7.93-26.11-12.18-11.61-4.26-23.4-6.58-35.4-6.96-11.99-.39-22.82.38-32.49 2.32Zm-364.977 56.28c6.19 0 11.219.78 15.087 2.32 3.868 1.55 7.156 3.48 9.864 5.8 2.708 2.33 5.416 6 8.124 11.03 2.708 5.03 4.255 10.44 4.642 16.25.387 5.8-.194 10.83-1.741 15.08-1.547 4.26-3.868 8.51-6.963 12.77-3.095 4.25-6.77 7.54-11.025 9.86-4.255 2.32-8.897 3.68-13.926 4.06-5.029.39-10.444-.58-16.247-2.9-5.802-2.32-10.638-5.41-14.506-9.28-3.868-3.87-6.77-7.93-8.704-12.19-1.934-4.25-3.094-8.31-3.481-12.18-.387-3.87.58-9.09 2.901-15.67 2.321-6.57 5.609-11.8 9.864-15.66 4.255-3.87 8.124-6.39 11.605-7.55 3.482-1.16 8.317-1.74 14.506-1.74Zm396.307 13.93c8.13.77 13.93 2.13 17.41 4.06 3.48 1.93 6.96 5.22 10.45 9.86 3.48 4.65 5.61 10.06 6.38 16.25.77 6.19.77 10.83 0 13.93-.77 3.09-3.1 7.15-6.96 12.18-3.87 5.03-7.16 8.32-9.87 9.87-2.71 1.54-7.93 2.7-15.67 3.48-7.73.77-12.95.77-15.66 0-2.71-.78-6.58-3.1-11.61-6.97-5.03-3.86-8.31-7.15-9.86-9.86-1.55-2.71-2.71-6.96-3.48-12.77-.78-5.8-.2-11.41 1.74-16.82 1.93-5.42 4.64-10.06 8.12-13.93 3.48-3.87 7.16-6.57 11.03-8.12 3.86-1.55 9.86-1.94 17.98-1.16Z" />
                    </g>
                  </svg>
                </div>

                {showGlasses && (
                  <Image
                    src={
                      glassesType == "rounded" ? glassesRound : glassesCurved
                    }
                    className="absolute left-0 z-10 top-[5px]"
                    alt="character glasses"
                  />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderComp;
