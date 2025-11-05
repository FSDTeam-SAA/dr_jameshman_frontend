"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { DoctorsGridSkeleton } from "./DoctorCardSkeleton";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import NotFound from "@/components/shared/NotFound/NotFound";

export interface Doctor {
  _id: string;
  name: string;
  title: string;
  image: string;
  cloudinaryId: string;
  description: string;
  __v: number;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalDoctors: number;
  itemsPerPage: number;
}

export interface DoctorsResponse {
  status: boolean;
  message: string;
  data: Doctor[];
  pagination: Pagination;
}

const MeetTheTeam = () => {
  const { data, isLoading, isError, error } = useQuery<DoctorsResponse>({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors`);
      return res.json();
    },
  });

  let content;
  if (isLoading) {
    content = (
      <div className="">
        <DoctorsGridSkeleton />
      </div>
    );
  } else if (isError) {
    content = (
      <div className="w-full h-[400px] md:h-[500px]">
        <ErrorContainer message={error?.message || "Something went Wrong"} />
      </div>
    );
  } else if (data && data.data && data.data.length === 0) {
    content = (
      <NotFound message="Oops! No data available. Modify your filters or check your internet connection." />
    );
  } else if (data && data.data && data.data.length > 0) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 pt-8 md:pt-12 lg:pt-12">
        {data?.data?.map((member) => {
          return (
            <div key={member?._id} className="h-auto bg-white rounded-b-[8px]">
              <Image
                src={member?.image}
                alt={member?.name}
                width={1000}
                height={1000}
                className="w-full h-[300px] object-cover rounded-t-[8px]"
              />
              <div className=" p-4 ">
                <h3 className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#202020] leading-[150%]">
                  {member?.name}
                </h3>
                <h5 className="text-sm font-medium text-primary leading-[120%] py-2 md:py-[10px]">
                  {member?.title}
                </h5>
                <p dangerouslySetInnerHTML={{__html: member?.description}} className="text-xs font-normal text-[#656565] leading-[120%] text-justify"/>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="pb-10 md:pb-16 lg:pb-24">
      <div className="container">
        <h2 className="text-2xl md:text-[28px] lg:text-[32px] text-primary leading-[150%] font-semibold text-center">
          Meet The Team
        </h2>
        {/* <p className="text-sm md:text-base text-[#373737] text-center pt-2 leading-[150%] font-normal">
          Our diverse team combines expertise in finding your problem.
        </p> */}

        <div>{content}</div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
