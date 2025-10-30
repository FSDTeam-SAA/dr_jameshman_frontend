'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addFaqSchema } from "@/schema/addFaqSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { RichTextEditor } from "../../../_component/shared/rich-text-editor";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

type formType = z.input<typeof addFaqSchema>;

const AddEditFaq = () => {
  const form = useForm<formType>({
    resolver: zodResolver(addFaqSchema),
    defaultValues: {
      question: "",
      answer: "",
    },
  });

  const onSubmit = (value: formType) => {
    console.log("value: ", value);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* priceName field */}
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel>FAQ Question</FormLabel>

                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    placeholder="Enter price name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="answer"
            render={({ field }) => (
              <FormItem>
                <FormLabel>FAQ Answer</FormLabel>
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

          <Button type="submit" className="w-full h-[50px] mt-5">
            <Save /> Save
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddEditFaq;
