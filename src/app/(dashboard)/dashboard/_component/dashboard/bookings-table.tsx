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
import { Eye, Trash } from "lucide-react";
import DashboardPagination from "../shared/pagination";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { ViewBookingModal } from "./view-booking-modal";

type Booking = {
  _id: string;
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  consent: boolean;
  createdAt: string;
  updatedAt: string;
};

type Pagination = {
  currentPage: number;
  totalPages: number;
  totalBookings: number;
  itemsPerPage: number;
};

type BookingsResponse = {
  status: boolean;
  message: string;
  data: Booking[];
  pagination: Pagination;
};

export const BookingsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [contactId, setContactId] = useState("");

  const { data: allBookings, isLoading } = useQuery<BookingsResponse>({
    queryKey: ["all-bookings", currentPage],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/bookings?page=${currentPage}&limit=${10}`
      );
      const data = await res.json();
      return data;
    },
  });

  const bookings = allBookings?.data || [];
  const pagination = allBookings?.pagination;

  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-gray-200 pb-5">
        <Table className="border-b border-gray-200">
          <TableHeader className="bg-primary/20 py-5 rounded-lg">
            <TableHead className="py-6 text-black/85 text-center">
              Name
            </TableHead>
            <TableHead className="py-6 text-black/85 text-center">
              Subject
            </TableHead>
            <TableHead className="py-6 text-black/85 text-center">
              Email
            </TableHead>
            <TableHead className="py-6 text-black/85 text-center">
              Phone Number
            </TableHead>
            <TableHead className="py-6 text-black/85 text-center">
              Preferred Date
            </TableHead>
            <TableHead className="py-6 text-black/85 text-center">
              Preferred Time
            </TableHead>
            <TableHead className="py-6 text-black/85 text-center">
              Message
            </TableHead>
            <TableHead className="py-6 text-black/85 text-center">
              Action
            </TableHead>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              Array.from({ length: 10 }).map((_, i) => (
                <TableRow key={i}>
                  {Array.from({ length: 8 }).map((_, j) => (
                    <TableCell key={j} className="py-6 text-center">
                      <Skeleton className="h-5 w-24 mx-auto" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : bookings.length > 0 ? (
              bookings.map((booking) => (
                <TableRow
                  key={booking?._id}
                  className="text-black/60 text-center"
                >
                  <TableCell className="py-6">{booking?.name}</TableCell>
                  <TableCell className="py-6">{booking?.subject}</TableCell>
                  <TableCell className="py-6">{booking?.email}</TableCell>
                  <TableCell className="py-6">{booking?.phoneNumber}</TableCell>
                  <TableCell className="py-6">
                    {new Date(booking?.preferredDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="py-6">
                    {/* preferredTime is already "15:30" — format it nicely */}
                    {booking?.preferredTime
                      ? new Date(
                          `1970-01-01T${booking.preferredTime}`
                        ).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "—"}
                  </TableCell>
                  <TableCell className="py-6">{booking?.message}</TableCell>
                  <TableCell className="py-6">
                    <div className="space-x-2 flex justify-center">
                      <button
                        onClick={() => {
                          setContactId(booking?._id);
                          setIsOpen(true);
                        }}
                      >
                        <Eye className="h-5 w-5" />
                      </button>
                      <button>
                        <Trash className="h-5 w-5" />
                      </button>
                    </div>
                  </TableCell>

                  <div>
                    {isOpen && (
                      <ViewBookingModal
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        id={contactId}
                      />
                    )}
                  </div>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="py-10 text-center text-black/60"
                >
                  No bookings found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {pagination && (
          <div className="px-5 pt-5">
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-base text-black/60">
                Showing {bookings.length > 0 ? 1 : 0}–{bookings.length} of{" "}
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
