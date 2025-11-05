"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="w-full pb-10 md:pb-16 lg:pb-24">
      <div
        className="container"
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
      >
        {/* <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold text-black leading-[150%] text-center pb-2">
          Our Trusted Brands
        </h2> */}

        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {brandsImages.map((img, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/4 lg:basis-1/6 pl-4 md:pl-6 flex items-center justify-center"
              >
                <div className="w-full flex items-center justify-center">
                  <Image
                    src={img}
                    alt="brand logo"
                    width={150}
                    height={80}
                    className="w-auto h-16 md:h-20 object-contain"
                    // className="w-auto h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Brands;
