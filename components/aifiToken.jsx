import React from "react";

const AifiToken = () => {
  const data = [
    {
      title: "AIFI Token (AIFI)",
      text: "Upon issuance, AIFI grants access to participation in the AIFI DAO.",
    },
    {
      title: "AIFI Token (AIFI)",
      text: "Upon issuance, AIFI grants access to participation in the AIFI DAO.",
    },
    {
      title: "AIFI Token (AIFI)",
      text: "Upon issuance, AIFI grants access to participation in the AIFI DAO.",
    },
    {
      title: "AIFI Token (AIFI)",
      text: "Upon issuance, AIFI grants access to participation in the AIFI DAO.",
    },
  ];

  return (
    <div className="mt-[2rem] overflow-x-hidden">
      <h1 className="text-[#1E1F25] text-[4.8125rem] uppercase max-lg:text-center max-md:text-[1.875rem]">
        AIFI Token
      </h1>
      <div className="lg:grid grid-cols-2 gap-4 mt-[1.5rem]">
        {data.map((item) => (
          <div className="md:w-[38.5625rem] h-[8.125rem] border-2 border-[#1E1F25] border-dashed border-1 flex flex-col justify-center pl-[.7rem] mt-[.5rem]">
            <h1 className="text-[#1E1F25] text-[1.375rem] uppercase">
              {item.title}
            </h1>
            <p className="text-[#1E1F25] text-[0.9375rem] font-normal italic mb-[0rem] mt-[.4rem]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AifiToken;
