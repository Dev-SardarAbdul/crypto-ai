import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function TermsAndConditions() {
  return (
    <section className="px-4 pb-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex items-center justify-start gap-1 mt-4">
        <p className="text-[16px] text-[rgb(229,231,235)] font-[500]">Main</p>
        <IoIosArrowForward className="text-[16px] text-[rgb(229,231,235)] font-[500]" />
        <p className="text-[16px] text-gray-400 font-[500]">
          Payment and delivery
        </p>
      </div>

      <div className="flex flex-col w-full gap-16 mt-16 lg:flex-row">
        <div className="w-full lg:w-[400px] lg:pr-8">
          <h2 className="text-[rgb(229,231,235)] text-[30px] font-[800]">
            Terms of the agreement
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between w-full gap-4 py-8 mt-8 border-t border-b border-[#e5e7eb] lg:items-center lg:flex-row">
        <h2 className="text-[rgb(229,231,235)] text-medium font-[800] flex-1">
          Payment
        </h2>
        <h2 className="text-[rgb(229,231,235)] text-medium font-[800] lg:w-3/5">
          Payment for the book is made after its creation in the basket, after
          which it goes to the printing machine and appears in a single copy.
          You can pay with Visa and MasterCard or using Apple Pay and Google
          Pay. It is also possible to place an order with a prepayment of 30% of
          the order amount, and pay the rest when received at Nova Poshta
        </h2>
      </div>

      <div className="flex flex-col items-start justify-between w-full gap-4 py-8   border-b border-[#e5e7eb] lg:items-center lg:flex-row">
        <h2 className="text-[rgb(229,231,235)] text-medium font-[800] flex-1">
          Delivery
        </h2>
        <h2 className="text-[rgb(229,231,235)] text-medium font-[800] lg:w-3/5">
          Delivery is carried out with the help of the company "Nova Poshta".
          You can choose delivery to the branch or address delivery by courier.
          Payment according to the carrier's tariffs.
        </h2>
      </div>

      <div className="flex flex-col items-start justify-between w-full gap-4 py-8 lg:items-center lg:flex-row">
        <h2 className="text-[rgb(229,231,235)] text-medium font-[800] flex-1">
          Return
        </h2>
        <h2 className="text-[rgb(229,231,235)] text-medium font-[800] lg:w-3/5">
          We will give you a full refund or partial refund if there is a
          manufacturing defect if you take a photo of the defect, but it is
          unlikely that this will happen as we carefully inspect each shoe
          before shipping.
        </h2>
      </div>
    </section>
  );
}

export default TermsAndConditions;
