// components/DoctorsTable.tsx
"use client";

import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Edit, Trash2, User } from "lucide-react";
import { Doctor } from "@/schema/addDoctorSchema";
import DashboardPagination from "../../_component/shared/pagination";
import Image from "next/image";

interface DoctorsResponse {
  data: Doctor[];
  pagination: {
    totalPages: number;
    totalDoctors: number;
  };
}

const DoctorsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const token = (session?.user as { token: string })?.token;

  // Fetch doctors
  const { data: doctorsData, isLoading } = useQuery<DoctorsResponse>({
    queryKey: ["doctors", currentPage],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/doctors?page=${currentPage}&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res.ok) throw new Error("Failed to fetch doctors");
      return res.json();
    },
    enabled: !!token,
  });

  // Delete doctor mutation
  const { mutate: deleteDoctor } = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/doctors/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res.ok) throw new Error("Failed to delete doctor");
      return res.json();
    },
    onSuccess: () => {
      toast.success("Doctor deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      deleteDoctor(id);
    }
  };

  const doctors = doctorsData?.data || [];
  const pagination = doctorsData?.pagination;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Doctors</h1>
        <Link href="/dashboard/doctors/add">
          <Button>Add New Doctor</Button>
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200">
        <Table>
          <TableHeader className="bg-primary/20">
            <TableRow>
              <TableHead className="py-5">Doctor</TableHead>
              <TableHead className="py-5">Title</TableHead>
              <TableHead className="py-5">Description</TableHead>
              <TableHead className="py-5">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading &&
              Array.from({ length: 5 }).map((_, idx) => (
                <TableRow key={idx}>
                  <TableCell className="py-6">
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                  </TableCell>
                  <TableCell className="py-6">
                    <Skeleton className="h-4 w-24" />
                  </TableCell>
                  <TableCell className="py-6">
                    <Skeleton className="h-4 w-48" />
                  </TableCell>
                  <TableCell className="py-6">
                    <Skeleton className="h-8 w-16" />
                  </TableCell>
                </TableRow>
              ))}

            {!isLoading && doctors.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="py-10 text-center text-gray-500"
                >
                  No doctors found.
                </TableCell>
              </TableRow>
            )}

            {!isLoading &&
              doctors.map((doctor) => (
                <TableRow key={doctor._id} className="text-gray-700">
                  <TableCell className="py-6">
                    <div className="flex items-center gap-3">
                      {doctor.image ? (
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          width={1000}
                          height={1000}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <User className="h-6 w-6 text-gray-400" />
                        </div>
                      )}
                      <span className="font-medium">{doctor.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-6">{doctor.title}</TableCell>
                  <TableCell className="py-6">
                    <p className="line-clamp-2 max-w-md">
                      {doctor.description}
                    </p>
                  </TableCell>
                  <TableCell className="py-6">
                    <div className="flex items-center gap-2">
                      <Link href={`/dashboard/doctors/edit/${doctor._id}`}>
                        <button>
                          <Edit className="h-4 w-4 mr-1" />
                        </button>
                      </Link>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(doctor._id, doctor.name)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        {pagination && !isLoading && (
          <div className="px-5 py-5 border-t">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {doctors.length > 0 ? 1 : 0}–{doctors.length} of{" "}
                {pagination.totalDoctors} results
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

export default DoctorsTable;
