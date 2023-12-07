import React from "react";

const Book = () => {
  const bookData = [
    {
      image:
        "https://5smtzctf.cdn.imgeng.in/1695993946002sea.png?imgeng=/w_510/f_webp",
      title: "Adventures on Treasure Island",
      text: `Our little hero got into a whirlwind of heart-breaking
      adventures`,
      readmoretext: "Read more",
      date: "from 249₴",
    },
    {
      image:
        "https://5smtzctf.cdn.imgeng.in/1695993924880jungle.png?imgeng=/w_510/f_webp",
      title: "Adventures on Treasure Island",
      text: `Exciting Adventures is a super bargain, it's one
      book`,
      readmoretext: "Read more",
      date: "from 249₴",
    },
    {
      image:
        "https://5smtzctf.cdn.imgeng.in/1695993986127duble.png?imgeng=/w_510/f_webp",
      title: "Exciting Adventures",
      text: `Exciting Adventures is a super bargain, it's one
      book`,
      readmoretext: "Read more",
      date: "from 399₴",
    },
  ];

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mt-[4rem]">
        <h2 className="text-4xl font-bold tracking-tight text-[#f3f4f6]">
          Books
        </h2>
        <div className="relative mt-8">
          <div className="relative w-full py-6 -mb-6 overflow-x-auto lg:overflow-x-clip">
            <div
              role="list"
              className="inline-flex gap-2 mx-6 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-2 lg:gap-y-12"
            >
              {bookData.map((item, index) => (
                <div
                  className="inline-flex w-[19rem] flex-col text-center mx-auto"
                  key={index}
                >
                  <div className="group">
                    <div className="relative main-cover m-auto w-[310px] h-[390px]">
                      <div className="main-book-front">
                        <a href="">
                          <div className="relative w-full h-full">
                            <span className="box-border absolute inset-0 block p-0 m-0 overflow-hidden border-0 opacity-100 w-initial h-initial bg-none">
                              <img
                                alt="product cover book"
                                src={item.image}
                                decoding="async"
                                data-nimg="fill"
                                className="box-border absolute inset-0 block object-fill w-0 h-0 max-w-full max-h-full min-w-full min-h-full p-0 mx-auto border-none"
                                sizes="100vw"
                              />
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-xl text-gray-100">{item.title}</p>
                      <div className="mt-2">
                        <p>
                          <span className="text-gray-400">
                            {item.text}{" "}
                            <span className="text-blue-500 cursor-pointer">
                              <font>&nbsp;...&nbsp; </font>
                              {item.readmoretext}
                            </span>
                          </span>
                        </p>
                      </div>
                      <p className="mt-2 text-[#31B14E]">{item.date}</p>
                      <a
                        className="inline-flex items-center justify-center px-4 py-2 mt-4 text-xl font-medium text-white border border-purple-500 rounded-md cursor-pointer bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 small"
                        href=""
                      >
                        <font>Order</font>
                      </a>
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

export default Book;
