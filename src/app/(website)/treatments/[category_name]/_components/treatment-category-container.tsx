"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const TreatmentCategoryContainer = () => {
  return (
    <div className="py-10 md:py-16 lg:py-24">
      <div className="container">
        <p className="text-base lg:text-lg font-medium text-[#666666] leading-[150%]">
          <span className="font-semibold">
            At Perrystown Orthodontics, we know that every smile is unique — and
            so is every treatment plan. Whether you’re a child, teenager, or
            adult, we offer a range of modern orthodontic options designed to
            suit your needs, lifestyle, and goals.
          </span>{" "}
          <br /> <br />
          From tried-and-true{" "}
          <span className="font-semibold">metal braces</span> to more discreet{" "}
          <span className="font-semibold">clear braces</span> and virtually
          invisible <span className="font-semibold">clear aligners,</span> we
          provide treatments that combine proven results with the latest
          orthodontic technology. <br /> <br />
          Our friendly, experienced team will take the time to understand your
          concerns, explain your options, and help you choose the approach
          that’s right for you. No matter which treatment you select, you can
          count on gentle, expert care and a supportive experience — every step
          of the way. <br /> <br />
          At Perrystown Orthodontics, our goal is simple: to make every smile
          healthy, confident, and uniquely yours
        </p>

        <div>
          <ul className="flex items-center gap-2 mt-6 md:mt-8 lg:mt-10">
            <Link href="/">
              <li className="text-sm md:text-base lg:text-lg font-normal text-[#666666] leading-[120%] hover:underline hover:font-medium">
                Home
              </li>
            </Link>
            <li>
              <ChevronRight className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6" />
            </li>
            <Link href="/treatments">
              <li className="text-sm md:text-base lg:text-lg font-normal text-[#666666] leading-[120%] hover:underline hover:font-medium">
                Treatments
              </li>
            </Link>
            <li>
              <ChevronRight className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6" />
            </li>
            <li className="text-sm md:text-base lg:text-lg font-normal leading-[120%] text-[#131313]">
              Braces Details
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCategoryContainer;
