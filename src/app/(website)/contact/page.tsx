import HeroSection from "@/components/common/hero-section";
import React from "react";
import GetInTouch from "../_components/get-in-touch";
import ContactInformatioin from "../_components/contact-information";

const ContactPage = () => {
  return (
    <div>
      <HeroSection
        title="Contact Us"
        description="We’d love to hear from you! Whether you’re ready to start your smile journey or just have a few questions, our friendly team at Perrystown Orthodontics is here to help.
        Get in touch today, we’re happy to guide you every step of the way."
      />
      <GetInTouch />
      <ContactInformatioin />
    </div>
  );
};

export default ContactPage;
