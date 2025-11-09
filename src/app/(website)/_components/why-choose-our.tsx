import { Clock, CreditCard, Frown, Shield, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const WhyChooseOur = () => {
  return (
    <div className="bg-[#F1F1F1] pt-10 md:pt-0">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
        <div className="md:col-span-1 w-full flex flex-col justify-center">
          <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold text-[#2F2F2F] leading[150%] pb-3 md:pb-4 lg:pb-5">
            Why Choose Our{" "}
            <span className="text-primary">Specialist Practice</span>
          </h3>
          <p className="text-sm md:text-base text-[#68706A] leading-[150%] font-normal">
            Our team are registered Specialist Orthodontists, dedicated to gentle, expert care and the latest treatments to create healthy, confident smiles for all ages.
          </p>
          <ul className="pt-6 md:pt-8">
            <li className=" py-2 md:py-4">
              <span className="flex items-center gap-2 text-lg md:text-xl font-medium text-[#2F2F2F] leading-[120%]">
                <Shield className="w-5 h-5 text-primary" /> Specialist Expertise
              </span>
              <span className="text-sm md:text-base font-[#505050] text-[#505050] leading-[120%] pt-2">
                Our orthodontists are specialists with years of dedicated
                training and experience.
              </span>
            </li>
            <li className=" py-2 md:py-4">
              <span className="flex items-center gap-2 text-lg md:text-xl font-medium text-[#2F2F2F] leading-[120%]">
                <Star className="w-5 h-5 text-primary" />
                Latest Technology
              </span>
              <span className="text-sm md:text-base font-[#505050] text-[#505050] leading-[120%] pt-2">
                We use advanced digital scanning and treatment planning for
                precise results.
              </span>
            </li>
            <li className=" py-2 md:py-4 ">
              <span className="flex items-center gap-2 text-lg md:text-xl font-medium text-[#2F2F2F] leading-[120%]">
                <Frown className="w-5 h-5 text-primary" /> As an
                Focused Care
              </span>
              <span className="text-sm md:text-base font-[#505050] text-[#505050] leading-[120%] pt-2">
                As an orthodontics-only practice, we&apos;re 100% focused on creating beautiful smiles.
              </span>
            </li>
            <li className=" py-2 md:py-4">
              <span className="flex items-center gap-2 text-lg md:text-xl font-medium text-[#2F2F2F] leading-[120%]">
                <Clock className="w-5 h-5 text-primary" /> Convenient
                Appointments
              </span>
              <span className="text-sm md:text-base font-[#505050] text-[#505050] leading-[120%] pt-2">
                Flexible scheduling and efficient visits to respect your time.
              </span>
            </li>
            <li className=" py-2 md:py-4">
              <span className="flex items-center gap-2 text-lg md:text-xl font-medium text-[#2F2F2F] leading-[120%]">
                <CreditCard className="w-5 h-5 text-primary" /> Flexible Payment 
              </span>
              <span className="text-sm md:text-base font-[#505050] text-[#505050] leading-[120%] pt-2">
                To make orthodontic treatment affordable and stress-free for families.
              </span>
            </li>
          </ul>
        </div>
        <div className="md:col-span-1">
            <Image src="/assets/images/why-choose-us.png" alt="why-choose-us" width={1000} height={1000} className="w-full h-[350px] md:h-[500px] lg:h-[720px] object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseOur;
