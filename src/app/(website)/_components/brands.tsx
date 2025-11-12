"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const brandsImages = [
  "/assets/images/brand1.png",
  "/assets/images/brand2.png",
  "/assets/images/brand3.png",
  "/assets/images/brand4.png",
  "/assets/images/brand5.png",
  "/assets/images/brand6.png",
  "/assets/images/brand7.png",
  "/assets/images/brand8.jpeg",
];

const Brands = () => {
  return (
    <section className="w-full pb-10 md:pb-16 lg:pb-20">
      <div className="container">
        <Marquee
          speed={50}
          gradientWidth={100}
          pauseOnHover={true}
        >
          {brandsImages.map((img, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-6 md:mx-8 lg:mx-12"
            >
              <div className="w-28 h-16 md:w-36 md:h-20 flex items-center justify-center">
                <Image
                  src={img}
                  alt="brand logo"
                  width={144}
                  height={72}
                  className="w-auto h-14 md:h-18 object-contain transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Brands;