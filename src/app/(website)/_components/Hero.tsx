import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh)] flex items-center justify-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/videos/banner-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-white text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[150%] text-center">
          Transforming Smiles <br className="block md:hidden" /> With{" "}
          <span className="text-primary">
            Specialist <br className="hidden md:block" /> Orthodontic Care
          </span>
        </h1>
        <p className="text-sm md:text-base font-normal text-[#E7E7E7] leading-[150%] pt-3 md:pt-4">We focus exclusively on orthodontic treatments to create healthy, confident smiles for the whole family.</p>

        <div className="pt-5 md:pt-7 lg:pt-9 flex flex-col md:flex-row justify-center items-center gap-[13px]">
          <Link href="/booking">
            <Button className="h-[46px] shadow-[0_4px_7px_0_rgba(0,0,0,0.12)] text-sm font-medium leading-[150%] text-white py-[14px] px-[46px] rounded-[6px]">
              Book FREE Consult
            </Button>
          </Link>
          <Link href="/treatments">
            <Button className="h-[46px] flex items-center gap-2 bg-transparent text-sm font-medium leading-[150%] text-white py-[14px] px-[22px] rounded-[6px] border-[1.5px] border-white">
              Explore Services <ArrowRight className="w-5 h-5 text-white" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
