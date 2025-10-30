/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Spinner } from "@/components/ui/spinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash } from "lucide-react";
import React from "react";
import { toast } from "sonner";

export const DeleteBooking = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation<any, Error, string>({
    mutationKey: ["delete-booking"],
    mutationFn: async (id: string) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/bookings/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      return data;
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["all-bookings"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleDelete = async (id: string) => {
    try {
      await mutateAsync(id);
    } catch (error) {
      console.log(`error from bookings delete : ${error}`);
    }
  };

  return (
    <button onClick={() => handleDelete(id)}>
      {isPending ? <Spinner /> : <Trash className="h-5 w-5" />}
    </button>
  );
};
