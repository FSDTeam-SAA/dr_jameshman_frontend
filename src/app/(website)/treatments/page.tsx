import HeroSection from "@/components/common/hero-section";
import React from "react";
import TreatmentsContainer from "./_components/treatments-container";

const TreatmentsPage = () => {
  return (
    <div>
      <HeroSection
        title="Our Treatments"
        description="At Perrystown Orthodontics, we know that every smile is unique — and so is every treatment plan. Whether you’re a child, teenager, or adult, we offer a range of modern orthodontic options designed to suit your needs, lifestyle, and goals.
        From tried-and-true metal braces to more discreet clear braces and virtually invisible clear aligners, we provide treatments that combine proven results with the latest orthodontic technology.
        Our friendly, experienced team will take the time to understand your concerns, explain your options, and help you choose the approach that’s right for you. No matter which treatment you select, you can count on gentle, expert care and a supportive experience — every step of the way.
        At Perrystown Orthodontics, our goal is simple: to make every smile healthy, confident, and uniquely yours
        "
      />
      <TreatmentsContainer/>
    </div>
  );
};

export default TreatmentsPage;
