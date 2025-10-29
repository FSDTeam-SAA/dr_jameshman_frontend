"use client";
import React from "react";
import PathTracker from "./path-tracker";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";

export const AppTopBar = () => {
  const pathName = usePathname();

  return (
    <div className="p-5 rounded-lg shadow-[0px_0px_1px_1px_#0000001A] flex items-center justify-between">
      <PathTracker />

      {pathName === "/dashboard/treatment-list" && (
        <Button className="h-[40px]">
          <Plus /> Add Service
        </Button>
      )}

      {pathName === "/dashboard/price-list" && (
        <Button className="h-[40px]">
          <Plus /> Add Price List
        </Button>
      )}

      {pathName === "/dashboard/gallery-management" && (
        <Button className="h-[40px]">
          <Plus /> Add Gallery
        </Button>
      )}

      {pathName === "/dashboard/faq" && (
        <Button className="h-[40px]">
          <Plus /> Add FAQ
        </Button>
      )}
    </div>
  );
};
