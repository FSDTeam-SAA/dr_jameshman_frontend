// components/AddEditDoctors.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import { doctorSchema, type DoctorFormData, type Doctor } from "@/schema/doctorSchema";
import { ImageUp, X } from "lucide-react";
import Image from "next/image";

interface AddEditDoctorsProps {
  doctorData?: Doctor;
  id?: string;
}

const AddEditDoctors = ({ doctorData, id }: AddEditDoctorsProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const token = (session?.user as { token: string })?.token;

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const form = useForm<DoctorFormData>({
    resolver: zodResolver(doctorSchema),
    defaultValues: {
      name: "",
      title: "",
      description: "",
      image: "",
    },
  });

  // Reset form when editing
  useEffect(() => {
    if (doctorData && pathname.includes("/edit")) {
      form.reset({
        name: doctorData.name,
        title: doctorData.title,
        description: doctorData.description,
        image: doctorData.image || "",
      });
      if (doctorData.image) {
        setImagePreview(doctorData.image);
      }
    }
  }, [doctorData, form, pathname]);

  const handleImageChange = (file: File) => {
    setSelectedImage(file);
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  const clearImageSelection = () => {
    setSelectedImage(null);
    setImagePreview(null);
    form.setValue("image", "");
    form.setValue("cloudinaryId", "");
  };

  const uploadToCloudinary = async (file: File): Promise<{ image: string; cloudinaryId: string }> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "doctors_preset"); // Replace with your upload preset

    const response = await fetch(`https://api.cloudinary.com/v1_1/your-cloud-name/image/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Image upload failed");
    }

    const data = await response.json();
    return {
      image: data.secure_url,
      cloudinaryId: data.public_id,
    };
  };

  const { mutateAsync: createUpdateDoctor, isPending } = useMutation({
    mutationKey: ["doctors"],
    mutationFn: async (data: DoctorFormData) => {
      let imageData = {
        image: data.image,
        cloudinaryId: data.cloudinaryId,
      };

      if (selectedImage) {
        imageData = await uploadToCloudinary(selectedImage);
      }

      const requestData = {
        ...data,
        ...imageData,
      };

      const isEdit = pathname.includes("/edit") && id;
      const url = `${process.env.NEXT_PUBLIC_API_URL}/doctors${isEdit ? `/${id}` : ""}`;
      const method = isEdit ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(isEdit ? "Failed to update doctor" : "Failed to create doctor");
      }

      return response.json();
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["doctors"] });
      
      if (!pathname.includes("/edit")) {
        form.reset();
        setImagePreview(null);
        setSelectedImage(null);
      }
      
      router.push("/dashboard/doctors");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = async (data: DoctorFormData) => {
    try {
      await createUpdateDoctor(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        {pathname.includes("/edit") ? "Edit Doctor" : "Add New Doctor"}
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Doctor Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter doctor name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Title Field */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title/Position</FormLabel>
                <FormControl>
                  <Input placeholder="Enter doctor title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description Field */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter doctor description"
                    className="min-h-[120px]"
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
            name="image"
            render={() => (
              <FormItem>
                <FormLabel>Doctor Image</FormLabel>
                <FormControl>
                  <div className="border border-gray-400 p-5 rounded-lg">
                    {imagePreview ? (
                      <div className="relative">
                        <Image
                          src={imagePreview}
                          alt="Preview"
                          width={1000}
                          height={1000}
                          className="max-h-48 max-w-full object-contain rounded mx-auto"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute -top-2 -right-2 h-6 w-6 p-0 rounded-full bg-white border"
                          onClick={clearImageSelection}
                          type="button"
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
                            if (file) {
                              handleImageChange(file);
                            }
                          }}
                          className="hidden"
                        />
                        <Button
                          variant="outline"
                          className="w-full h-52 border-2 border-dashed border-gray-300 flex items-center justify-center"
                          type="button"
                          onClick={() => document.getElementById("image-upload")?.click()}
                        >
                          <div className="flex flex-col items-center gap-2 opacity-40">
                            <ImageUp className="h-12 w-12" />
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
              <span className="flex items-center gap-2">
                <Spinner className="h-4 w-4" />
                {pathname.includes("/edit") ? "Updating..." : "Creating..."}
              </span>
            ) : (
              <span>
                {pathname.includes("/edit") ? "Update Doctor" : "Add Doctor"}
              </span>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddEditDoctors;