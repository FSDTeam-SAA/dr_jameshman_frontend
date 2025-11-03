import {
  Clock,
  Facebook,
  InstagramIcon,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary pt-6 md:pt-8 lg:pt-10 pb-4 md:pb-6 lg:pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-8 md:pb-10 lg:pb-12">
          <div className="md:col-span-2">
            <Image
              src="/assets/images/footer-logo.png"
              alt="logo.png"
              width={1000}
              height={1000}
              className="h-[90px] w-[243px] object-cover"
            />
            <p className="text-sm md:text-base font-normal text-white leading-[150%] py-3 md:py-4 lg:py-6">
              “Providing exceptional dental care with a focus on comfort and <br/> results for over 15 years.”
            </p>

            <div className="flex items-center gap-3 ">
              <span>
                <Facebook className="w-8 h-8 text-white cursor-pointer" />
              </span>
              <span>
                <Twitter className="w-8 h-8 text-white cursor-pointer" />
              </span>
              <span>
                <InstagramIcon className="w-8 h-8 text-white cursor-pointer" />
              </span>
            </div>
            <div className="pt-4 md:pt-6 lg:pt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-0">
              <Image src="/assets/images/brand1.png" alt="brands-logo" width={1000} height={200} className="w-[100px] object-contain h-[35px]"/>
              <Image src="/assets/images/brand2.png" alt="brands-logo" width={1000} height={200} className="w-[130px] object-contain h-[35px]"/>
              <Image src="/assets/images/brand3.png" alt="brands-logo" width={1000} height={200} className="w-[140px] object-contain h-[35px]"/>
              <Image src="/assets/images/brand4.png" alt="brands-logo" width={1000} height={200} className="w-[130px] object-contain h-[35px]"/>
            </div>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-base md:text-lg lg:text-xl font-medium text-white leading[120%]">
              Quick Links
            </h3>
            <ul className="pt-3 md:pt-4 lg:pt-6">
             <Link href="/">
              <li className="text-sm md:text-base font-normal text-white leading-[120%] py-1.5 md:py-2 hover:underline">
                Home
              </li>
             </Link>
             <Link href="/treatments">
              <li className="text-sm md:text-base font-normal text-white leading-[120%] py-1.5 md:py-2 hover:underline">
                Services
              </li>
             </Link>
             <Link href="/about-us">
              <li className="text-sm md:text-base font-normal text-white leading-[120%] py-1.5 md:py-2 hover:underline">
                About Us
              </li>
             </Link>
             <Link href="/contact">
             <li className="text-sm md:text-base font-normal text-white leading-[120%] py-1.5 md:py-2 hover:underline">
                Contact
              </li>
             </Link>
             
             
              
            </ul>
          </div>
          <div className="md:col-span-1 ">
            <h3 className="text-base md:text-lg lg:text-xl font-medium text-white leading[120%]">
              Contact Us
            </h3>
            <ul className="pt-3 md:pt-4 lg:pt-6">
              <li className="flex items-start gap-2 text-sm md:text-base font-normal text-white leading-[120%] py-1.5 md:py-2">
                <MapPin className="w-5 md:w-6 h-5 md:h-6 text-white" /> 44 Muckross Avenue, Perrystown, Dublin 12, D12VK49
              </li>
              <Link href="tel:083 011 0533">
              <li className="flex items-center gap-2 text-sm md:text-base font-normal text-white leading-[120%] py-1.5 md:py-2">
                <Phone className="w-5 h-5 text-white" /> 083 011 0533
              </li>
              </Link>
              <Link href="mailto:perrystownorthodontics@gmail.com">
              <li className="flex items-center gap-2 text-sm md:text-base font-normal text-white leading-[120%] py-1.5 md:py-2">
                <Mail className="w-5 h-5 text-white" /> perrystownorthodontics@gmail.com
              </li>
              </Link>
              
              <li className="flex items-start gap-2 text-sm md:text-base font-normal text-white leading-[120%] py-1.5 md:py-2">
                <Clock className="w-5 md:w-6 h-5 md:h-6 text-white" /> Opening hours: Monday to Friday 10 AM – 6:30 PM
              </li>
            </ul>
          </div>
        </div>

        {/* bottom part  */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3 border-t border-[#D9D9D980] pt-4 md:pt-6 lg:pt-8">
          <p className="text-sm md:text-base font-normal text-white leading-[120%]">
            © 2025 Perrystown Orthodontics. All rights reserved.
          </p>

          <ul className="flex items-center gap-3 md:gap-4">
            <Link href="/">
              <li className="text-sm md:text-base font-normal text-white leading-[120%]">
                Privacy Policy
              </li>
            </Link>
            <Link href="/">
              <li className="text-sm md:text-base font-normal text-white leading-[120%]">
                GDPR
              </li>
            </Link>
            <Link href="/">
              <li className="text-sm md:text-base font-normal text-white leading-[120%]">
                Terms of Service
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
