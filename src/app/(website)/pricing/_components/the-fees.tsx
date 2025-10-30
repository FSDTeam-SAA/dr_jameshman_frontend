import Image from "next/image";
import React from "react";

const TheFees = () => {
  return (
    <div className="py-10 md:py-16 lg:py-24">
      <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-11 lg:gap-[53px]">
        <div className="md:col-span-2">
          <Image
            src="/assets/images/about-us.png"
            alt="about-us"
            width={1000}
            height={1000}
            className="w-full h-[420px] md:h-[520px] lg:h-[628px] object-cover rounded-[20px]"
          />
        </div>
        <div className="md:col-span-3 flex flex-col justify-center">
          <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold text-black leading-[150%]">
            The Fees & Payment are Clear, Honest, and Tailored to You.
          </h2>
          <p className="text-base md:text-lg font-normal pt-2">
            At Perrystown Orthodontics, we believe that every patient deserves
            personalized care and that includes your treatment plan and fees.
            Because each smile is unique, all treatment plans are custom
            designed to meet individual needs, and fees may vary depending on
            the type and length of treatment. <br /> <br />
            We understand that clarity brings peace of mind, which is why all
            fees are fully transparent and discussed in detail during your
            consultation appointment. Our team will take the time to explain
            your options, answer all your questions, and review costs before any
            treatment begins, so there are no surprises along the way. <br />
            <br />
            Whether you’re exploring braces, aligners, or early treatment for
            your child, we’re here to help you feel informed, comfortable, and
            confident in your decision. We also offer flexible payment options
            to make achieving a beautiful smile as accessible and stress-free as
            possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheFees;
