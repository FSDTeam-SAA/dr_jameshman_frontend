"use client";
import DashboardPagination from "@/app/(dashboard)/dashboard/_component/shared/pagination";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import TreatmentSkeleton from "@/components/shared/Skeleton/TreatmentsSkeleton";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export interface GalleryImage {
  imageName: string;
  cloudinaryId: string;
}

export interface GalleryItem {
  _id: string;
  before: GalleryImage;
  after: GalleryImage;
  createdAt: string;
  updatedAt: string;
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
  data: GalleryItem[];
  pagination: Pagination;
}

const GallerisContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
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
      <div
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
      >
        <div className="container">
          <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold text-primary leading-[150%]">
            Working together to create confident smiles
          </h3>
          <h2 className="text-2xl md:text-[28px] lg:text-[32px] text-[#202020] leading-[150%] font-semibold  pt-6 md:pt-10 lg:pt-11">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-sm md:text-base text-[#373737] pt-2 leading-[150%] font-normal">
            At Perrystown Orthodontics, we love celebrating smiles! Here are
            just a few examples of the beautiful results we’ve achieved
            together. Every smile you see here represents a story of care,
            confidence, and transformation, from early treatments that set the
            foundation for a healthy bite to adult patients achieving the smile
            they’ve always wanted. We’re proud to play a part in helping our
            patients feel happy and confident in their smiles, and we look
            forward to helping you start your own journey soon.
          </p>
        </div>

        <div className=" pt-8 md:pt-10 lg:pt-12">
          <Carousel
            plugins={[plugin.current]}
            className="w-[95%] mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4 md:-ml-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border-2 border-red-500">
              {data?.data?.map((item) => {
                return (
                  <CarouselItem
                    key={item?._id}
                    className="w-full flex gap-2 bg-white rounded-[10px] "
                  >
                    <div>
                      <h4 className="text-base md:text-lg font-normal text-black leading-[150%] text-center py-2 bg-white rounded-t-[10px]">
                        Before
                      </h4>
                      <Image
                        src={item?.before?.imageName}
                        alt={`before image  ${item?._id}`}
                        width={1000}
                        height={1000}
                        className="w-[243px] h-[222px] rounded-b-[16px] object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-normal text-black leading-[150%] text-center py-2 bg-white rounded-t-[10px]">
                        After
                      </h4>
                      <Image
                        src={item?.after?.imageName}
                        alt={`after image  ${item?._id}`}
                        width={1000}
                        height={1000}
                        className="w-[243px] h-[222px] rounded-b-[16px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
