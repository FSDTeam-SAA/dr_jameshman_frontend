import { ArrowRight, CreditCard, DollarSign } from "lucide-react";
import Link from "next/link";
import React from "react";

const FeesContainer = () => {
  return (
    <div className="pb-10 md:pb-16 lg:pb-24">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div className="md:col-span-1 border-[2px] border-black/0 shadow-[0px_4px_10px_0px_#00000026] rounded-[16px] px-4 py-6 md:py-7 lg:py-8">
          <div className="flex items-center gap-2">
            <span className="p-3.5 bg-[#DBEAFE] rounded-full inline-flex items-center justify-center">
              <DollarSign className="w-8 h-8 text-[#2563EB]" />
            </span>
            <span className="text-lg md:text-xl font-bold text-[#111827] leading-[120%]">
              Fees
            </span>
          </div>
          <p className="text-sm font-normal text-[#4B5563] leading-[120%] py-3 md:py-4">
            View our complete fee schedule for consultations, braces, clear
            aligners, and retainers.{" "}
          </p>
          <Link href="/pricing/treatments-fees">
            <button className="flex items-center gap-2 text-primary text-sm font-semibold leading-[120%] hover:underline">
              View Fees <ArrowRight className="w-4 h-4 text-primary" />
            </button>
          </Link>
        </div>
        <div className="md:col-span-1 border-[2px] border-black/0 shadow-[0px_4px_10px_0px_#00000026] rounded-[16px] px-4 py-6 md:py-7 lg:py-8">
          <div className="flex items-center gap-2">
            <span className="p-3.5 bg-[#DCFCE7] rounded-full inline-flex items-center justify-center">
              <CreditCard className="w-8 h-8 text-[#16A34A]" />
            </span>
            <span className="text-lg md:text-xl font-bold text-[#111827] leading-[120%]">
              Offers & Payment Plans
            </span>
          </div>
          <p className="text-sm font-normal text-[#4B5563] leading-[120%] py-3 md:py-4">
            View our complete fee schedule for consultations, braces, clear
            aligners, and retainers.
          </p>
          <Link href="/pricing/offers-and-payment-plans">
            <button className="flex items-center gap-2 text-primary text-sm font-semibold leading-[120%] hover:underline">
              View Fees <ArrowRight className="w-4 h-4 text-primary" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeesContainer;
