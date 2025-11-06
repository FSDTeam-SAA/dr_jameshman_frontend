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
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Upload, X } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import Image from "next/image";

const formSchema = z.object({
  patientName: z
    .string()
    .min(2, { message: "Patient Name must be at least 2 characters." }),
  patientDOB: z.date({ message: "Preferred Date is required" }),
  patientEmail: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  patientPhone: z.string().min(11, {
    message: "patient Phone Number must be at least 11 characters.",
  }),
  dentistName: z
    .string()
    .min(2, { message: "Patient Name must be at least 2 characters." }),
  dentistPractice: z
    .string()
    .min(2, { message: "Dentist Pratice must be at least 2 characters." }),
  dentistEmail: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  dentistPhone: z.string().min(11, {
    message: "Dentist Phone Number must be at least 11 characters.",
  }),
  additionalNotes: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  consentGiven: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
  files: z
    .any()
    .optional()
    .refine((files) => !files || (Array.isArray(files) && files.length <= 5), {
      message: "You can upload a maximum of 5 files.",
    }),
});

const ReferralsForm = () => {
  const [previewFiles, setPreviewFiles] = useState<File[]>([]);
  // const queryClient = useQueryClient();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientName: "",
      patientDOB: new Date(),
      patientEmail: "",
      patientPhone: "",
      dentistName: "",
      dentistPractice: "",
      dentistEmail: "",
      dentistPhone: "",
      additionalNotes: "",
      consentGiven: false,
      files: undefined,
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    if (previewFiles.length + selectedFiles.length > 5) {
      toast.error("You can upload a maximum of 5 files.");
      return;
    }
    setPreviewFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setPreviewFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const { mutate, isPending } = useMutation({
    mutationKey: ["referrals"],
    mutationFn: async (formData: FormData) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/referrals`, {
        method: "POST",
        body: formData,
      });
      return res.json();
    },
    onSuccess: (data) => {
      // queryClient.invalidateQueries({ queryKey: ["all-bookings"] });
      if (!data?.status) {
        toast.error(data?.message || "Something went wrong");
        return;
      }
      toast.success(data?.message || "Referrals sent successfully");
      form.reset();
      setPreviewFiles([]);
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const formData = new FormData();
    const localDate = new Date(values.patientDOB);
    const formattedDate = `${localDate.getFullYear()}-${String(
      localDate.getMonth() + 1
    ).padStart(2, "0")}-${String(localDate.getDate()).padStart(2, "0")}`;
    // Patient info
    formData.append("patientName", values.patientName);
    formData.append("patientDOB", formattedDate);
    formData.append("patientPhone", values.patientPhone);
    formData.append("patientEmail", values.patientEmail);

    // Dentist info
    formData.append("dentistName", values.dentistName);
    formData.append("dentistPractice", values.dentistPractice);
    formData.append("dentistPhone", values.dentistPhone);
    formData.append("dentistEmail", values.dentistEmail);

    // Notes and consent
    formData.append("additionalNotes", values.additionalNotes);
    formData.append("consentGiven", String(values.consentGiven));

    // Files
    previewFiles.forEach((file) => formData.append("files", file));

    mutate(formData);
  }
  return (
    <div className="pb-10 md:pb-16 lg:pb-24 pt-24 lg:pt-28">
      <div className="container bg-white rounded-[8px] p-4 md:p-6 lg:p-8 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-semibold text-black leading-[150%]">
          Referral Form
        </h2>
        <h5 className="text-sm md:text-base font-semibold text-[#111827] leading-[120%] pt-4 md:pt-5 lg:pt-6 pb-2 border-b-[2px] border-[#82B7B4]">
          Patient Details
        </h5>
        <div className="pt-5 md:pt-6 lg:pt-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <FormField
                  control={form.control}
                  name="patientName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F] leading-[120%]">
                        Name <sup className="text-red-500 text-base">*</sup>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[48px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-gray-300 placeholder:font-medium text-base leading-[120%] font-semibold"
                          placeholder="Name Here"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                {/* Date */}
                <FormField
                  control={form.control}
                  name="patientDOB"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold text-black leading-[120%]">
                        Date <sup className="text-red-500 text-base">*</sup>
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
                                : "mm/dd/yyyy"}
                              <CalendarIcon className="ml-auto h-4 w-4" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <FormField
                  control={form.control}
                  name="patientPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F] leading-[120%]">
                        Phone Number{" "}
                        <sup className="text-red-500 text-base">*</sup>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[48px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-gray-300 placeholder:font-medium text-base leading-[120%] font-semibold"
                          placeholder="Phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="patientEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F] leading-[120%]">
                        Email <sup className="text-red-500 text-base">*</sup>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[48px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-gray-300 placeholder:font-medium text-base leading-[120%] font-semibold"
                          placeholder="email@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
              <h5 className="text-sm md:text-base font-semibold text-[#111827] leading-[120%] pt-4 md:pt-5 lg:pt-6 pb-2 border-b-[2px] border-[#82B7B4]">
                Dentist Details
              </h5>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <FormField
                  control={form.control}
                  name="dentistName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F] leading-[120%]">
                        Name <sup className="text-red-500 text-base">*</sup>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[48px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-gray-300 placeholder:font-medium text-base leading-[120%] font-semibold"
                          placeholder="Dentist full name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dentistPractice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F] leading-[120%]">
                        Practice <sup className="text-red-500 text-base">*</sup>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[48px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-gray-300 placeholder:font-medium text-base leading-[120%] font-semibold"
                          placeholder="Practice name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <FormField
                  control={form.control}
                  name="dentistPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F] leading-[120%]">
                        Phone Number{" "}
                        <sup className="text-red-500 text-base">*</sup>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[48px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-gray-300 placeholder:font-medium text-base leading-[120%] font-semibold"
                          placeholder="Phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dentistEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F] leading-[120%]">
                        Email <sup className="text-red-500 text-base">*</sup>
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-[48px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-gray-300 placeholder:font-medium text-base leading-[120%] font-semibold"
                          placeholder="email@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              <h5 className="text-sm md:text-base font-semibold text-[#111827] leading-[120%] pt-4 md:pt-5 lg:pt-6 pb-2 border-b-[2px] border-[#82B7B4]">
                Further Information
              </h5>

              <FormField
                control={form.control}
                name="additionalNotes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F] leading-[120%]">
                      Additional Notes
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-[114px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-gray-300 placeholder:font-medium text-base leading-[120%] font-semibold"
                        placeholder="Please provide any additional information about the referral..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              {/* images  */}
              <FormField
                control={form.control}
                name="files"
                render={() => (
                  <FormItem>
                    <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F] leading-[120%]">
                      Upload Files or Images
                    </FormLabel>

                    <FormControl>
                      <div
                        className="border border-dashed border-[#C0C3C1] rounded-lg p-6 text-center bg-[#F9FAFB] hover:bg-[#F3F4F6] transition-colors"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                          e.preventDefault();
                          const droppedFiles = Array.from(e.dataTransfer.files);
                          if (previewFiles.length + droppedFiles.length > 5) {
                            toast.error("You can upload a maximum of 5 files.");
                            return;
                          }
                          setPreviewFiles((prev) => [...prev, ...droppedFiles]);
                        }}
                      >
                        <label
                          htmlFor="file-upload"
                          className="cursor-pointer flex flex-col items-center justify-center space-y-2"
                        >
                          <Upload className="w-8 h-8 text-[#82B7B4]" />
                          <span className="text-sm text-[#6B7280] font-medium">
                            Click to upload or drag and drop
                          </span>
                          <span className="text-xs text-[#9CA3AF]">
                            PNG, JPG, PDF, DOC up to 10MB (max 5 files)
                          </span>
                          <input
                            id="file-upload"
                            type="file"
                            accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
                            multiple
                            className="hidden"
                            onChange={handleFileChange}
                          />
                        </label>

                        {previewFiles.length > 0 && (
                          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                            {previewFiles.map((file, index) => (
                              <div
                                key={index}
                                className="relative border border-[#E5E7EB] rounded-lg p-2 bg-white shadow-sm"
                              >
                                {file.type.startsWith("image/") ? (
                                  <Image
                                    width={1000}
                                    height={1000}
                                    src={URL.createObjectURL(file)}
                                    alt={file.name}
                                    className="h-24 w-full object-cover rounded-md"
                                  />
                                ) : (
                                  <div className="h-24 flex items-center justify-center text-sm text-gray-600">
                                    {file.name}
                                  </div>
                                )}
                                <button
                                  type="button"
                                  onClick={() => removeFile(index)}
                                  className="absolute top-1 right-1 bg-white rounded-full shadow p-1 hover:bg-gray-100"
                                >
                                  <X className="w-4 h-4 text-gray-600" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </FormControl>

                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="consentGiven"
                render={({ field }) => (
                  <FormItem className="flex items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="consentGiven"
                        className="mt-1"
                      />
                    </FormControl>
                    <div className="space-y-0 leading-none">
                      <Label
                        htmlFor="consentGiven"
                        className="text-xs md:text-sm text-[#8E938F] font-normal leading-[150%]"
                      >
                        I consent to being contacted about this referral request and have read the 
                        <span className="text-primary"> privacy policy</span>
                      </Label>
                      <FormMessage className="text-red-500 pt-2" />
                    </div>
                  </FormItem>
                )}
              />

              <div className="pt-4">
                <Button
                  disabled={isPending}
                  className="w-full h-[60px] rounded-[8px] bg-primary text-[#F8F9FA] text-base font-medium leading-[120%]"
                  type="submit"
                >
                  {isPending ? "Sending..." : "Submit Referral"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ReferralsForm;
