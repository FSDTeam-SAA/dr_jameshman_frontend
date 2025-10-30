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
import DashboardPagination from "../../_component/shared/pagination";

export const FaqTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-gray-200 pb-5">
        <Table className="border-b border-gray-200">
          <TableHeader className="bg-primary/20 py-5 rounded-lg">
            <TableHead className="py-6 text-black/85 text-center">
              FAQ Question
            </TableHead>
            <TableHead className="py-6 text-black/85 text-center">
              FAQ Answer
            </TableHead>
            <TableHead className="py-6 text-black/85 text-center">
              Date
            </TableHead>
            <TableHead className="py-6 text-black/85 text-center">
              Action
            </TableHead>
          </TableHeader>

          <TableBody>
            <TableRow className="text-black/60 text-center">
              <TableCell className="py-6">Dr. Fleming</TableCell>
              <TableCell className="py-6">
                Lorem Ipsum is simply dummy text of the pri
              </TableCell>
              <TableCell>Oct 18, 2025</TableCell>
              <TableCell className="py-6">
                <div className="space-x-2">
                  <button>
                    <Eye className="h-5 w-5" />
                  </button>

                  <button>
                    <Trash className="h-5 w-5"></Trash>
                  </button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="px-5 pt-5">
          <div className="flex items-center justify-between">
            <p className="text-sm md:text-base text-black/60">
              Showing page {currentPage} to {5} of {10} results
            </p>

            <div>
              <DashboardPagination
                totalPages={5}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
