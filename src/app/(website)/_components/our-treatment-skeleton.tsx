"use client";

import React from "react";

export default function OurTreatmentSkeleton() {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse"
        >
          {/* Image Placeholder */}
          <div className="h-[300px]  bg-gray-200 w-full" />

          {/* Text Placeholder */}
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}
