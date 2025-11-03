"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  model: z.string({
    message: "Model is required",
  }),
  prompt: z.string({
    message: "Prompt is required",
  }),
  guidance: z.number({
    message: "Guidance scale is required",
  }),
  num_outputs: z
    .number()
    .min(1, { message: "Number of outputs should be atleast 1." })
    .max(1, { message: "Number of outputs must be less then 4." }),
  aspect_ratio: z.string({
    message: "Aspect ration is required",
  }),
  output_format: z.string({
    message: "Out format is required",
  }),
  output_quality: z
    .number()
    .min(1, { message: "output quality should be atleast 1." })
    .max(1, { message: "Output quality must be less then 100." }),
  num_interfrence_steps: z
    .number()
    .min(1, { message: "Number of inference step should be atleast 1." })
    .max(50, { message: "Number of inference step must be or equal to 50." }),
});

const Configurations = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: "black-forest-labs/flux-1.1-pro",
      prompt: "",
      guidance: "3.5",
      num_outputs: "1",
      output_format: "jpg",
      aspect_ratio: "1:1",
      output_quality: 80,
      num_interfrence_steps: 28,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Model</FormLabel>
              <Select>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Select a Model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">
                      Eastern Standard Time (EST)
                    </SelectItem>
                    <SelectItem value="cst">
                      Central Standard Time (CST)
                    </SelectItem>
                    <SelectItem value="mst">
                      Mountain Standard Time (MST)
                    </SelectItem>
                    <SelectItem value="pst">
                      Pacific Standard Time (PST)
                    </SelectItem>
                    <SelectItem value="akst">
                      Alaska Standard Time (AKST)
                    </SelectItem>
                    <SelectItem value="hst">
                      Hawaii Standard Time (HST)
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default Configurations;
