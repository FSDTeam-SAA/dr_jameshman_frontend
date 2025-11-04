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
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { DeleteGallery } from "./delete-gallery";
import { useSession } from "next-auth/react";

interface GalleryItem {
  _id: string;
  before: {
    imageName: string;
    cloudinaryId: string;
    imageUrl: string;
  };
  after: {
    imageName: string;
    cloudinaryId: string;
    imageUrl: string;
  };
  createdAt: string;
  updatedAt: string;
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

interface GalleryResponse {
  status: boolean;
  message: string;
  data: GalleryItem[];
  pagination: Pagination;
}

export const GalleryManagementTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const session = useSession();
  const token = (session?.data?.user as { token: string })?.token;

  const { data, isLoading } = useQuery<GalleryResponse>({
    queryKey: ["all-gallery", currentPage],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/galleries?page=${currentPage}&limit=10`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res.ok) throw new Error("Failed to fetch galleries");
      return res.json();
    },
  });

  const galleries = data?.data || [];
  const pagination = data?.pagination;

  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-gray-200 pb-5">
        <Table className="border-b border-gray-200">
          <TableHeader className="bg-primary/20 py-5 rounded-lg">
            <TableRow>
              <TableHead className="py-6 text-black/85 text-center">
                Before Image
              </TableHead>
              <TableHead className="py-6 text-black/85 text-center">
                Before Name
              </TableHead>
              <TableHead className="py-6 text-black/85 text-center">
                After Image
              </TableHead>
              <TableHead className="py-6 text-black/85 text-center">
                After Name
              </TableHead>
              <TableHead className="py-6 text-black/85 text-center">
                Date
              </TableHead>
              <TableHead className="py-6 text-black/85 text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody>
            {isLoading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i} className="text-center">
                  <TableCell className="py-6">
                    <Skeleton className="h-[80px] w-[100px] mx-auto rounded-lg" />
                  </TableCell>
                  <TableCell className="py-6">
                    <Skeleton className="h-5 w-[120px] mx-auto" />
                  </TableCell>
                  <TableCell className="py-6">
                    <Skeleton className="h-[80px] w-[100px] mx-auto rounded-lg" />
                  </TableCell>
                  <TableCell className="py-6">
                    <Skeleton className="h-5 w-[120px] mx-auto" />
                  </TableCell>
                  <TableCell className="py-6">
                    <Skeleton className="h-5 w-[100px] mx-auto" />
                  </TableCell>
                  <TableCell className="py-6">
                    <div className="flex justify-center gap-3">
                      <Skeleton className="h-5 w-5" />
                      <Skeleton className="h-5 w-5" />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : galleries.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center py-10 text-black/60"
                >
                  No galleries found
                </TableCell>
              </TableRow>
            ) : (
              galleries.map((gallery) => (
                <TableRow
                  key={gallery?._id}
                  className="text-black/60 text-center"
                >
                  {/* Before Image */}
                  <TableCell className="py-6">
                    {gallery?.before?.imageUrl ? (
                      <Image
                        src={gallery.before.imageUrl}
                        alt={gallery.before.imageName || "Before image"}
                        width={100}
                        height={80}
                        className="h-[80px] w-[100px] object-cover rounded-lg mx-auto"
                      />
                    ) : (
                      <div className="h-[80px] w-[100px] bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                        <span className="text-xs text-gray-500">No Image</span>
                      </div>
                    )}
                  </TableCell>

                  {/* Before Name */}
                  <TableCell className="py-6">
                    {gallery?.before?.imageName || "No name"}
                  </TableCell>

                  {/* After Image */}
                  <TableCell className="py-6">
                    {gallery?.after?.imageUrl ? (
                      <Image
                        src={gallery.after.imageUrl}
                        alt={gallery.after.imageName || "After image"}
                        width={100}
                        height={80}
                        className="h-[80px] w-[100px] object-cover rounded-lg mx-auto"
                      />
                    ) : (
                      <div className="h-[80px] w-[100px] bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                        <span className="text-xs text-gray-500">No Image</span>
                      </div>
                    )}
                  </TableCell>

                  {/* After Name */}
                  <TableCell className="py-6">
                    {gallery?.after?.imageName || "No name"}
                  </TableCell>

                  {/* Date */}
                  <TableCell className="py-6">
                    {new Date(gallery?.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </TableCell>

                  {/* Actions */}
                  <TableCell className="py-6">
                    <div className="flex justify-center gap-2">
                      <Link
                        href={`/dashboard/gallery-management/add-gallery/edit-gallery/${gallery?._id}`}
                      >
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Edit className="h-4 w-4" />
                        </button>
                      </Link>
                      <div>
                        <DeleteGallery id={gallery?._id} />
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {pagination && (
          <div className="px-5 pt-5">
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-base text-black/60">
                Showing {galleries.length > 0 ? 1 : 0}–{galleries.length} of{" "}
                {pagination.totalItems} results
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