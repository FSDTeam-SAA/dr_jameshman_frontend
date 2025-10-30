/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  addGallerySchema,
  AddGalleryFormType,
} from "@/schema/addGallerySchema";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ImageUp, X, Save } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { Spinner } from "@/components/ui/spinner";
import { usePathname } from "next/navigation";

interface GalleryItem {
  imageName: string;
  imageDescription: string;
  imageUrl: string;
}

interface Props {
  id?: string;
  galleryDetails?: GalleryItem;
}

const AddEditGallery = ({ id, galleryDetails }: Props) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const pathName = usePathname();

  const form = useForm<AddGalleryFormType>({
    resolver: zodResolver(addGallerySchema),
    defaultValues: {
      imageName: "",
      imageDescription: "",
      imageUrl: undefined,
    },
  });

  useEffect(() => {
    if (
      pathName !== "/dashboard/gallery-management/add-gallery" &&
      galleryDetails
    ) {
      const imgUrl = galleryDetails?.imageUrl;
      if (imgUrl) setImagePreview(imgUrl);
      form.reset({
        imageName: galleryDetails?.imageName || "",
        imageDescription: galleryDetails?.imageDescription || "",
        imageUrl: imgUrl,
      });
    }
  }, [pathName, galleryDetails, form]);

  const { mutateAsync, isPending } = useMutation<any, unknown, FormData>({
    mutationKey: ["add-gallery"],
    mutationFn: async (payload: FormData) => {
      const isAdd = pathName === "/dashboard/gallery-management/add-gallery";
      const method = isAdd ? "POST" : "PUT";
      const url = isAdd
        ? `${process.env.NEXT_PUBLIC_API_URL}/galleries`
        : `${process.env.NEXT_PUBLIC_API_URL}/galleries/${id}`;

      const res = await fetch(url, {
        method,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      return await res.json();
    },
  });

  const onSubmit = async (data: AddGalleryFormType) => {
    const formData = new FormData();
    formData.append("imageName", data.imageName);
    formData.append("imageDescription", data.imageDescription);
    if (data.imageUrl instanceof File) {
      formData.append("image", data.imageUrl);
    }

    try {
      await mutateAsync(formData);
    } catch (error) {
      console.log(`error from add gallery : ${error}`);
    }
  };

  const clearSelection = () => {
    setImagePreview(null);
    form.setValue("imageUrl", undefined);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Image Name */}
          <FormField
            control={form.control}
            name="imageName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter image name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="imageDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image Description</FormLabel>
                <FormControl>
                  <Textarea
                    rows={4}
                    placeholder="Enter image description..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Image Upload */}
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload Image</FormLabel>
                <FormControl>
                  <div className="border border-gray-300 p-4 rounded-lg">
                    {imagePreview ? (
                      <div className="relative">
                        <Image
                          src={imagePreview}
                          alt="Preview"
                          width={1000}
                          height={1000}
                          className="max-h-56 object-contain rounded"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="absolute -top-2 -right-2 h-6 w-6 p-0 rounded-full bg-white border"
                          onClick={clearSelection}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <input
                          type="file"
                          id="image-upload"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file && file.type.startsWith("image/")) {
                              const imageUrl = URL.createObjectURL(file);
                              setImagePreview(imageUrl);
                              field.onChange(file);
                            }
                          }}
                          className="hidden"
                        />
                        <Button
                          variant="outline"
                          type="button"
                          onClick={() =>
                            document.getElementById("image-upload")?.click()
                          }
                          className="w-full h-52 border-2 border-dashed border-gray-300 flex items-center justify-center"
                        >
                          <div className="flex flex-col items-center gap-2 opacity-50">
                            <ImageUp size={50} />
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

export default AddEditGallery;
