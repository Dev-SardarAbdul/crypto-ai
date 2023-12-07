"use client";

import React from "react";
import s1img from "@/public/images/s1.png";
import s2img from "@/public/images/s2.png";
import s3img from "@/public/images/s3.png";
import s4img from "@/public/images/s4.png";
import s5img from "@/public/images/s5.png";
import s6img from "@/public/images/s6.png";
import s7img from "@/public/images/s7.png";
import s8img from "@/public/images/s8.png";
import s9img from "@/public/images/s9.png";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Gallery = () => {
  const swiperData = [
    s1img,
    s2img,
    s3img,
    s4img,
    s5img,
    s6img,
    s7img,
    s8img,
    s9img,
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
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
      <div>
        <div className="py-10 carousel gallery-carousel">
          <h2 className="px-4 pb-4 mx-auto text-4xl text-white sm:text-5xl max-w-7xl">
            <font>
              <font>Gallery</font>
            </font>
          </h2>
          <div className="mt-[1rem]">
            <Slider {...sliderSettings}>
              {swiperData.map((x, index) => (
                <div key={index}>
                  <div className="relative min-h-[480px]" key={index}>
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
      </div>
    </div>
  );
};

export default Gallery;
