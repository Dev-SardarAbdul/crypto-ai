import React, { useState, useRef, useCallback, useEffect } from "react";
import { Switch } from "antd";
import { FaQuestionCircle } from "react-icons/fa";
import { Select } from "antd";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Image from "next/image";
import glasses1 from "@/public/images/glasses1.png";
import glasses2 from "@/public/images/glasses2.png";
import { HexColorPicker } from "react-colorful";
import useClickOutside from "@/components/divCloser";
import SliderComp from "./sliderComp";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CustomizeToolbar({
  gender,
  setGender,
  showGlasses,
  setShowGlasses,
  setGlassesType,
  glassesType,
  setShowUploadImage,
  showUploadImage,
  setEyesColor,
  eyesColor,
  hairColor,
  setHairColor,
}) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showHairColorPicker, setShowHairColorPicker] = useState(false);
  const colorPickerRef = useRef();
  const hairColorPickerRef = useRef();
  const [showSkelton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const onChange = () => {
    setShowGlasses(!showGlasses);
    setGlassesType("rounded");
  };
  const handleSwitchChange = () => {
    setShowUploadImage(!showUploadImage);
  };

  const onRadioChange = (e) => {
    setEyesColor(e.target.value);
  };

  const onHairRadioChange = (e) => {
    setHairColor(e.target.value);
  };

  const close = useCallback(() => setShowColorPicker(false), []);
  useClickOutside(colorPickerRef, close);

  const hairClose = useCallback(() => setShowHairColorPicker(false), []);
  useClickOutside(hairColorPickerRef, hairClose);

  return (
    <div>
      <h2 className="text-center text-gray-100 text-[16px] font-[600]">
        Customize the look
      </h2>
      <div className="mt-8">
        <h4 className="text-center text-gray-100 font-[600]">Name</h4>
        <input
          className="px-4 py-2 bg-[#374151] border-2 border-[rgb(75,85,99)] rounded-md  text-white outline-none focus:border-[#31b14e] w-full mt-2"
          placeholder="Enter Name"
        />
        <div className="flex items-center justify-between gap-4 mt-6">
          <button
            className={`flex justify-between items-center px-4 py-3 bg-[#374151]  rounded-md w-full text-white text-left ${
              gender === "girl"
                ? " border-2 border-[#31b14e]"
                : "border-2 border-[rgb(75,85,99)]"
            }`}
            onClick={() => setGender("girl")}
          >
            Girl
            {gender === "girl" && (
              <IoIosCheckmarkCircle className="text-[20px] text-[#31b14e]" />
            )}
          </button>
          <button
            className={`flex justify-between items-center px-4 py-3 bg-[#374151]  rounded-md w-full text-white text-left ${
              gender === "boy"
                ? " border-2 border-[#31b14e]"
                : "border-2 border-[rgb(75,85,99)]"
            }`}
            onClick={() => setGender("boy")}
          >
            Boy
            {gender === "boy" && (
              <IoIosCheckmarkCircle className="text-[20px] text-[#31b14e]" />
            )}
          </button>
        </div>

        <div className="mt-12 lg:hidden">
          {showSkelton ? (
            <Skeleton
              className="h-[300px]"
              baseColor="#111827"
              highlightColor="#1F2937"
            />
          ) : (
            <SliderComp
              showGlasses={showGlasses}
              glassesType={glassesType}
              gender={gender}
              eyesColor={eyesColor}
              hairColor={hairColor}
            />
          )}
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <h4 className="text-center text-gray-100 font-[600]">Add Glasses</h4>

          <Switch onChange={onChange} />
        </div>

        {showGlasses && (
          <div className="flex items-center justify-between gap-4 mt-6">
            <button
              className={`flex h-[52px] justify-between items-center px-4 py-3 bg-[#374151]  rounded-md w-full text-white text-left ${
                glassesType === "rounded"
                  ? " border-2 border-[#31b14e]"
                  : "border-2 border-[rgb(75,85,99)]"
              }`}
              onClick={() => setGlassesType("rounded")}
            >
              <Image src={glasses2} alt="rounded glasses" />

              {glassesType === "rounded" && (
                <IoIosCheckmarkCircle className="text-[20px] text-[#31b14e]" />
              )}
            </button>

            <button
              className={`flex h-[52px] justify-between items-center px-4 py-3 bg-[#374151]  rounded-md w-full text-white text-left ${
                glassesType === "curved"
                  ? " border-2 border-[#31b14e]"
                  : "border-2 border-[rgb(75,85,99)]"
              }`}
              onClick={() => setGlassesType("curved")}
            >
              <Image src={glasses1} alt="curved glasses" />
              {glassesType === "curved" && (
                <IoIosCheckmarkCircle className="text-[20px] text-[#31b14e]" />
              )}
            </button>
          </div>
        )}

        <div className="mt-6">
          <h4 className="text-center text-gray-100 font-[600]">
            Choose Your Eyes Color
          </h4>
          <div
            className="px-4 py-3 bg-[#374151] border-2 border-[rgb(75,85,99)] rounded-md w-full text-white flex justify-around items-center mt-4"
            onChange={onRadioChange}
          >
            <label htmlFor="color1">
              <input
                type="radio"
                value="#b0b5b7"
                name="hairColor"
                checked={eyesColor === "#b0b5b7"}
                style={{ display: "none" }}
                id="color1"
              />{" "}
              <div
                className={`w-[20px] h-[20px] border-2 bg-[#b0b5b7] rounded-full cursor-pointer ${
                  eyesColor === "#b0b5b7"
                    ? " border-blue-500"
                    : "border-transparent"
                }`}
              />
            </label>

            <label htmlFor="color2">
              <input
                type="radio"
                value="#94c07f"
                name="eyesColor"
                checked={eyesColor === "#94c07f"}
                style={{ display: "none" }}
                id="color2"
              />{" "}
              <div
                className={`w-[20px] h-[20px] bg-[#94c07f] rounded-full cursor-pointer border-2 ${
                  eyesColor === "#94c07f"
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              />
            </label>

            <label htmlFor="color3">
              <input
                type="radio"
                value="#ae8374"
                name="eyesColor"
                checked={eyesColor === "#ae8374"}
                style={{ display: "none" }}
                id="color3"
              />{" "}
              <div
                className={`w-[20px] h-[20px] bg-[#ae8374] rounded-full cursor-pointer border-2 ${
                  eyesColor === "#ae8374"
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              />
            </label>

            <label htmlFor="color4">
              <input
                type="radio"
                value="#b2e5fb"
                name="eyesColor"
                checked={eyesColor === "#b2e5fb"}
                style={{ display: "none" }}
                id="color4"
              />{" "}
              <div
                className={`w-[20px] h-[20px] bg-[#b2e5fb] rounded-full cursor-pointer border-2 ${
                  eyesColor === "#b2e5fb"
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              />
            </label>

            <label htmlFor="custom">
              <input
                type="radio"
                value="custom"
                name="eyesColor"
                onClick={() => {
                  setShowColorPicker(true);
                }}
                checked={eyesColor === "custom"}
                style={{ display: "none" }}
                id="custom"
              />{" "}
              <div
                className={`relative w-[20px] h-[20px] bg-gradient-to-r from-pink-500 to-yellow-500    rounded-full cursor-pointer border-2 ${
                  eyesColor === "custom"
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              >
                {showColorPicker && (
                  <div
                    ref={colorPickerRef}
                    className="absolute z-10 top-10 max-lg:-left-[10rem]"
                  >
                    <HexColorPicker color={"#00FFF4"} onChange={setEyesColor} />
                  </div>
                )}
              </div>
            </label>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-center text-gray-100 font-[600]">
            Choose a hair color
          </h4>
          <div
            className="px-4 py-3 bg-[#374151] border-2 border-[rgb(75,85,99)] rounded-md w-full text-white flex justify-around items-center mt-4"
            onChange={onHairRadioChange}
          >
            <label htmlFor="hairColor1">
              <input
                type="radio"
                value="#964B00"
                name="hairColor"
                checked={hairColor === "#964B00"}
                style={{ display: "none" }}
                id="hairColor1"
              />{" "}
              <div
                className={`w-[20px] h-[20px] border-2 bg-[#964B00] rounded-full cursor-pointer ${
                  hairColor === "#964B00"
                    ? " border-blue-500"
                    : "border-transparent"
                }`}
              />
            </label>

            <label htmlFor="hairColor2">
              <input
                type="radio"
                value="#000"
                name="hairColor"
                checked={hairColor === "#000"}
                style={{ display: "none" }}
                id="hairColor2"
              />{" "}
              <div
                className={`w-[20px] h-[20px] bg-[#000] rounded-full cursor-pointer border-2 ${
                  hairColor === "#000"
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              />
            </label>

            <label htmlFor="hairColor3">
              <input
                type="radio"
                value="gray"
                name="hairColor"
                checked={hairColor === "gray"}
                style={{ display: "none" }}
                id="hairColor3"
              />{" "}
              <div
                className={`w-[20px] h-[20px] bg-[gray] rounded-full cursor-pointer border-2 ${
                  hairColor === "gray"
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              />
            </label>

            <label htmlFor="hairColor4">
              <input
                type="radio"
                value="#360D11"
                name="hairColor"
                checked={hairColor === "#360D11"}
                style={{ display: "none" }}
                id="hairColor4"
              />{" "}
              <div
                className={`w-[20px] h-[20px] bg-[#360D11] rounded-full cursor-pointer border-2 ${
                  hairColor === "#360D11"
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              />
            </label>

            <label htmlFor="customHairColor">
              <input
                type="radio"
                value="customHairColor"
                name="hairColor"
                onClick={() => {
                  setShowHairColorPicker(true);
                }}
                checked={hairColor === "customHairColor"}
                style={{ display: "none" }}
                id="customHairColor"
              />{" "}
              <div
                className={`relative w-[20px] h-[20px] bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full cursor-pointer border-2 ${
                  hairColor === "customHairColor"
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
              >
                {showHairColorPicker && (
                  <div
                    ref={hairColorPickerRef}
                    className="absolute z-10 top-10 max-lg:-left-[10rem]"
                  >
                    <HexColorPicker color={"#00FFF4"} onChange={setHairColor} />
                  </div>
                )}
              </div>
            </label>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <h4 className="text-gray-100 font-[600]">Wish </h4>
            <FaQuestionCircle className="text-gray-100 font-[600] cursor-pointer" />
            <Select
              defaultValue="English"
              style={{ width: 120 }}
              bordered={false}
              options={[
                { value: "English", label: "English" },
                { value: "Ukranian", label: "Ukranian" },
              ]}
            />
          </div>

          <div className="mt-6">
            <textarea
              className="px-4 py-2 bg-[#374151] border-2 border-[rgb(75,85,99)] rounded-md  text-white outline-none focus:border-[#31b14e] w-full mt-2 min-h-[80px]"
              placeholder="Hello, ! These adventures are about you, to start them, turn to the next page!"
            />
            <p className="text-center text-[#FCA5A5] text-[14px]">
              This text will be displayed on the book
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <h4 className="text-gray-100 font-[600]">Add a photo </h4>
            <FaQuestionCircle className="text-gray-100 font-[600] cursor-pointer" />

            <Switch onChange={handleSwitchChange} />
          </div>

          <button className="block w-full px-6 py-3 mt-8 text-lg font-medium text-white border border-transparent border-purple-500 rounded-md shadow-md first-letter: bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 ">
            Go to book selection
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomizeToolbar;
