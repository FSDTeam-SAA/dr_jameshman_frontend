"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";

const GdprPage = () => {
  const { data = {} } = useQuery({
    queryKey: ["gdpr"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/gdpr`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      return data?.data;
    },
  });

  return (
    <div className="container mt-28 min-h-screen">
      <div
        className="p-5 border border-gray-300 rounded-lg mt-8"
        dangerouslySetInnerHTML={{ __html: data?.gdprContent }}
      ></div>
    </div>
  );
};

export default GdprPage;
