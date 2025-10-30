import { z } from "zod";

export const addPriceListSchema = z.object({
  priceName: z.string().min(1, { message: "Price name is required" }),
  rate: z.number(),
  description: z
    .string()
    .min(10, { message: "Description should be at least 10 characters." }),
});
