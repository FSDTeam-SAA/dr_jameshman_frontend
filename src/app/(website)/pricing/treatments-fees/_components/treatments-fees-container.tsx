"use client";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import TreatmentSkeleton from "@/components/shared/Skeleton/TreatmentsSkeleton";
import { useQuery } from "@tanstack/react-query";
import { Euro } from "lucide-react";
import React from "react";

export interface TreatmentFeeResponse {
  status: boolean;
  message: string;
  data: TreatmentFee[];
  pagination: Pagination;
}

export interface TreatmentFee {
  _id: string;
  serviceName: string;
  items: TreatmentItem[];
  currency: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TreatmentItem {
  description: string;
  rate: number;
  _id: string;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalFees: number;
  itemsPerPage: number;
}

const TreatmentFeesContainer = () => {
  const { data, isLoading, isError, error } = useQuery<TreatmentFeeResponse>({
    queryKey: ["treatmentfees"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/treatmentfees`
      );
      return res.json();
    },
  });

  console.log(data);

  if (isLoading) return <TreatmentSkeleton />;
  if (isError)
    return (
      <ErrorContainer message={error?.message || "Something went wrong"} />
    );
  return (
    <div className="py-10 md:py-16 lg:py-24">
      <div className="container">
        {/* <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold text-primary leading-[150%]">
          Get to know our story, our mission, and the team dedicated to your dental health.
        </h3> */}
        <h2 className="text-2xl md:text-[28px] lg:text-[32px] text-primary leading-[150%] font-semibold  pt-6 md:pt-10 lg:pt-11">
          Treatment Fees
        </h2>
        <p className="text-sm md:text-base text-[#373737] pt-2 leading-[150%] font-normal">
          All fees are fully transparent and discussed in detail during your
          consultation appointment. Because each smile is unique, treatment
          plans are custom designed to meet individual needs, and fees may vary
          depending on the type and length of treatment.
        </p>
        <div className="pt-8 md:pt-12 lg:pt-[60px]">
          {data?.data?.map((item) => {
            return (
              <div key={item?._id} className="mb-6 md:mb-8 lg:mb-10 ">
                <h4 className="text-base md:text-lg font-bold text-white bg-primary leading-[120%] py-3 md:py-4 px-5 md:px-6 rounded-t-[10px]">
                  {item?.serviceName}
                </h4>
                <div>
                  {item?.items?.map((i) => {
                    return (
                      <div
                        key={i?._id}
                        className="py-4 md:py-5 px-5 md:px-6 bg-white w-full flex items-center justify-between rounded-b-[10px] border-b border-[#E5E7EB]"
                      >
                        <p
                          className="text-sm md:text-base font-normal text-[#374151] leading-[120%]"
                          dangerouslySetInnerHTML={{ __html: i?.description }}
                        />

                        <p className="flex items-center gap-0 text-base md:text-lg font-semibold text-[#111827] leading-[120%]">
                          {item?.currency ? (
                            <Euro className="w-5 h-5" />
                          ) : (
                            "Free"
                          )}{" "}
                          {i?.rate}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TreatmentFeesContainer;
