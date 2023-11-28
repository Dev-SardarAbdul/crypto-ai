import React from "react";

const Artidevelopment = () => {
  const data = [
    {
      title: "Pipeline",
      text: "Implementing and automating the procedure to regularly update the model with real-time data.",
    },
    {
      title: "Model Re-Training",
      text: `Incremental learning involves training a machine learning model with new data, avoiding the need to retrain the entire model from the beginning. This proves especially beneficial for datasets that undergo constant changes or in situations where storing and processing all the data at once is impractical.`,
    },
    {
      title: "Monitoring",
      text: `Consistently observe the model's performance and the system's overall health. Detecting any decline in the model's performance or identifying issues with the system is crucial for prompt corrective action. Immediate awareness allows us to take necessary measures in a timely manner.`,
    },
  ];

  return (
    <div className="mt-[4rem] pb-[4rem]">
      <h1 className="text-[#1E1F25] text-[4.8125rem] uppercase max-lg:text-center max-md:text-[1.875rem]">
        ARTI Development
      </h1>
      <div className="mt-[6rem]">
        {data.map((item) => (
          <div className="py-[1.5rem] border border-[#88837E] border-solid border-1 flex flex-col justify-center pl-[1rem] mt-[2rem] rounded-[0.5625rem] pr-[2rem]">
            <h1 className="text-[#1E1F25] text-[1.375rem] uppercase">
              {item.title}
            </h1>
            <p className="text-[#1E1F25] text-[0.9375rem] font-normal italic mb-[0rem] mt-[.5rem]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artidevelopment;
