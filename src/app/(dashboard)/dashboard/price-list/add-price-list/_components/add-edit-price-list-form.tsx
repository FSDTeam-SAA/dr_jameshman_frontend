/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addPriceListSchema } from "@/schema/addPriceListSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { RichTextEditor } from "../../../_component/shared/rich-text-editor";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

type formType = z.input<typeof addPriceListSchema>;

const AddEditPriceListForm = () => {
  const queryClient = useQueryClient();

  const form = useForm<formType>({
    resolver: zodResolver(addPriceListSchema),
    defaultValues: {
      serviceName: "",
      rate: "",
      description: "",
    },
  });

  const { mutateAsync, isPending } = useMutation<any, any, formType>({
    mutationKey: ["add-price-list"],
    mutationFn: async (data) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/treatmentfees`,
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      return await res.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["all-price-list"] });
      toast.success(data.message);
      form.reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = async (value: formType) => {
    console.log("value: ", value);
    try {
      await mutateAsync(value);
    } catch (error) {
      console.log(`error from add price list : ${error}`);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* priceName field */}
          <FormField
            control={form.control}
            name="serviceName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Name</FormLabel>

                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    placeholder="Enter price name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* rate field */}
          <FormField
            control={form.control}
            name="rate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rate</FormLabel>

                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    placeholder="Enter price name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <RichTextEditor
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isPending}
            className="w-full h-[50px] mt-5 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <span className="flex items-center gap-1">
                <Spinner /> Save
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <Save /> Save
              </span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddEditPriceListForm;
