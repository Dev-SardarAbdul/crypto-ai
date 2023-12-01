import Image from "next/image";
import React from "react";
import tokenomicsStars from "@/public/images/tokenomicsStars.png";

const data = [
  {
    id: 1,
    header: "Liquidity Fool (LF):",
    percentage: "20%",
    subText:
      "20% for the Crypto Abyss Lifeguard – ensuring our liquidity doesn't drown in a sea of confusion.",
  },
  {
    id: 2,
    header: "Marketing Mayhem:",
    percentage: "15%",
    subText:
      "15% for spreading the chaos – because marketing should be as unpredictable as a coin toss.",
  },
  {
    id: 3,
    header: "Tax Tangle:",
    percentage: "10%",
    subText:
      "10% for the Tax Goblins – they demand their share in the currency of chaos, of course.",
  },
  {
    id: 4,
    header: "Team Shenanigans:",
    percentage: "5%",
    subText:
      "5% for the Team Wizards – responsible for magically transforming caffeine into lines of code.",
  },
  {
    id: 5,
    header: "Total Token Supply:",
    percentage: "100%",
    subText: "(because 110% would just be too logical).",
  },
];

function Tokenomics() {
  return (
    <div className="overflow-hidden relative py-12 ">
      <Image
        src={tokenomicsStars}
        alt="star image"
        className="absolute top-4 right-0"
      />
      <h1 className="text-[50px] sm:text-[80px] text-black leading-[117px] text-center mt-[8rem]">
        Tokenomics Section
      </h1>

      <div className="mt-12 grid lg:grid-cols-2 gap-16">
        {data?.map((item) => (
          <div
            className={`w-full h-auto sm:h-[300px] sm:px-8 px-2 py-4  border-[3px] border-black shadow-tokenomicsShadow bg-[#EFC14E]`}
            key={item.id}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <h1 className="text-[34px] text-black text-center">
                {item?.header}{" "}
              </h1>
              <h1 className="text-[63px] text-black">{item?.percentage}</h1>
            </div>
            <p className="text-[25px] text-black text-center mt-4">
              {item?.subText}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tokenomics;
