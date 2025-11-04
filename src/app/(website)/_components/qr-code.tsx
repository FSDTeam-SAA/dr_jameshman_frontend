// import { QRCodeGenerator } from "@/components/ui/qr-code";
import Image from "next/image";
import React from "react";

const QRCode = () => {
  return (
    <div className="pb-10 md:pb-16 lg:pb-24">
      <div className="bg-[#82B7B41A]  py-5 md:py-7 lg:py-10">
        <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10">
          <div className="order-2 md:col-span-2 flex flex-col justify-center items-center">
            {/* <QRCodeGenerator /> */}
            <Image src="/assets/images/qr-code.png" alt="qr-code" width={1000} height={1000} className="w-[200px] h-[200px] object-cover"/>
            <h5 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#0066A4] leading-[150%] pt-3 md:pt-4">
              Scan Now
            </h5>
          </div>
          <div className="order-1 md:col-span-3 h-full flex flex-col justify-center">
            <h4 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold text-black leading-[150%]">
              See Your Invisalign® Smile in Seconds!
            </h4>
            <ol className="list-decimal list-inside">
              <li className="text-base md:text-lg lg:text-xl font-normal text-black leadig-[150%] py-1.5 md:py-2">
                Grab your phone
              </li>
              <li className="text-base md:text-lg lg:text-xl font-normal text-black leadig-[150%] py-1.5 md:py-2">
                Open your camera and scan the QR code
              </li>
              <li className="text-base md:text-lg lg:text-xl font-normal text-black leadig-[150%] py-1.5 md:py-2">
                Snap a quick selfie
              </li>
              <li className="text-base md:text-lg lg:text-xl font-normal text-black leadig-[150%] py-1.5 md:py-2">
                See your smile transformation — instantly! your phone
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCode;

