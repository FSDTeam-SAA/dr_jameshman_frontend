// import { QRCodeGenerator } from "@/components/ui/qr-code";
// import React from "react";

// const QRCode = () => {
//   return (
//     <div className="pt-10 md:pt-16 lg:pt-24">
//       <div className="bg-[#82B7B41A]  py-5 md:py-7 lg:py-10">
//         <div className="container grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10">
//           <div className="md:col-span-2 flex flex-col justify-center items-center">
//             <QRCodeGenerator />
//             <h5 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#0066A4] leading-[150%] pt-4 md:pt-5 lg:pt-6">
//               Scan Now
//             </h5>
//           </div>
//           <div className="md:col-span-3 h-full flex flex-col justify-center">
//             <h4 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold text-black leading-[150%]">
//               See Your Invisalign® Smile in Seconds!
//             </h4>
//             <ol className="list-decimal list-inside">
//               <li className="text-base md:text-lg lg:text-xl font-normal text-black leadig-[150%] py-1.5 md:py-2">
//                 Grab your phone
//               </li>
//               <li className="text-base md:text-lg lg:text-xl font-normal text-black leadig-[150%] py-1.5 md:py-2">
//                 Open your camera and scan the QR code
//               </li>
//               <li className="text-base md:text-lg lg:text-xl font-normal text-black leadig-[150%] py-1.5 md:py-2">
//                 Snap a quick selfie
//               </li>
//               <li className="text-base md:text-lg lg:text-xl font-normal text-black leadig-[150%] py-1.5 md:py-2">
//                 See your smile transformation — instantly! your phone
//               </li>
//             </ol>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QRCode;


import SmileSimulator from '@/components/ui/smile-simulato'
import React from 'react'

const QRCode = () => {
  return (
    <div>
      <SmileSimulator />
    </div>
  )
}

export default QRCode

