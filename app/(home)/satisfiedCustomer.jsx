"use client";
import React from "react";
import customerimg1 from "@/public/images/swiper2img/customerimg1.png";
import customerimg2 from "@/public/images/swiper2img/customerimg2.png";
import customerimg3 from "@/public/images/swiper2img/customerimg3.png";
import customerimg4 from "@/public/images/swiper2img/customerimg4.png";
import customerimg5 from "@/public/images/swiper2img/customerimg5.png";
import customerimg6 from "@/public/images/swiper2img/customerimg6.png";
import customerimg7 from "@/public/images/swiper2img/customerimg7.png";
import customerimg8 from "@/public/images/swiper2img/customerimg8.png";
import customerimg9 from "@/public/images/swiper2img/customerimg9.png";
import customerimg10 from "@/public/images/swiper2img/customerimg10.png";
import customerimg11 from "@/public/images/swiper2img/customerimg11.png";
import customerimg12 from "@/public/images/swiper2img/customerimg12.png";
import customerimg13 from "@/public/images/swiper2img/customerimg13.png";
import customerimg14 from "@/public/images/swiper2img/customerimg14.png";
import customerimg15 from "@/public/images/swiper2img/customerimg15.png";
import customerimg16 from "@/public/images/swiper2img/customerimg16.png";
import customerimg17 from "@/public/images/swiper2img/customerimg17.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const SatisfiedCustomer = () => {
  const swiper2Data = [
    customerimg1,
    customerimg2,
    customerimg3,
    customerimg4,
    customerimg5,
    customerimg6,
    customerimg7,
    customerimg8,
    customerimg9,
    customerimg10,
    customerimg11,
    customerimg12,
    customerimg13,
    customerimg14,
    customerimg15,
    customerimg16,
    customerimg17,
  ];

  const sliderSettings2 = {
    dots: true,
    infinite: true,
    autoplay: true,
    centerMode: true,
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="py-12 sm:py-16 lg:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-center text-transparent sm:text-4xl bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient">
          Hundreds of satisfied customers
        </h1>
        <h2 className="text-lg font-medium mt-4 text-[#f3f4f6] text-center">
          Here is just a small part of them
        </h2>

        <div className="w-full h-full max-w-5xl mx-auto  mt-[4rem] relative min-h-[550px]">
          <div className="absolute inset-0 w-full h-full swiper-gradient rounded-3xl opacity-30 blur-lg filter "></div>

          <div className="relative z-10 w-full h-full py-8 ">
            <Slider {...sliderSettings2} className="swiper2">
              {swiper2Data.map((x, index) => (
                <div key={index}>
                  <div className="relative min-h-[480px] " key={index}>
                    <div className="absolute inset-0 w-full h-full px-2">
                      <Image
                        alt="image"
                        src={x}
                        className="rounded-[20px]  h-full w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <h1 className=" text-center md:mt-8 md:order-3 text-[#2563eb] text-[16px] underline">
          View our instagram
        </h1>
      </div>
    </div>
  );
};

export default SatisfiedCustomer;
