import HeroSection from "@/components/common/hero-section";
import React from "react";
import GetInTouch from "../_components/get-in-touch";
import ContactInformatioin from "../_components/contact-information";
import FaqContainer from "../about-us/_components/faq";

const ContactPage = () => {
  return (
    <div>
      <HeroSection
        title="Contact Us"
      />
      <GetInTouch />
      <ContactInformatioin />
      <FaqContainer />
    </div>
  );
};

export default ContactPage;
