"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import OurTreatmentSkeleton from "./our-treatment-skeleton";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TreatmentCart from "@/components/common/treatment-cart";
import { TreatmentCategoryResponse } from "@/components/shared/Navbar/MobileTreatmentsDropdown";

const OurTreatments = () => {
  const {data, isLoading, isError, error} = useQuery<TreatmentCategoryResponse>({
    queryKey: ["treatments-categories"],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/treatmentCategories`);
      return res.json();
    },
  })

  console.log(data);

  if (isLoading) return <OurTreatmentSkeleton />;
  if (isError)
    return (
      <ErrorContainer message={error?.message || "Something went wrong"} />
    );

  return (
    <div className="py-10 md:py-14 lg:py-20">
      <div className="container">
        <div className="w-full flex items-center gap-6 md:gap-14 lg:gap-20 justify-between">
          <div>
            <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold leading-[150%] text-primary">
              Our Orthodontic Treatments
            </h2>
            <p className="text-base md:text-lg font-normal text-black leading-[120%] pt-2 md:pt-3">
              We provide orthodontic care designed to give you and your family confident, lasting smiles.
            </p>
          </div>
          <div>
            <Link href="/treatments">
              <Button className="text-white text-sm md:text-base font-medium leading-[120%] py-2 px-6 rounded-[10px] hover:underline">
                See All
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 pt-8 md:pt-10 lg:pt-12">
          {data?.data?.slice(0, 4)?.map((item) => {
            console.log(item);
            return (
              <div key={item._id}>
                <TreatmentCart item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTreatments;
