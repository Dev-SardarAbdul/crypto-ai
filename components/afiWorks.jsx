import Image from "next/image";
import React from "react";
import afiWorksMainImg from "@/public/images/afiWorksMainImg.png";
import textImg from "@/public/images/textImg.png";

const data = [
  {
    id: 1,
    header: "Machine Learning",
    text: ` AIFI has undergone theoretical, testing, and concurrent training for nearly a year.`,
  },
  {
    id: 2,
    header: " Machine Design",
    text: `For any AI model, the initial definition and ultimate determination of each set of input data are crucial for training the algorithm.\nAIFI's machine learning team currently acquires data block by block and coin price data through one-minute feeds during\nmodeling. This approach is driven by specific considerations: \n- Different chains have varying update frequencies.\n- Block-by-block APY data is quantifiable and encompasses numerous other metrics.\n- One-minute token price data is crucial for selling native protocol tokens in a volatile market during farming operations..`,
  },
  {
    id: 3,
    header: "Training AIFI to optimize yield farming efficiency.",
    text: `Protocols often use their native tokens as rewards to boost their APYs. Live test was conducted on Stargate to showcase the \ncompetitive advantage gained as AIFI sells native token rewards.`,
  },
];

function AfiWorks() {
  return (
    <div className="mt-[4rem] pb-[4rem] relative z-10">
      <h1 className="text-[#1E1F25] text-[4.8125rem] uppercase max-lg:text-center max-md:text-[1.875rem]">
        How AIFI works
      </h1>
      <div className="flex flex-col-reverse lg:flex-row mt-16 gap-8 xl:gap-16">
        <div className="flex justify-center lg:justify-start">
          <Image src={afiWorksMainImg} height={375} />
        </div>
        <div className="flex-1">
          {data?.map((item, index) => (
            <div className={index > 0 ? "mt-8" : ""}>
              <h1 className="flex justify-start gap-4 text-[#1E1F25] text-[20px] font-[500] uppercase">
                <Image src={textImg} /> {item?.header}
              </h1>
              <p className=" text-[#1E1F25] text-[16px] mt-4 whitespace-pre-line">
                {item?.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AfiWorks;
