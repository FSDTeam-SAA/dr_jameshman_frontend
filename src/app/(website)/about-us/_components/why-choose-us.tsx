import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
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
            Why Choose Us
          </h2>
          <p className="text-base md:text-lg font-normal pt-2">
            At Perrystown Orthodontics, we treat every patient like family,
            because that’s exactly how we see you. Our friendly team is
            passionate about creating beautiful, confident smiles in a warm and
            relaxed environment where children, teens, and adults all feel at
            home. <br /> <br />
            Our doctors are Registered Specialist Orthodontists with the Irish
            Dental Council, so you can trust that your smile is in expert hands.
            We’re dedicated to continually improving the quality of care we
            provide through ongoing professional training and development. This
            commitment keeps us at the forefront of our field and ensures we can
            offer you the latest and most effective specialist treatments
            available. <br /> <br />
            We believe great orthodontic care starts with kindness, clear
            communication, and genuine care. From your first visit to your final
            smile reveal, we take the time to listen, explain, and make every
            step of your treatment comfortable and stress-free. <br /> <br />
            Using the latest technology and a personalized approach, we design
            every treatment plan around your individual needs and lifestyle.
            Whether it’s braces for your child or clear aligners for you, our
            goal is simple - to make you smile, inside and out.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
