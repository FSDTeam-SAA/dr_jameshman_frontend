import HeroSection from "@/components/common/hero-section";
import React from "react";
import TreatmentCategoryContainer from "./_components/treatment-category-container";
import FaqContainer from "../../about-us/_components/faq";

const TreatmentCategoryPage = ({
  params,
}: {
  params: { category_name: string };
}) => {
  return (
    <div>
      <HeroSection title="Our Treatments" />
      <section id="treatment_content">
        <TreatmentCategoryContainer
          category_name={params?.category_name || ""}
        />
      </section>

      <FaqContainer />
    </div>
  );
};

export default TreatmentCategoryPage;
