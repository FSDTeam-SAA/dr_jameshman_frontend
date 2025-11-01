import HeroSection from "@/components/common/hero-section";
import React from "react";
import TreatmentCategoryContainer from "./_components/treatment-category-container";
import FaqContainer from "../../about-us/_components/faq";

const TreatmentCategoryPage = () => {
  return (
    <div>
      <HeroSection title="Our Treatments" description="" />
      <TreatmentCategoryContainer />
      <FaqContainer />
    </div>
  );
};

export default TreatmentCategoryPage;
