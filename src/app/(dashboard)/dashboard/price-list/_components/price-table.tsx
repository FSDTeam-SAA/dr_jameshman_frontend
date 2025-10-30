"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit } from "lucide-react";
import DashboardPagination from "../../_component/shared/pagination";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { DeletePriceList } from "./delete-price-list";
import Link from "next/link";
import { useSession } from "next-auth/react";

type PriceItem = {
  _id: string;
  serviceName: string;
  description: string;
  rate: number;
};

type PaginationType = {
  totalPages: number;
  totalBookings: number;
};

type PriceResponse = {
  data: PriceItem[];
  pagination: PaginationType;
};

export const PriceTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const session = useSession();
  const token = (session?.data?.user as { token: string })?.token;

  const { data: allPriceList, isLoading } = useQuery<PriceResponse>({
    queryKey: ["all-price-list", currentPage],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/treatmentfees?page=${currentPage}&limit=10`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res.ok) throw new Error("Failed to fetch price list");
      return res.json();
    },
  });

  const priceLists = allPriceList?.data || [];
  const pagination = allPriceList?.pagination;

  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-gray-200 pb-5">
        <Table className="border-b border-gray-200">
          <TableHeader className="bg-primary/20">
            <TableRow>
              <TableHead className="py-5 text-center text-black/85">
                Service Name
              </TableHead>
              <TableHead className="py-5 text-center text-black/85">
                Description
              </TableHead>
              <TableHead className="py-5 text-center text-black/85">
                Rate
              </TableHead>
              <TableHead className="py-5 text-center text-black/85">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading &&
              Array.from({ length: 10 }).map((_, idx) => (
                <TableRow key={idx}>
                  <TableCell className="py-6 text-center">
                    <Skeleton className="h-5 w-32 mx-auto" />
                  </TableCell>
                  <TableCell className="py-6 text-center">
                    <Skeleton className="h-5 w-48 mx-auto" />
                  </TableCell>
                  <TableCell className="py-6 text-center">
                    <Skeleton className="h-5 w-20 mx-auto" />
                  </TableCell>
                  <TableCell className="py-6 text-center">
                    <Skeleton className="h-5 w-16 mx-auto" />
                  </TableCell>
                </TableRow>
              ))}

            {!isLoading && priceLists.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="py-10 text-center text-black/50 text-sm"
                >
                  No price data found.
                </TableCell>
              </TableRow>
            )}

            {!isLoading &&
              priceLists.map((priceList) => (
                <TableRow
                  key={priceList?._id}
                  className="text-black/70 text-center"
                >
                  <TableCell className="py-6">
                    {priceList?.serviceName}
                  </TableCell>
                  <TableCell className="py-6">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: priceList?.description || "",
                      }}
                    />
                  </TableCell>
                  <TableCell className="py-6">${priceList?.rate}</TableCell>
                  <TableCell className="py-6">
                    <div className="flex items-center justify-center gap-2">
                      <Link
                        href={`/dashboard/price-list/add-price-list/edit-price-list/${priceList?._id}`}
                      >
                        <button className="hover:text-primary transition-colors">
                          <Edit className="h-5 w-5" />
                        </button>
                      </Link>

                      <div>
                        <DeletePriceList id={priceList?._id} />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        {pagination && !isLoading && (
          <div className="px-5 pt-5">
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-base text-black/60">
                Showing {priceLists.length > 0 ? 1 : 0}–{priceLists.length} of{" "}
                {pagination.totalBookings} results
              </p>

              <div>
                <DashboardPagination
                  totalPages={pagination.totalPages}
                  currentPage={currentPage}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
