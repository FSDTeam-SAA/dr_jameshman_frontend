/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { addTreatmentSchema } from "@/schema/addTreatmentSchema";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RichTextEditor } from "../../../_component/shared/rich-text-editor";
import { Button } from "@/components/ui/button";
import { ImageUp, Plus, Save, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormType = z.infer<typeof addTreatmentSchema>;

type TreatmentCategory = {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

export const AddEditTreatmentForm = () => {
  const [imagePreviews, setImagePreviews] = useState<(string | null)[]>([null]);
  const queryClient = useQueryClient();
  const session = useSession();
  const token = (session?.data?.user as { token: string })?.token;

  // Fetch treatment categories
  const { data: categories, isLoading: categoriesLoading } = useQuery<TreatmentCategory[]>({
    queryKey: ["all-treatment-categories"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/treatmentCategories`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res.ok) throw new Error("Failed to fetch treatment categories");
      const data = await res.json();
      return data.data || [];
    },
  });

  const form = useForm<FormType>({
    resolver: zodResolver(addTreatmentSchema),
    defaultValues: {
      treatments: [
        {
          serviceName: "",
          description: "",
          image: new File([], ""),
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "treatments",
  });

  // Add category field to the mutation
  const { mutateAsync, isPending } = useMutation<any, any, FormData>({
    mutationKey: ["add-treatment"],
    mutationFn: async (formData) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/treatments`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error("Failed to add treatment");
      }

      return res.json();
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["all-price-list"] });
      toast.success(data.message || "Treatment added successfully");
      form.reset();
      setImagePreviews([null]);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to add treatment");
    },
  });

  const clearSelection = (index: number) => {
    if (imagePreviews[index]) {
      URL.revokeObjectURL(imagePreviews[index]!);
      setImagePreviews((prev) => {
        const updated = [...prev];
        updated[index] = null;
        return updated;
      });
      form.setValue(`treatments.${index}.image`, new File([], ""), {
        shouldValidate: true,
      });
    }
  };

  const onSubmit = async (value: FormType) => {
    try {
      // Create FormData for each treatment
      for (const treatment of value.treatments) {
        const formData = new FormData();
        formData.append("serviceName", treatment.serviceName);
        formData.append("description", treatment.description);
        
        // Get category from form (you'll need to add this to your form)
        const category = form.getValues(`treatments.${value.treatments.indexOf(treatment)}.category`);
        if (category) {
          formData.append("category", category);
        }
        
        if (treatment.image && treatment.image.size > 0) {
          formData.append("image", treatment.image);
        }

        await mutateAsync(formData);
      }
    } catch (error) {
      console.log("Error submitting treatment:", error);
    }
  };

  // Update imagePreviews array when fields change
  useEffect(() => {
    if (fields.length > imagePreviews.length) {
      setImagePreviews(prev => [...prev, null]);
    } else if (fields.length < imagePreviews.length) {
      setImagePreviews(prev => prev.slice(0, fields.length));
    }
  }, [fields.length, imagePreviews.length]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="border p-5 rounded-lg space-y-5 relative"
          >
            {/* Remove button */}
            {fields.length > 1 && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 text-red-500"
                onClick={() => remove(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            )}

            {/* Service Name */}
            <FormField
              control={form.control}
              name={`treatments.${index}.serviceName`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter service name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Treatment Category */}
            <FormField
              control={form.control}
              name={`treatments.${index}.category`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Treatment Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categoriesLoading ? (
                        <SelectItem value="loading" disabled>
                          Loading categories...
                        </SelectItem>
                      ) : categories && categories.length > 0 ? (
                        categories.map((category) => (
                          <SelectItem key={category._id} value={category._id}>
                            {category.name}
                          </SelectItem>
                        ))
                      ) : (
                        <SelectItem value="no-categories" disabled>
                          No categories found
                        </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name={`treatments.${index}.description`}
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

            {/* Image Upload */}
            <FormField
              control={form.control}
              name={`treatments.${index}.image`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Image</FormLabel>
                  <FormControl>
                    <div className="border border-gray-400 p-5 rounded-lg">
                      {imagePreviews[index] ? (
                        <div className="relative">
                          <Image
                            src={imagePreviews[index]!}
                            alt="Preview"
                            width={1000}
                            height={1000}
                            className="max-h-48 max-w-full object-contain rounded"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            className="absolute -top-2 -right-2 h-6 w-6 p-0 rounded-full bg-white border"
                            onClick={() => clearSelection(index)}
                            type="button"
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ) : (
                        <div className="text-center">
                          <input
                            type="file"
                            id={`image-upload-${index}`}
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file && file.type.startsWith("image/")) {
                                const imageUrl = URL.createObjectURL(file);
                                setImagePreviews((prev) => {
                                  const updated = [...prev];
                                  updated[index] = imageUrl;
                                  return updated;
                                });
                                field.onChange(file);
                              }
                            }}
                            className="hidden"
                          />
                          <Button
                            variant="outline"
                            className="w-full h-52 border-2 border-dashed border-gray-300 flex items-center justify-center"
                            type="button"
                            onClick={() =>
                              document
                                .getElementById(`image-upload-${index}`)
                                ?.click()
                            }
                          >
                            <div className="flex flex-col items-center gap-2 opacity-40">
                              <ImageUp
                                style={{ height: "50px", width: "50px" }}
                              />
                              <span>Upload Image</span>
                            </div>
                          </Button>
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}

        {/* Add More Button */}
        <Button
          type="button"
          onClick={() =>
            append({
              serviceName: "",
              description: "",
              image: new File([], ""),
              category: "",
            })
          }
          className="w-full bg-primary/20 hover:bg-primary/30 text-primary flex items-center justify-center gap-2"
        >
          <Plus /> Add More Treatment
        </Button>

        <Button 
          type="submit" 
          className="w-full h-[50px] mt-5 disabled:cursor-not-allowed"
          disabled={isPending}
        >
          {isPending ? (
            <span className="flex items-center gap-1">
              <Spinner /> Saving...
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <Save /> Save
            </span>
          )}
        </Button>
      </form>
    </Form>
  );
};