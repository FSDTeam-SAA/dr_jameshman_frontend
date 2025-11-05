import HeroSection from "@/components/common/hero-section";
import React from "react";
import ReferralsForm from "./_components/referrals-form";
import ReferralsHeader from "./_components/referrals-header";

const ReferralsPage = () => {
  return (
    <div>
      <HeroSection
        title="Referrals"
      />
      <ReferralsHeader />
      <ReferralsForm />
    </div>
  );
};

export default ReferralsPage;
