import HeroSection from "@/components/common/hero-section";
import React from "react";
import GetInTouch from "../_components/get-in-touch";
import ContactInformation from "./_components/contact-information";
import GoogleMap from "./_components/google-map";

const ContactPage = () => {
  return (
    <div>
      <HeroSection
        title="Contact Us"
      />
      <ContactInformation />
      <GetInTouch />
      <GoogleMap/>
    </div>
  );
};

export default ContactPage;
