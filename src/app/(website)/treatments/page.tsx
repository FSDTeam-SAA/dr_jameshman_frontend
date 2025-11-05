import HeroSection from "@/components/common/hero-section";
import React from "react";
import TreatmentsContainer from "./_components/treatments-container";

const TreatmentsPage = () => {
  return (
    <div>
      <HeroSection
        title="Our Treatments"
      />
      <TreatmentsContainer/>
    </div>
  );
};

export default TreatmentsPage;
