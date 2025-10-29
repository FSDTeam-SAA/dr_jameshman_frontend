"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(2, {
      message: "Email must be at least 2 characters.",
    })
    .email(),
  phone: z.string().min(2, {
    message: "Phone Number must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
  terms: z.boolean().default(false).optional(),
});

const GetInTouch = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      terms: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="pt-10 md:pt-16 lg:pt-24">
      <div className="container">
        <div className=" bg-white rounded-[20px] grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full md:col-span-1 p-4 md:p-6 lg:p-8">
            <h3 className="text-2xl md:text-[28px] lg:text-[32px] text-[#2F2F2F] leading-[120%] font-semibold">
              Get in Touch
            </h3>
            <p className="text-base md:text-lg font-normal text-[#505050] leading-[120%]">
              Our friendly team would love to hear from you.
            </p>

            <div className="pt-4 md:pt-5 lg:pt-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F] leading-[120%]">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-[48px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-[#666666] text-base leading-[120%] font-semibold"
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F] leading-[120%]">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-[48px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-[#666666] text-base leading-[120%] font-semibold"
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
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F] leading-[120%]">
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-[48px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-[#666666] text-base leading-[120%] font-semibold"
                            placeholder="+1234567890"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base md:text-lg font-medium text-[#2F2F2F] leading-[120%]">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            className="h-[200px] border border-[#C0C3C1] rounded-[4px] text-black placeholder:text-[#666666] text-base leading-[120%] font-semibold"
                            placeholder="Write your message Here"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            id="terms"
                            className="mt-1"
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <Label
                            htmlFor="terms"
                            className="text-xs md:text-sm text-[#8E938F] font-normal leading-[150%]"
                          >
                            I consent to having this website store my submitted
                            information so they can respond to my inquiry. See
                            our <span className="text-primary">privacy policy </span>
                             to learn more about how we use data.
                          </Label>
                          <FormMessage className="text-red-500" />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button
                    className="w-full h-[48px] rounded-[8px] bg-primary text-[#F8F9FA] text-base font-medium leading-[120%]"
                    type="submit"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          <div className="md:col-span-1">
            <Image
              src="/assets/images/get-in-touch.png"
              alt="get in touch"
              width={1000}
              height={1000}
              className="w-full h-[400px] md:h-[500px] lg:h-[825px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
