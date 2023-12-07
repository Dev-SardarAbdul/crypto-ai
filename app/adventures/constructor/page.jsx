"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import CustomizeToolbar from "./customizeToolbar";
import ImageUploader from "./imageUploader";
import SliderComp from "./sliderComp";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Adventures() {
  const [gender, setGender] = useState("girl");
  const [glassesType, setGlassesType] = useState("");
  const [showGlasses, setShowGlasses] = useState(false);
  const [showUploadImage, setShowUploadImage] = useState(false);
  const [eyesColor, setEyesColor] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [showSkelton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="px-4 pb-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex items-center justify-start gap-1 mt-4">
        <p className="text-[16px] text-[rgb(229,231,235)] font-[500]">Main</p>
        <IoIosArrowForward className="text-[16px] text-[rgb(229,231,235)] font-[500]" />
        <p className="text-[16px] text-gray-400 font-[500]">Designer</p>
      </div>

      <div className="flex flex-col justify-start gap-20 mt-8 lg:flex-row">
        <div className="w-full lg:w-[400px] bg-gray-900  rounded-md border border-gray-600 p-6 ">
          <CustomizeToolbar
            gender={gender}
            setGender={setGender}
            showGlasses={showGlasses}
            setShowGlasses={setShowGlasses}
            glassesType={glassesType}
            setGlassesType={setGlassesType}
            setShowUploadImage={setShowUploadImage}
            showUploadImage={showUploadImage}
            setEyesColor={setEyesColor}
            eyesColor={eyesColor}
            setHairColor={setHairColor}
            hairColor={hairColor}
          />
        </div>
        <div className="mx-auto w-full lg:w-[550px]">
          <div className="max-lg:hidden">
            {showSkelton ? (
              <Skeleton
                className="h-[300px]"
                baseColor="#111827"
                highlightColor="#1F2937"
              />
            ) : (
              <>
                <SliderComp
                  showGlasses={showGlasses}
                  glassesType={glassesType}
                  gender={gender}
                  eyesColor={eyesColor}
                  hairColor={hairColor}
                />
              </>
            )}
          </div>
          {showUploadImage && <ImageUploader />}
        </div>
      </div>
    </section>
  );
}

export default Adventures;
