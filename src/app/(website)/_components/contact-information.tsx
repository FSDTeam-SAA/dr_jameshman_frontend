"use client";

import { ContactInfoResponse } from "@/components/shared/Footer/Footer";
import { useQuery } from "@tanstack/react-query";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactInformation = () => {
  const { data, isLoading, isError, error } = useQuery<ContactInfoResponse>({
    queryKey: ["contact-info"],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact-info`);
      return res.json();
    },
  });

  // ✅ Build-safe loading & error handling
  if (isLoading)
    return (
      <div className="py-20 text-center text-gray-500">
        Loading contact information...
      </div>
    );

  if (isError)
    return (
      <div className="py-20 text-center text-red-500">
        Failed to load contact information: {error.message}
      </div>
    );

  return (
    <div className="pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-14 lg:pb-20">
      <div className="container grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
        {/* Google Map */}
        <div className="md:col-span-3">
          <iframe
            className="w-full rounded-[12px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.7803626937603!2d-6.317600023034217!3d53.311379677339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670c7feab8e1e3%3A0x9ab66e5f33465e51!2s44%20Muckross%20Ave%2C%20Perrystown%2C%20Dublin%2C%20D12%20VK49%2C%20Ireland!5e0!3m2!1sen!2sbd!4v1762319752445!5m2!1sen!2sbd"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Info */}
        <div className="md:col-span-2 w-full flex flex-col justify-center">
          <h3 className="text-2xl md:text-[32px] lg:text-[40px] font-semibold text-primary leading-[150%] pb-3 md:pb-4">
            Contact Information
          </h3>

          <p className="text-sm md:text-base text-[#68706A] leading-[150%] font-normal">
            Find all the ways to reach us, including email, phone, and our office address,
            so you can get the support and answers you need quickly and easily.
          </p>

          <ul className="pt-4 md:pt-6 lg:pt-8 space-y-2">
            <Link href={`mailto:${data?.data[0]?.email || "perrystownorthodontics@gmail.com"}`}>
              <li className="flex items-center gap-2 text-sm md:text-base font-normal text-[#343A40]">
                <Mail className="w-5 h-5 text-primary" />
                {data?.data[0]?.email || "perrystownorthodontics@gmail.com"}
              </li>
            </Link>

            <Link href={`tel:${data?.data[0]?.phoneNumbers[0] || "083 011 0533"}`}>
              <li className="flex items-center gap-2 text-sm md:text-base font-normal text-[#343A40]">
                <Phone className="w-5 h-5 text-primary" />
                {data?.data[0]?.phoneNumbers[0] || "083 011 0533"}
              </li>
            </Link>

            <li className="flex items-start gap-2 text-sm md:text-base font-normal text-[#343A40]">
              <MapPin className="w-5 h-5 text-primary" />
              {data?.data[0]?.address || "44 Muckross Avenue, Perrystown, Dublin 12, D12VK49"}
            </li>

            <li className="flex items-start gap-2 text-sm md:text-base font-normal text-[#343A40]">
              <Clock className="w-5 h-5 text-primary" />
              Opening hours: {data?.data[0]?.openingHours || "Monday to Friday 10 AM – 6:30 PM"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;

















// "use client"
// import { ContactInfoResponse } from "@/components/shared/Footer/Footer";
// import { useQuery } from "@tanstack/react-query";
// import { Clock, Mail, MapPin, Phone } from "lucide-react";
// import Link from "next/link";
// import React from "react";

// const ContactInformatioin = () => {
//     const { data, isLoading, isError, error } = useQuery<ContactInfoResponse>({
//     queryKey: ["contact-info"],
//     queryFn: async () => {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/contact-info`
//       );
//       return res.json();
//     },
//   });

//   // console.log(data);

//   if (isLoading) return console.log(isLoading);
//   if (isError) return console.log(error.message);
//   return (
//     <div className="pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-14 lg:pb-20">
//       <div className="container grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
//         <div className="md:col-span-3">
//           <iframe
//             className="w-full rounded-[12px]"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.7803626937603!2d-6.317600023034217!3d53.311379677339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670c7feab8e1e3%3A0x9ab66e5f33465e51!2s44%20Muckross%20Ave%2C%20Perrystown%2C%20Dublin%2C%20D12%20VK49%2C%20Ireland!5e0!3m2!1sen!2sbd!4v1762319752445!5m2!1sen!2sbd"
//             // width="600"
//             height="450"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           />
//         </div>
//         <div className="md:col-span-2 w-full flex flex-col justify-center">
//           <h3 className="text-2xl md:text-[32px] lg:text-[40px] font-semibold text-primary leading[150%] pb-3 md:pb-4">
//             Contact Information
//           </h3>
//           <p className="text-sm md:text-base text-[#68706A] leading-[150%] font-normal">
//             Find all the ways to reach us, including email, phone, and our
//             office address, so you can get the support and answers you need
//             quickly and easily.
//           </p>
//           <ul className="pt-4 md:pt-6 lg:pt-8">
//             <Link href="mailto:perrystownorthodontics@gmail.com">
//             <li className="flex items-center gap-2 text-sm md:text-base font-normal text-[#343A40] leading-[120%] py-1 md:py-2">
//               <Mail className="w-5 h-5 text-primary" /> {data?.data[0]?.email || "perrystownorthodontics@gmail.com"}
//             </li>
//             </Link>

//             <Link href="tel:083 011 0533">
//             <li className="flex items-center gap-2 text-sm md:text-base font-normal text-[#343A40] leading-[120%] py-1 md:py-2">
//               <Phone className="w-5 h-5 text-primary" /> {data?.data[0]?.phoneNumbers[0] || "083 011 0533"}
//             </li>
//             </Link>
//             <li className="flex items-start gap-2 text-sm md:text-base font-normal text-[#343A40] leading-[120%] py-1 md:py-2">
//               <MapPin className="w-5 h-5 text-primary" />  {data?.data[0]?.address ||
//                   "44 Muckross Avenue, Perrystown, Dublin 12, D12VK49"}
//             </li>
//             <li className="flex items-start gap-2 text-sm md:text-base font-normal text-[#343A40] leading-[120%] py-1 md:py-2">
//               <Clock className="w-5 h-5 text-primary" /> Opening hours : {data?.data[0]?.openingHours ||
//                   " Monday to Friday 10 AM – 6:30 PM"}
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactInformatioin;
