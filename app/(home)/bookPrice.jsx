import React from "react";

const BookPrice = () => {
  return (
    <div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="">
          <div className="relative pt-32 overflow-hidden pb-96 lg:pt-40">
            <div>
              <img
                className="absolute bottom-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2"
                src="https://5smtzctf.cdn.imgeng.in/1675266937857grid-blur-purple-on-black.jpg?imgeng=/w_1410/f_webp"
                alt="pricing background"
                loading="lazy"
              />
            </div>
            <div className="relative px-6 mx-auto text-center max-w-7xl lg:px-8">
              <div className="max-w-3xl mx-auto lg:max-w-5xl">
                <p className="mt-2 text-4xl font-bold tracking-tigh text-[#f3f4f6]">
                  Choose the best book format for you
                </p>
              </div>
            </div>
          </div>
          <div className="flow-root pb-8 lg:pb-16">
            <div className="relative -mt-80">
              <div className="relative z-10 px-6 mx-auto max-w-8xl lg:px-10">
                <div className="grid max-w-md grid-cols-1 gap-8 mx-auto md:max-w-3xl md:grid-cols-2 lg:max-w-7xl lg:grid-cols-4 lg:gap-4">
                  <div className="flex flex-col bg-gray-900 border border-gray-600 shadow-xl rounded-3xl">
                    <div className="relative px-6 pt-8 sm:px-8 sm:pt-10">
                      <p className="absolute top-0 py-1.5 px-4 bg-[#31B14E] text-[12px] md:text-[16px] rounded-full uppercase transform -translate-y-1/2 text-[#f3f4f6]">
                        The most popular
                      </p>
                      <h3
                        className="text-lg font-semibold leading-8 tracking-tigh text-[#f3f4f6]"
                        id="tier-hobby"
                      >
                        Hard cover
                      </h3>
                      <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tigh text-[#f3f4f6]">
                        ₴890
                        <span className="text-lg font-semibold leading-8 tracking-normal text-gray-300">
                          / book
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-2">
                      <div className="flex flex-col justify-between flex-1 p-6 rounded-2xl sm:p-4">
                        <ul role="list" className="space-y-6">
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6 text-[#31B14E]"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-300">
                              Very strong format is the most popular option
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6 text-[#31B14E]"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-300">
                              Chalked paper, 2.8 mm hard cardboard cover with
                              matte lamination, thread stitching.
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6 text-[#31B14E]"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-300">
                              Coloring book on 16 pages as a gift!
                            </p>
                          </li>
                        </ul>
                        <div className="mt-8">
                          <a
                            className="inline-flex items-center justify-center w-full px-4 py-2 text-xl font-medium text-white border border-purple-500 rounded-md cursor-pointer bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 small"
                            href="/advantures/constructor?type=hard"
                          >
                            <font>Create a book</font>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col bg-gray-900 border border-gray-600 shadow-xl rounded-3xl">
                    <div className="relative px-6 pt-8 sm:px-8 sm:pt-10">
                      <p className="absolute top-0 py-1.5 px-4 bg-[#FFFF66] text-[12px] text-black md:text-[16px] rounded-full uppercase transform -translate-y-1/2">
                        <font>
                          <font>A profitable offer</font>
                        </font>
                      </p>
                      <h3
                        className="text-lg font-semibold leading-8 tracking-tigh text-[#f3f4f6]"
                        id="tier-team"
                      >
                        <font>
                          <font>Soft cover</font>
                        </font>
                      </h3>
                      <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tigh text-[#f3f4f6]">
                        <font>
                          <font>₴ </font>
                        </font>
                        <font>
                          <font>690</font>
                        </font>
                        <span className="text-lg font-semibold leading-8 tracking-normal text-gray-300">
                          <font>
                            <font>/ book</font>
                          </font>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-2">
                      <div className="flex flex-col justify-between flex-1 p-6 rounded-2xl sm:p-4">
                        <ul role="list" className="space-y-6">
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6 text-[#31B14E]"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-300">
                              <font>
                                <font>Paperback format available.</font>
                              </font>
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6 text-[#31B14E]"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-300">
                              <font>
                                <font>
                                  Chalked paper, soft cardboard cover with matte
                                  lamination, wire stitching (on a staple)
                                </font>
                              </font>
                            </p>
                          </li>
                        </ul>
                        <div className="mt-8">
                          <a
                            className="inline-flex items-center justify-center w-full px-4 py-2 text-xl font-medium text-white border border-purple-500 rounded-md cursor-pointer bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 small"
                            href="/advantures/constructor?type=soft"
                          >
                            <font>
                              <font>Create a book</font>
                            </font>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col bg-gray-900 border border-gray-600 shadow-xl rounded-3xl">
                    <div className="relative px-6 pt-8 sm:px-8 sm:pt-10">
                      <p className="absolute top-0 py-1.5 px-4 bg-pink-500 text-[12px] md:text-[16px] rounded-full uppercase transform -translate-y-1/2 text-[#f3f4f6]">
                        <font>
                          <font>Novelty</font>
                        </font>
                      </p>
                      <h3
                        className="text-lg font-semibold leading-8 tracking-tigh text-[#f3f4f6]"
                        id="new-product"
                      >
                        <font>
                          <font>Double book</font>
                        </font>
                      </h3>
                      <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tigh text-[#f3f4f6]">
                        <font>
                          <font>₴ </font>
                        </font>
                        <font>
                          <font>1490</font>
                        </font>
                        <span className="text-lg font-semibold leading-8 tracking-normal text-gray-300">
                          <font>
                            <font>/ book</font>
                          </font>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-2">
                      <div className="flex flex-col justify-between flex-1 p-6 rounded-2xl sm:p-4">
                        <ul role="list" className="space-y-6">
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6 text-[#31B14E]"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-300">
                              <font>
                                <font>Two stories in one book, 88 pages</font>
                              </font>
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6 text-[#31B14E]"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-300">
                              <font>
                                <font>
                                  The benefit is UAH 190 compared to two hard
                                  books
                                </font>
                              </font>
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6 text-[#31B14E]"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-300">
                              <font>
                                <font>
                                  Very strong format is the most popular option
                                </font>
                              </font>
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6 text-[#31B14E]"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-300">
                              <font>
                                <font>
                                  Chalked paper, 2.8 mm hard cardboard cover
                                  with matte lamination, thread stitching.
                                </font>
                              </font>
                            </p>
                          </li>
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6 text-[#31B14E]"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-300">
                              <font>
                                <font>
                                  Coloring book on 16 pages as a gift!
                                </font>
                              </font>
                            </p>
                          </li>
                        </ul>
                        <div className="mt-8">
                          <a
                            className="inline-flex items-center justify-center w-full px-4 py-2 text-xl font-medium text-white border border-purple-500 rounded-md cursor-pointer bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 small"
                            href="/advantures/constructor?type=double"
                          >
                            <font>
                              <font>Create a book</font>
                            </font>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col bg-gray-900 border border-gray-600 shadow-xl rounded-3xl">
                    <div className="relative px-6 pt-8 sm:px-8 sm:pt-10">
                      <p className="absolute top-0 py-1.5 px-4 bg-pink-500 text-[12px] md:text-[16px] rounded-full uppercase transform -translate-y-1/2 text-[#f3f4f6]">
                        <font>
                          <font>Novelty</font>
                        </font>
                      </p>
                      <h3
                        className="text-lg font-semibold leading-8 tracking-tigh text-[#f3f4f6]"
                        id="digital1"
                      >
                        <font>
                          <font>Digital version</font>
                        </font>
                      </h3>
                      <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tigh text-[#f3f4f6]">
                        <font>
                          <font>₴ </font>
                        </font>
                        <font>
                          <font>249</font>
                        </font>
                        <span className="text-lg font-semibold leading-8 tracking-normal text-gray-300">
                          <font>
                            <font>/ book</font>
                          </font>
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 p-2">
                      <div className="flex flex-col justify-between flex-1 p-6 rounded-2xl sm:p-4">
                        <ul role="list" className="space-y-6">
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6 text-[#31B14E]"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                ></path>
                              </svg>
                            </div>
                            <p className="ml-3 text-sm leading-6 text-gray-300">
                              <font>
                                <font>
                                  All the advantages of our books, but without
                                  paper!{" "}
                                </font>
                                <font>
                                  Only electronic format in PDF format, which
                                  will be sent to you by email
                                </font>
                              </font>
                            </p>
                          </li>
                        </ul>
                        <div className="mt-8">
                          <a
                            className="inline-flex items-center justify-center w-full px-4 py-2 text-xl font-medium text-white border border-purple-500 rounded-md cursor-pointer bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 small"
                            href="/advantures/constructor?type=digital"
                          >
                            <font>
                              <font>Create a book</font>
                            </font>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPrice;
