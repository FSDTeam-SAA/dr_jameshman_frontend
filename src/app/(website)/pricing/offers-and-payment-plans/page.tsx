import HeroSection from "@/components/common/hero-section";
import React from "react";
import OffersAndPaymentPlanContainer from "./_components/offers-and-payment-plans-container";

const OffersAndPaymentPlans = () => {
  return (
    <div>
      <HeroSection
        title="Pricing & Payment Information"
      />
      <OffersAndPaymentPlanContainer />
    </div>
  );
};

export default OffersAndPaymentPlans;
