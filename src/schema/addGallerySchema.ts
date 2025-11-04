// schema/addGallerySchema.ts
import { z } from "zod";

export const addGallerySchema = z.object({
  before: z.object({
    imageName: z.string().min(1, { message: "Before image name is required" }),
    imageFile: z.instanceof(File, { message: "Please upload a valid before image file." }).optional(),
  }),
  after: z.object({
    imageName: z.string().min(1, { message: "After image name is required" }),
    imageFile: z.instanceof(File, { message: "Please upload a valid after image file." }).optional(),
  }),
}).refine((data) => data.before.imageFile || data.after.imageFile, {
  message: "At least one image must be uploaded",
  path: ["before.imageFile"],
});

export type AddGalleryFormType = z.infer<typeof addGallerySchema>;