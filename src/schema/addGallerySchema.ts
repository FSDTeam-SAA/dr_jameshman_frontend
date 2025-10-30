import { z } from "zod";

export const addGallerySchema = z.object({
  imageName: z.string().min(1, { message: "Image name is required" }),
  imageDescription: z
    .string()
    .min(10, { message: "Description should be at least 10 characters." }),
  imageUrl: z
    .instanceof(File, { message: "Please upload a valid image file." })
    .or(z.string().url().optional()),
});

export type AddGalleryFormType = z.infer<typeof addGallerySchema>;
