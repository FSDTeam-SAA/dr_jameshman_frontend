"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { CalendarIcon, ChevronRight } from "lucide-react";
import Link from "next/link";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

// ✅ Updated Zod schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  subject: z
    .string()
    .min(2, { message: "Subject must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phoneNumber: z
    .string()
    .min(11, { message: "Phone Number must be at least 11 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
  // ✅ Accept both Date (for form) and string (for submission)
  preferredDate: z.union([z.date(), z.string()]),
  preferredTime: z.string().min(1, "Preferred Time is required"),
});

const BookingContainer = () => {
  const queryClient = useQueryClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      email: "",
      phoneNumber: "",
      message: "",
      consent: false,
      preferredDate: new Date(),
      preferredTime: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["bookings"],
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });
      return res.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["all-bookings"] });
      if (!data?.status) {
        toast.error(data?.message || "Something went wrong");
        return;
      }
      toast.success(data?.message || "Booking sent successfully");
      form.reset();
    },
  });

  // ✅ Fix date timezone issue here
  function onSubmit(values: z.infer<typeof formSchema>) {
    // ensure correct formatting for backend
    const dateValue =
      typeof values.preferredDate === "string"
        ? values.preferredDate
        : `${values.preferredDate.getFullYear()}-${String(
            values.preferredDate.getMonth() + 1
          ).padStart(2, "0")}-${String(values.preferredDate.getDate()).padStart(
            2,
            "0"
          )}`;

    const finalValues = {
      ...values,
      preferredDate: dateValue, // now safely a string
    };

    console.log("✅ Final booking data:", finalValues);
    mutate(finalValues);
  }

  return (
    <div className="pb-10 md:pb-16 lg:pb-24 pt-24 lg:pt-28">
      <div className="container">
        <ul className="flex items-center gap-2">
          <Link href="/">
            <li className="text-sm md:text-base lg:text-lg font-normal text-[#666666] leading-[120%] hover:underline hover:font-medium">
              Home
            </li>
          </Link>
          <li>
            <ChevronRight className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6" />
          </li>
          <li className="text-sm md:text-base lg:text-lg font-normal leading-[120%] text-[#131313]">
            Book & appointment
          </li>
        </ul>

        <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold text-black leading-[150%] text-center pt-4 md:pt-8 lg:pt-10">
          Book Consultation
        </h2>

        <div className="pt-5 md:pt-6 lg:pt-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name & Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F]">
                        Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[48px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-[#666666] font-semibold"
                          placeholder="Name Here"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F]">
                        Subject *
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[48px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-[#666666] font-semibold"
                          placeholder="Subject Here"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F]">
                        Email Address *
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[48px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-[#666666] font-semibold"
                          placeholder="hello@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F]">
                        Phone Number *
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[48px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-[#666666] font-semibold"
                          placeholder="+1234567890"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold text-black">
                        Preferred Date*
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={`w-full justify-start text-left h-12 ${
                                !field.value && "text-muted-foreground"
                              }`}
                            >
                              {field.value
                                ? format(field.value, "MMM dd, yyyy")
                                : "Pick date"}
                              <CalendarIcon className="ml-auto h-4 w-4" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={
                              typeof field.value === "string"
                                ? new Date(field.value)
                                : field.value
                            }
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="preferredTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold text-black">
                        Preferred Time *
                      </FormLabel>
                      <FormControl>
                        <Input type="time" className="h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F]">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-[200px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-[#666666] font-semibold"
                        placeholder="Write your message Here"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              {/* Consent */}
              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-3">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="consent"
                        className="mt-1"
                      />
                    </FormControl>
                    <div className="space-y-0 leading-none">
                      <Label
                        htmlFor="consent"
                        className="text-xs md:text-sm text-[#8E938F]"
                      >
                        I consent to having this website store my submitted
                        information so they can respond to my inquiry. See our{" "}
                        <span className="text-primary">privacy policy</span> to
                        learn more about how we use data.
                      </Label>
                      <FormMessage className="text-red-500" />
                    </div>
                  </FormItem>
                )}
              />

              <div className="pt-4">
                <Button
                  disabled={isPending}
                  className="w-full h-[60px] rounded-[8px] bg-primary text-[#F8F9FA] text-base font-medium"
                  type="submit"
                >
                  {isPending ? "Sending..." : "Book Appointment"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default BookingContainer;





// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { toast } from "sonner";
// import { CalendarIcon, ChevronRight } from "lucide-react";
// import Link from "next/link";

// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Calendar } from "@/components/ui/calendar";
// import { format } from "date-fns";

// const formSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   subject: z
//     .string()
//     .min(2, { message: "Subject must be at least 2 characters." }),
//   email: z.string().email({ message: "Please enter a valid email address." }),
//   phoneNumber: z
//     .string()
//     .min(11, { message: "Phone Number must be at least 11 characters." }),
//   message: z
//     .string()
//     .min(10, { message: "Message must be at least 10 characters." }),
//   consent: z.boolean().refine((val) => val === true, {
//     message: "You must accept the terms and conditions.",
//   }),
//   preferredDate: z.date({ message: "Preferred Date is required" }),
//   preferredTime: z.string().min(1, "Preferred Time is required"),
// });

// const BookingContainer = () => {
//   const queryClient = useQueryClient();
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       subject: "",
//       email: "",
//       phoneNumber: "",
//       message: "",
//       consent: false,
//       preferredDate: new Date(),
//       preferredTime: "",
//     },
//   });

//   const { mutate, isPending } = useMutation({
//     mutationKey: ["bookings"],
//     mutationFn: async (values: z.infer<typeof formSchema>) => {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
//         method: "POST",
//         body: JSON.stringify(values),
//         headers: { "Content-Type": "application/json" },
//       });
//       return res.json();
//     },
//     onSuccess: (data) => {
//       queryClient.invalidateQueries({ queryKey: ["all-bookings"] });
//       if (!data?.status) {
//         toast.error(data?.message || "Something went wrong");
//         return;
//       }
//       toast.success(data?.message || "Booking sent successfully");
//       form.reset();
//     },
//   });

//   // 2. Define a submit handler.
//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log(values);
//     mutate(values);
//   }
//   return (
//     <div className="pb-10 md:pb-16 lg:pb-24 pt-24 lg:pt-28">
//       <div className="container">
//         <ul className="flex items-center gap-2">
//           <Link href="/">
//             <li className="text-sm md:text-base lg:text-lg font-normal text-[#666666] leading-[120%] hover:underline hover:font-medium">
//               Home
//             </li>
//           </Link>
//           <li>
//             <ChevronRight className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6" />
//           </li>
//           <li className="text-sm md:text-base lg:text-lg font-normal leading-[120%] text-[#131313]">
//             Book & appointment
//           </li>
//         </ul>
//         <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold text-black leading-[150%] text-center pt-4 md:pt-8 lg:pt-10">
//           Book Consultation
//         </h2>
//         <div className="pt-5 md:pt-6 lg:pt-8">
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
//                 <FormField
//                   control={form.control}
//                   name="name"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F] leading-[120%]">
//                         Name *
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           className="h-[48px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-[#666666] text-base leading-[120%] font-semibold"
//                           placeholder="Name Here"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage className="text-red-500" />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="subject"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F] leading-[120%]">
//                         Subject *
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           className="h-[48px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-[#666666] text-base leading-[120%] font-semibold"
//                           placeholder="Subject Here"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage className="text-red-500" />
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F] leading-[120%]">
//                         Email Address *
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           className="h-[48px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-[#666666] text-base leading-[120%] font-semibold"
//                           placeholder="hello@example.com"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage className="text-red-500" />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="phoneNumber"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F] leading-[120%]">
//                         Phone Number *
//                       </FormLabel>
//                       <FormControl>
//                         <Input
//                           className="h-[48px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-[#666666] text-base leading-[120%] font-semibold"
//                           placeholder="+1234567890"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage className="text-red-500" />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
//                 {/* Date */}
//                 <FormField
//                   control={form.control}
//                   name="preferredDate"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-base font-semibold text-black leading-[120%]">
//                         Preferred Date*
//                       </FormLabel>
//                       <Popover>
//                         <PopoverTrigger asChild>
//                           <FormControl>
//                             <Button
//                               variant="outline"
//                               className={`w-full justify-start text-left h-12 ${
//                                 !field.value && "text-muted-foreground"
//                               }`}
//                             >
//                               {field.value
//                                 ? format(field.value, "MMM dd, yyyy")
//                                 : "Pick date"}
//                               <CalendarIcon className="ml-auto h-4 w-4" />
//                             </Button>
//                           </FormControl>
//                         </PopoverTrigger>
//                         <PopoverContent className="w-auto p-0" align="start">
//                           <Calendar
//                             mode="single"
//                             selected={field.value}
//                             onSelect={field.onChange}
//                             initialFocus
//                           />
//                         </PopoverContent>
//                       </Popover>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 {/* Start Time */}
//                 <FormField
//                   control={form.control}
//                   name="preferredTime"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel className="text-base font-semibold text-black leading-[120%]">
//                         Preferred Time *
//                       </FormLabel>
//                       <FormControl>
//                         <Input type="time" className="h-12" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <FormField
//                 control={form.control}
//                 name="message"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F] leading-[120%]">
//                       Message
//                     </FormLabel>
//                     <FormControl>
//                       <Textarea
//                         className="h-[200px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-[#666666] text-base leading-[120%] font-semibold"
//                         placeholder="Write your message Here"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage className="text-red-500" />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="consent"
//                 render={({ field }) => (
//                   <FormItem className="flex items-start space-x-3 space-y-0">
//                     <FormControl>
//                       <Checkbox
//                         checked={field.value}
//                         onCheckedChange={field.onChange}
//                         id="consent"
//                         className="mt-1"
//                       />
//                     </FormControl>
//                     <div className="space-y-0 leading-none">
//                       <Label
//                         htmlFor="consent"
//                         className="text-xs md:text-sm text-[#8E938F] font-normal leading-[150%]"
//                       >
//                         I consent to having this website store my submitted
//                         information so they can respond to my inquiry. See our{" "}
//                         <span className="text-primary">privacy policy</span> to
//                         learn more about how we use data.
//                       </Label>
//                       <FormMessage className="text-red-500" />
//                     </div>
//                   </FormItem>
//                 )}
//               />

//               <div className="pt-4">
//                 <Button
//                   disabled={isPending}
//                   className="w-full h-[60px] rounded-[8px] bg-primary text-[#F8F9FA] text-base font-medium leading-[120%]"
//                   type="submit"
//                 >
//                   {isPending ? "Sending..." : "Book Appointment"}
//                 </Button>
//               </div>
//             </form>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingContainer;
