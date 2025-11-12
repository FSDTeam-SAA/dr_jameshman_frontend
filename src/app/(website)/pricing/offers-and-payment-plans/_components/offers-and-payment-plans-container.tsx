import { CreditCard, FileText, Percent, Users } from "lucide-react";
import React from "react";

const OffersAndPaymentPlanContainer = () => {
  return (
    <div className="py-10 md:py-16 lg:py-24">
      <div className="container ">
        {/* <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold text-primary leading-[150%]">
          Get to know our story, our mission, and the team dedicated to your
          dental health.
        </h3> */}
        <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold text-primary leading-[150%] pb-3 md:pb-4  pt-6 md:pt-10 lg:pt-11">
          Making Great Smiles Affordable
        </h2>
        <p className="text-base md:text-lg lg:text-xl font-normal text-black leading-[150%]">
          At <strong>Perrystown Orthodontics,</strong> we believe every family deserves access to
          quality orthodontic care. We offer a <strong>FREE consultation for all
          treatments,</strong> giving you the chance to meet our team, explore your
          options, without any commitment or cost.
        </p>

        <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold text-primary leading-[150%] pt-10 md:pt-16 lg:pt-24">
          Flexible Payment Plans & Offers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 py-6 md:py-8 lg:py-10">
          {/* first  */}
          <div className="md:col-span-1 border-l-[4px] border-[#3B82F6]  shadow-[0px_4px_10px_0px_#00000026] rounded-[16px] px-4 py-6 md:py-7 lg:py-8">
            <div className="flex items-center gap-2">
              <span className="p-3.5 bg-[#DBEAFE] rounded-full inline-flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-[#2563EB]" />
              </span>
              <span className="text-lg md:text-xl font-bold text-[#111827] leading-[120%]">
                Monthly Payments with 0% Interest
              </span>
            </div>
            <p className="text-sm font-normal text-[#4B5563] leading-[120%] py-3 md:py-4">
              Start treatment with an upfront payment from €500, then spread the
              remaining balance across easy monthly instalments with no interest
              added.
            </p>
          </div>
          {/* second  */}
          <div className="md:col-span-1 border-l-[4px] border-[#22C55E] shadow-[0px_4px_10px_0px_#00000026] rounded-[16px] px-4 py-6 md:py-7 lg:py-8">
            <div className="flex items-center gap-2">
              <span className="p-3.5 bg-[#DCFCE7] rounded-full inline-flex items-center justify-center">
                <Percent className="w-8 h-8 text-[#16A34A]" />
              </span>
              <span className="text-lg md:text-xl font-bold text-[#111827] leading-[120%]">
                5% Discount for Full Payment
              </span>
            </div>
            <p className="text-sm font-normal text-[#4B5563] leading-[120%] py-3 md:py-4">
              Pay the full treatment fee at the start and receive a 5% saving.
            </p>
          </div>
          {/* three  */}
          <div className="md:col-span-1 border-l-[4px] border-[#A855F7]  shadow-[0px_4px_10px_0px_#00000026] rounded-[16px] px-4 py-6 md:py-7 lg:py-8">
            <div className="flex items-center gap-2">
              <span className="p-3.5 bg-[#F3E8FF] rounded-full inline-flex items-center justify-center">
                <Users className="w-8 h-8 text-[#9333EA]" />
              </span>
              <span className="text-lg md:text-xl font-bold text-[#111827] leading-[120%]">
                10% Family & Friends Discount
              </span>
            </div>
            <p className="text-sm font-normal text-[#4B5563] leading-[120%] py-3 md:py-4">
              When a family member or friend starts treatment with us, you will
              receive a 10% discount as our way of saying thank you for letting
              us care for the people you love.
            </p>
          </div>
          {/* four  */}
          <div className="md:col-span-1 border-l-[4px] border-[#F97316] shadow-[0px_4px_10px_0px_#00000026] rounded-[16px] px-4 py-6 md:py-7 lg:py-8">
            <div className="flex items-center gap-2">
              <span className="p-3.5 bg-[#FFEDD5] rounded-full inline-flex items-center justify-center">
                <FileText className="w-8 h-8 text-[#EA580C]" />
              </span>
              <span className="text-lg md:text-xl font-bold text-[#111827] leading-[120%]">
                MED2 Tax Relief
              </span>
            </div>
            <p className="text-sm font-normal text-[#4B5563] leading-[120%] py-3 md:py-4">
              You may be entitled to claim back 20% of the total treatment cost
              through the MED2 tax form, making orthodontic treatment even more
              cost-effective.
            </p>
          </div>
        </div>

        {/* Seasonal Offers:  */}
        <div className="border border-[#E5E7EB] py-4 md:py-5 lg:py-[26px] px-4 rounded-[8px] bg-[#F9FAFB]">
          <p className="text-xs font-normal text-[#4B5563] leading-[120%]">
            <strong className="font-bold text-[#111827]">Seasonal Offers :</strong>{" "}
             We also run special seasonal promotions throughout the year. Get in touch with our friendly team to find out what’s currently available.  
          </p>
        </div>
        {/* notes  */}
        <div className="border border-[#E5E7EB] py-4 md:py-5 lg:py-[26px] px-4 rounded-[8px] bg-[#F9FAFB]  mt-6 md:mt-8 lg:mt-10">
          <p className="text-xs font-normal text-[#4B5563] leading-[120%]">
            <strong className="font-bold text-[#111827]">Please note :</strong>{" "}
            Discounts cannot be combined or stacked. If more than one discount
            applies or multiple people are referred, only one discount will be
            used, whichever offers the greater value. All treatment fees must be
            paid in full prior to completion of treatment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OffersAndPaymentPlanContainer;
