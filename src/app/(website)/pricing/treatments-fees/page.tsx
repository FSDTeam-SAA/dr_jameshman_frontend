import React from "react";
import TreatmentFeesContainer from "./_components/treatments-fees-container";
import HeroSection from "@/components/common/hero-section";

const TreatmentsFeesPage = () => {
  return (
    <div>
      <HeroSection
        title="Pricing & Payment Information"
        description="Get to know our story, our mission, and the team dedicated to your dental health."
      />
      <TreatmentFeesContainer />
    </div>
  );
};

export default TreatmentsFeesPage;
