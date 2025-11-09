"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { DoctorsGridSkeleton } from "./DoctorCardSkeleton";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import NotFound from "@/components/shared/NotFound/NotFound";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { ScrollArea } from "@/components/ui/scroll-area";

// get all start

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

// get all end
// get by id start
export interface SingleDoctorResponse {
  status: boolean;
  message: string;
  data: SingleDoctor;
}

export interface SingleDoctor {
  _id: string;
  name: string;
  title: string;
  image: string;
  cloudinaryId: string;
  description: string;
  __v: number;
}

// get by id end

const MeetTheTeam = () => {
  const autoplay = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  );
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);

  // ✅ Fetch all doctors
  const { data, isLoading, isError, error } = useQuery<DoctorsResponse>({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors`);
      return res.json();
    },
  });

  // ✅ Fetch individual doctor details (only when modal opens)
  const { data: doctorDetail, isFetching } = useQuery<SingleDoctorResponse>({
    queryKey: ["doctor", selectedId],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/doctors/${selectedId}`
      );
      return res.json();
    },
    enabled: !!selectedId && open,
  });

  // console.log(doctorDetail)

  const handleReadMore = (id: string) => {
    setSelectedId(id);
    setOpen(true);
  };

  if (isLoading) {
    return (
      <div className="py-12">
        <DoctorsGridSkeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center">
        <ErrorContainer message={error?.message || "Something went wrong."} />
      </div>
    );
  }

  if (!data?.data?.length) {
    return (
      <NotFound message="Oops! No data available. Please try again later." />
    );
  }

  return (
    <div className="pb-10 md:pb-16 lg:pb-24">
      <div className="px-6 md:px-2 container">
        <h2 className="text-2xl md:text-[28px] lg:text-[32px] text-primary leading-[150%] font-semibold text-center">
          Meet The Team
        </h2>

        <div className="w-[90%] md:w-[92%] lg:w-[94%] mx-auto relative mt-10">
          <Carousel
            plugins={[autoplay.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={() => autoplay.current.stop()}
            onMouseLeave={() => autoplay.current.play()}
            className="w-full"
          >
            <CarouselContent>
              {data.data.map((member) => (
                <CarouselItem
                  key={member._id}
                  className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4 lg:pl-6 pr-2 lg:pr-3 "
                >
                  <div className="w-full h-full bg-white rounded-[8px] shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={500}
                      height={500}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl md:text-[22px] lg:text-2xl font-semibold text-[#202020] leading-[150%]">
                        {member.name}
                      </h3>
                      <h5 className="text-sm font-medium text-primary leading-[120%] py-2 md:py-[10px]">
                        {member.title}
                      </h5>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: member.description,
                        }}
                        className=" text-xs font-normal text-[#656565] leading-[140%] text-justify line-clamp-3"
                      />
                      {member.description.length > 10 && (
                        <Button
                          variant="link"
                          size="sm"
                          className="p-0 h-auto text-primary hover:text-primary/80 font-medium mt-1"
                          onClick={() => handleReadMore(member._id)}
                        >
                          Read more
                        </Button>
                      )}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* ✅ Navigation Buttons */}
            <CarouselPrevious className="absolute -left-10 lg:-left-12 xl:-left-9 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-primary hover:text-white transition" />
            <CarouselNext className="absolute -right-10 lg:-right-9 xl:-right-9 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-primary hover:text-white transition" />
          </Carousel>
        </div>
      </div>

      {/* ✅ Modal Popup for Full Details */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px] ">
          <DialogHeader>
            <DialogTitle className="text-xl lg:text-2xl font-semibold text-primary text-left">
              {doctorDetail?.data?.name || "Loading..."}
            </DialogTitle>
          </DialogHeader>

          {isFetching ? (
            <p className="text-sm text-gray-500">Loading details...</p>
          ) : (
            doctorDetail && (
              <div className="space-y-2 md:space-y-4">
                <Image
                  src={doctorDetail.data?.image}
                  alt={doctorDetail.data?.name}
                  width={600}
                  height={400}
                  className="w-full h-[160px] md:h-[200px] lg:h-[250px] object-cover rounded-md"
                />
                <h4 className="text-lg font-medium text-[#202020]">
                  {doctorDetail.data?.title}
                </h4>
                <ScrollArea className="h-[140px] md:h-[170px] lg:h-[200px] w-full pr-5">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: doctorDetail.data?.description,
                    }}
                    className="text-sm text-[#555] leading-[160%] text-justify "
                  />
                </ScrollArea>
              </div>
            )
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MeetTheTeam;
