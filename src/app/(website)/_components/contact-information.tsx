import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const ContactInformatioin = () => {
  return (
    <div className="pt-8 md:pt-10 lg:pt-12 pb-10 md:pb-14 lg:pb-20">
      <div className="container grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
        <div className="md:col-span-3">
          <iframe
          className="w-full rounded-[12px]"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d127357.54623230052!2d9.659403403649609!3d4.036070833433735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s123%20Finance%20Street%20Douala%2C%20Cameroon!5e0!3m2!1sen!2sbd!4v1761728233300!5m2!1sen!2sbd"
            // width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div >
        <div className="md:col-span-2 w-full flex flex-col justify-center">
             <h3 className="text-2xl md:text-[32px] lg:text-[40px] font-semibold text-primary leading[150%] pb-3 md:pb-4">
              Contact Information
            </h3>
            <p className="text-sm md:text-base text-[#68706A] leading-[150%] font-normal">Find all the ways to reach us, including email, phone, and our office address, so you can get the support and answers you need quickly and easily.</p>
            <ul className="pt-4 md:pt-6 lg:pt-8">
              <li className="flex items-center gap-2 text-sm md:text-base font-normal text-[#343A40] leading-[120%] py-1 md:py-2">
                <MapPin className="w-5 h-5 text-primary" /> 123 Finance Street
                Douala, Cameroon
              </li>
              <li className="flex items-center gap-2 text-sm md:text-base font-normal text-[#343A40] leading-[120%] py-1 md:py-2">
                <Phone className="w-5 h-5 text-primary" /> +237 123 456 789
              </li>
              <li className="flex items-center gap-2 text-sm md:text-base font-normal text-[#343A40] leading-[120%] py-1 md:py-2">
                <Mail className="w-5 h-5 text-primary" /> info@creditmatch.com
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactInformatioin;
