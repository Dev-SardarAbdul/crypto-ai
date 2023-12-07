import React from "react";

const AdditionalGoods = () => {
  const cardData = [
    {
      image:
        "https://5smtzctf.cdn.imgeng.in/1683946742181%D0%94%D0%B6%D1%83%D0%BD%D0%B3%D0%BB%D0%B8.png?imgeng=/w_510/f_webp",
      title: "Jungle",
      text: `Large jungle coloring page 60x90 cm We present to your attention a very large coloring page, which your child will be delighted with!`,
      price1: "290₴",
      price2: "232₴",
      btn1text: "To the basket",
      btn2text: "Details",
    },
    {
      image:
        "https://5smtzctf.cdn.imgeng.in/1683950947152%D0%9C%D0%BE%D1%80%D1%81%D0%BA%D0%B0%D1%8F.png?imgeng=/w_510/f_webp",
      title: "Treasures",
      text: `Big treasure coloring page 60x90 cm We present to your attention a really big coloring page, which your child will be delighted with!`,
      price1: "290₴",
      price2: "232₴",
      btn1text: "To the basket",
      btn2text: "Details",
    },
    {
      image:
        "https://5smtzctf.cdn.imgeng.in/1684758416939colorpaint1in2.png?imgeng=/w_510/f_webp",
      title: "Treasures+Jungle",
      text: `Large Treasures + Jungle coloring pages 60x90 cm We present to your attention very large coloring pages that your child will be delighted with!`,
      price1: "450₴",
      price2: "360₴",
      btn1text: "To the basket",
      btn2text: "Details",
    },
    {
      image:
        "https://5smtzctf.cdn.imgeng.in/1695823046994IMG_1018.JPG?imgeng=/w_510/f_webp",
      title: "The knitted hero of the book",
      text: `We create this doll with the help of threads, buttons, and most importantly - love.`,
      price1: "1,390₴",
      price2: "1,112₴",
      btn1text: "To the basket",
      btn2text: "Details",
    },
  ];

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:mt-[2rem]">
      <div className="py-12 sm:py-16 lg:mx-auto lg:max-w-7xl ">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-4xl font-bold tracking-tight text-[#f4f5f6]">
            <font>Additional Goods</font>
          </h2>
        </div>
        <div className="relative mt-8 z-[1]">
          <div className="w-full pb-6 -mb-6 overflow-x-auto">
            <div
              role="list"
              className="inline-flex mx-4 sm:mx-6 lg:mx-0 gap-x-8 "
            >
              {cardData.map((item, index) => (
                <div key={index}>
                  <div className="fixed hidden w-1 h-0 p-0 overflow-hidden whitespace-no-wrap border-0 top-1 left-1 m-n1 clip-hidden"></div>
                  <div className="flex rounded-lg border shrink-0 max-w-[280px] border-gray-600 px-2 py-3 bg-gray-700 flex-col text-center overflow-hidden">
                    <div className="">
                      <div className="bg-gray-200 overflow-hidden m-auto w-[240px] h-[267px]">
                        <div className="rounded-md relative text-[#353535] z-[9] w-[100%] h-[100%]">
                          <div className="absolute w-full h-full mx-auto">
                            <div className="relative w-full h-full ">
                              <span className="box-border absolute inset-0 block p-0 m-0 overflow-hidden border-0 opacity-100 w-initial h-initial bg-none">
                                <img
                                  alt="background"
                                  src={item.image}
                                  decoding="async"
                                  data-nimg="fill"
                                  className="box-border absolute inset-0 block object-fill w-0 h-0 max-w-full max-h-full min-w-full min-h-full p-0 mx-auto border-none"
                                  sizes="100vw"
                                />
                              </span>
                            </div>
                          </div>
                          <div className="absolute w-full h-full mx-auto"></div>
                          <div className="absolute mix-blend-multiply mx-auto h-full w-full filter brightness-0 saturate-100 invert-[57%] sepia-[99%] saturate-1130 hue-rotate-169 brightness-102 contrast-103"></div>
                          <div className="absolute w-full h-full mx-auto"></div>
                          <div className="absolute w-full h-full mx-auto mix-blend-multiply filter brightness-0 saturate-100 invert-88 sepia-33 saturate-528 hue-rotate-1 brightness-99 contrast-96"></div>
                          <div className="absolute w-full h-full mx-auto"></div>
                          <div className="absolute w-full h-full mx-auto"></div>
                          <div className="absolute mx-auto">
                            <div className="absolute whitespace-normal transform translate-x-10 translate-y-10 w-200 h-200"></div>
                          </div>
                          <div className="absolute w-full h-full"></div>
                        </div>
                      </div>
                      <div className="mt-6 flex flex-col min-h-[220px]">
                        <h3 className="text-xl font-semibold text-[#f3f4f6]">
                          {item.title}
                        </h3>
                        <h4 className="mt-1 text-gray-400 whitespace-pre-wrap">
                          {item.text}
                        </h4>
                        <div className="items-end flex-grow flex justify-center mt-1 text-[#22C55E] gap-2">
                          <p className="line-through decoration-white">
                            {item.price1}
                          </p>
                          <p className="mt-1 text-pink-500">{item.price2}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center pt-6 my-4 space-x-3">
                      <button
                        type="button"
                        className="border border-transparent font-medium inline-flex items-center justify-center shadow-md bg-[#22C55E] hover:bg-green-500 rounded-md text-base py-2 px-3  w-1/2 text-[#f4f5f6]"
                      >
                        <div className="w-[25px] h-[25px] border-4 border-primaryGreen dark:border-white border-dotted rounded-full animate-spin border-white hidden border-t-transparent"></div>
                        <div className="inline-flex items-center justify-center w-full">
                          <font>{item.btn1text}</font>
                        </div>
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center w-1/2 px-5 py-2 text-base font-medium text-gray-900 bg-gray-200 border border-transparent rounded-md shadow-md hover:bg-gray-100 focus:ring-gray-200"
                      >
                        <div className="w-[25px] h-[25px] border-4 border-primaryGreen dark:border-white border-dotted rounded-full animate-spin  hidden border-t-transparent"></div>
                        <div className="inline-flex items-center justify-center w-full">
                          <font>{item.btn2text}</font>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalGoods;
