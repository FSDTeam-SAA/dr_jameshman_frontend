"use client";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import TreatmentSkeleton from "@/components/shared/Skeleton/TreatmentsSkeleton";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface Category {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TreatmentCategory {
  _id: string;
  name: string;
  image: string;
}

export interface Treatment {
  _id: string;
  serviceName: string;
  description: string;
  image: string;
  cloudinaryId: string;
  category: TreatmentCategory; // Nested (short) category info
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TreatmentsData {
  category: Category; // Full category info
  treatments: Treatment[];
}

export interface TreatmentsByCategoryResponse {
  status: boolean;
  message: string;
  data: TreatmentsData;
}

const TreatmentCategoryContainer = ({
  category_name,
}: {
  category_name: string;
}) => {
  const { data, isLoading, isError, error } =
    useQuery<TreatmentsByCategoryResponse>({
      queryKey: ["treatments-by-category", category_name],
      queryFn: async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/treatments/treatmentCategory/${category_name}`
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
        <p className="text-base lg:text-lg font-medium text-[#666666] leading-[150%]">
          <span className="font-semibold">
            At Perrystown Orthodontics, we know that every smile is unique — and
            so is every treatment plan. Whether you’re a child, teenager, or
            adult, we offer a range of modern orthodontic options designed to
            suit your needs, lifestyle, and goals.
          </span>{" "}
          <br /> <br />
          From tried-and-true{" "}
          <span className="font-semibold">metal braces</span> to more discreet{" "}
          <span className="font-semibold">clear braces</span> and virtually
          invisible <span className="font-semibold">clear aligners,</span> we
          provide treatments that combine proven results with the latest
          orthodontic technology. <br /> <br />
          Our friendly, experienced team will take the time to understand your
          concerns, explain your options, and help you choose the approach
          that’s right for you. No matter which treatment you select, you can
          count on gentle, expert care and a supportive experience — every step
          of the way. <br /> <br />
          At Perrystown Orthodontics, our goal is simple: to make every smile
          healthy, confident, and uniquely yours
        </p>

        <div>
          <ul className="flex items-center gap-2 mt-6 md:mt-8 lg:mt-10">
            <Link href="/">
              <li className="text-sm md:text-base lg:text-lg font-normal text-[#666666] leading-[120%] hover:underline hover:font-medium">
                Home
              </li>
            </Link>
            <li>
              <ChevronRight className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6" />
            </li>
            <Link href="/treatments">
              <li className="text-sm md:text-base lg:text-lg font-normal text-[#666666] leading-[120%] hover:underline hover:font-medium">
                Treatments
              </li>
            </Link>
            <li>
              <ChevronRight className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6" />
            </li>
            <li className="text-sm md:text-base lg:text-lg font-normal leading-[120%] text-[#131313]">
              {data?.data?.category?.name}
            </li>
          </ul>

          <div className="mt-4 md:mt-6 lg:mt-8">
            {/* Loading and Error States (optional but recommended) */}
            {isLoading && (
              <p className="text-center text-gray-500 py-10 text-lg">
                Loading treatments...
              </p>
            )}
            {isError && (
              <p className="text-center text-red-500 py-10 text-lg">
                Failed to load treatments. Please try again.
              </p>
            )}

            {/* No Data Found */}
            {!isLoading &&
              !isError &&
              (!data?.data?.treatments ||
                data?.data?.treatments.length === 0) && (
                <p className="text-center text-gray-500 py-10 font-bold text-2xl md:text-3xl">
                  No treatments found.
                </p>
              )}

            {/* Treatments List */}
            {data &&
              data?.data &&
              data?.data?.treatments &&
              data?.data?.treatments?.length > 0 && (
                <>
                  {data.data.treatments.map((item, index) => {
                    const isEven = index % 2 === 0;

                    return (
                      <div
                        key={item?._id}
                        className={`grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 lg:gap-12 mb-6 md:mb-10 lg:mb-14 ${
                          isEven ? "" : "md:[direction:rtl]"
                        }`}
                      >
                        {/* Image Section */}
                        <div
                          className={`md:col-span-2 ${
                            !isEven ? "md:[direction:ltr]" : ""
                          }`}
                        >
                          <Image
                            src={item?.image || "/assets/images/no-image.jpg"}
                            alt={item?.serviceName || ""}
                            width={1000}
                            height={1000}
                            className="w-full h-[400px] md:h-[500px] lg:h-[583px] object-cover rounded-2xl"
                          />
                        </div>

                        {/* Text Section */}
                        <div
                          className={`md:col-span-3 w-full flex flex-col justify-center ${
                            !isEven ? "md:[direction:ltr]" : ""
                          }`}
                        >
                          <h4 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900">
                            {item?.serviceName}
                          </h4>
                          <p
                            className="text-gray-600 leading-relaxed"
                            dangerouslySetInnerHTML={{
                              __html: item?.description,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div className="pt-2 md:pt-3 lg:pt-[14px] flex flex-col md:flex-row justify-center items-center gap-[13px]">
                    <Link href="/booking">
                      <Button className="h-[46px] shadow-[0_4px_7px_0_rgba(0,0,0,0.12)] text-sm font-medium leading-[150%] text-white py-[14px] px-[46px] rounded-[6px]">
                        Book FREE Consult
                      </Button>
                    </Link>
                  </div>
                </>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCategoryContainer;
