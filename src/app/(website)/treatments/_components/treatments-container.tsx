"use client"
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import ErrorContainer from '@/components/shared/ErrorContainer/ErrorContainer';
import TreatmentCart from '@/components/common/treatment-cart';
import DashboardPagination from '@/app/(dashboard)/dashboard/_component/shared/pagination';
import TreatmentSkeleton from '@/components/shared/Skeleton/TreatmentsSkeleton';
import { TreatmentCategoryResponse } from '@/components/shared/Navbar/Navbar';

const TreatmentsContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);
   const {data, isLoading, isError, error} = useQuery<TreatmentCategoryResponse>({
      queryKey: ["treatments-categories"],
      queryFn: async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/treatmentCategories`);
        return res.json();
      },
    })

  console.log(data);
  

  if (isLoading) return <TreatmentSkeleton />;
  if (isError)
    return (
      <ErrorContainer message={error?.message || "Something went wrong"} />
    );
    
  return (
    <div className='py-8 md:py-12 lg:py-12'>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 pt-8 md:pt-10 lg:pt-12">
          {data?.data?.map((item) => {
            console.log(item);
            return (
              <div key={item._id}>
                <TreatmentCart item={item} />
              </div>
            );
          })}
        </div>
         <div className="container pt-8 md:pt-10 lg:pt-12">
          {data && data?.pagination && data?.pagination?.totalPages > 1 && (
            <div className="flex items-center justify-between">
            <p className="text-sm md:text-base text-black/60">
              Showing page {currentPage} to {data?.pagination?.itemsPerPage * currentPage} of {data?.pagination?.totalCategories} results
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
  )
}

export default TreatmentsContainer
