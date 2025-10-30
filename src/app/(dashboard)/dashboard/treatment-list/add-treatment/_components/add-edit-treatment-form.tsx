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
import { useState } from "react";

type FormType = z.infer<typeof addTreatmentSchema>;

export const AddEditTreatmentForm = () => {
  const [imagePreviews, setImagePreviews] = useState<(string | null)[]>([null]);

  const form = useForm<FormType>({
    resolver: zodResolver(addTreatmentSchema),
    defaultValues: {
      treatments: [
        {
          serviceName: "",
          title: "",
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

  const onSubmit = (value: FormType) => {
    console.log("Submitted Data:", value);
  };

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

            {/* Title */}
            <FormField
              control={form.control}
              name={`treatments.${index}.title`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter title" {...field} />
                  </FormControl>
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
              title: "",
              description: "",
              image: new File([], ""),
            })
          }
          className="w-full bg-primary/20 hover:bg-primary/30 text-primary flex items-center justify-center gap-2"
        >
          <Plus /> Add More Treatment
        </Button>

        <Button type="submit" className="w-full h-[50px] mt-5">
          <Save /> Save
        </Button>
      </form>
    </Form>
  );
};
