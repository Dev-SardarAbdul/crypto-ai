import React, { useState } from "react";
import Image from "next/image";
import { IoMdCloseCircle } from "react-icons/io";

function ImageUploader() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage && selectedImage instanceof Blob) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setUploadedImage(reader.result);
        }
      };
      reader.readAsDataURL(selectedImage);
    } else {
      alert("Please select a valid image file.");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 ">
        <div className="relative w-[300px]">
          <label htmlFor="image" className="w-full">
            <div className="flex items-center justify-center w-full h-full bg-gray-900 rounded-md cursor-pointer aspect-square bg-opacity-40">
              {uploadedImage ? (
                <div className="relative ">
                  <Image
                    src={uploadedImage}
                    alt="Uploaded"
                    width={10}
                    height={10}
                    className="w-[300px] h-[300px] aspect-square rounded-md cursor-default"
                  />
                </div>
              ) : (
                <p className="text-center text-gray-100 font-[600] text-[16px]">
                  You can upload photo here
                </p>
              )}
            </div>
          </label>
          {uploadedImage && (
            <IoMdCloseCircle
              className="absolute text-gray-100 cursor-pointer -top-1 -right-1 text-[32px] bg-[#1F2937] rounded-full p-1 z-10"
              onClick={() => setUploadedImage(null)}
            />
          )}
        </div>
        <input
          type="file"
          style={{ display: "none" }}
          id="image"
          onChange={handleImageChange}
          accept="image/*"
        />

        <p className="text-center text-[#FCA5A5] text-[14px]">
          This photo will be displayed on the wishes page
        </p>
      </div>
    </div>
  );
}

export default ImageUploader;
