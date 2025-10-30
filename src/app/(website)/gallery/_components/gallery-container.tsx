"use client";
import DashboardPagination from "@/app/(dashboard)/dashboard/_component/shared/pagination";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import TreatmentSkeleton from "@/components/shared/Skeleton/TreatmentsSkeleton";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";

export interface Gallery {
  _id: string;
  imageName: string;
  imageDescription: string;
  imageUrl: string;
  cloudinaryId: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface GalleryResponse {
  status: boolean;
  message: string;
  data: Gallery[];
  pagination: Pagination;
}

const GallerisContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery<GalleryResponse>({
    queryKey: ["all-galleries", currentPage],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/galleries?page=${currentPage}&limit=8`
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
    <div className="py-8 md:py-12 lg:py-12">
      <div className="container">
        <h2 className="text-2xl md:text-[28px] lg:text-[32px] text-[#202020] leading-[150%] font-semibold">
          Our <span className="text-primary">Gallery</span>
        </h2>
        <p className="text-sm md:text-base text-[#373737] pt-2 leading-[150%] font-normal">
          At Perrystown Orthodontics, we love celebrating smiles! Here are just
          a few examples of the beautiful results we’ve achieved together. Every
          smile you see here represents a story of care, confidence, and
          transformation, from early treatments that set the foundation for a
          healthy bite to adult patients achieving the smile they’ve always
          wanted. We’re proud to play a part in helping our patients feel happy
          and confident in their smiles, and we look forward to helping you
          start your own journey soon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 md:pt-10 lg:pt-12">
          {data?.data?.map((item) => {
            return (
              <div key={item?._id} className="pb-4">
                <Image
                  src={item?.imageUrl}
                  alt={item?.imageName}
                  width={1000}
                  height={1000}
                  className="w-full h-[400px] rounded-[6px] object-cover"
                />
              </div>
            );
          })}
        </div>
        <div className="container pt-8 md:pt-10 lg:pt-12">
          {data && data?.pagination && data?.pagination?.totalPages > 1 && (
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-base text-black/60">
                Showing page {currentPage} to{" "}
                {data?.pagination?.itemsPerPage * currentPage} of{" "}
                {data?.pagination?.totalItems} results
              </p>

              <div>
                <DashboardPagination
                  totalPages={data?.pagination?.totalPages}
                  currentPage={currentPage}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GallerisContainer;
