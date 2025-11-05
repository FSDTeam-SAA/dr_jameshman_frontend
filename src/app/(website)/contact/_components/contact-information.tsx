import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const ContactInformation = () => {
  return (
    <div className="pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-14 lg:pb-20">
      <div className="container grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
        <div className="md:col-span-3">
          <Image
            src="/assets/images/contact-info.jpg"
            alt="contact-info.jpg"
            width={1000}
            height={1000}
            className="w-full h-[400px] md:h-[450px] lg:h-[500px] rounded-[16px]"
          />
        </div>
        <div className="md:col-span-2 w-full flex flex-col justify-center">
          <h3 className="text-2xl md:text-[32px] lg:text-[40px] font-semibold text-primary leading[150%] pb-3 md:pb-4">
            Contact Information
          </h3>
          <p className="text-sm md:text-base text-[#3E3E3E] leading-[150%] font-normal">
            We’d love to hear from you! Whether you’re ready to start your smile
            journey or just have a few questions, our friendly team at{" "}
            <strong>Perrystown Orthodontics</strong> is here to help. <br />
            <br />
            Get in touch today, we’re happy to guide you every step of the way.
          </p>
          <ul className="pt-4 md:pt-6 lg:pt-8">
            <Link href="tel:083 011 0533">
              <li className="flex items-center gap-2 text-sm md:text-base font-normal text-[#343A40] leading-[120%] py-1 md:py-2">
                <Phone className="w-5 h-5 text-primary" /> 083 011 0533
              </li>
            </Link>
            <Link href="mailto:perrystownorthodontics@gmail.com">
              <li className="flex items-center gap-2 text-sm md:text-base font-normal text-[#007FFF] leading-[120%] py-1 md:py-2">
                <Mail className="w-5 h-5 text-primary" />{" "}
                perrystownorthodontics@gmail.com
              </li>
            </Link>

            <li className="flex items-start gap-2 text-sm md:text-base font-normal text-[#343A40] leading-[120%] py-1 md:py-2">
              <MapPin className="w-5 h-5 text-primary" /> 44 Muckross Avenue,
              Perrystown, Dublin 12, D12VK49
            </li>
            <li className="flex items-start gap-2 text-sm md:text-base font-normal text-[#343A40] leading-[120%] py-1 md:py-2">
              <Clock className="w-5 h-5 text-primary" /> Opening hours : Monday
              to Friday 10 AM – 6:30 PM
            </li>
          </ul>
          <div>
            <p className="flex items-center gap-2 text-base md:text-lg font-normal text-[#343A40] leading-[150%]">
              Socials :{" "}
              <span className="flex items-center gap-4">
                <FaFacebookSquare className="w-6 h-6 cursor-pointer"/> <FaInstagramSquare className="w-6 h-6 cursor-pointer"/>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
