"use client"
import React from 'react'
import {z} from "zod"

// prompt: "black forest gateau cake spelling out the words \"FLUX 1 . 1 Pro\", tasty, food photography",
// aspect_ratio: "1:1",
// output_format: "webp",
// output_quality: 80,
// safety_tolerance: 2,
// prompt_upsampling: true


const formSchema = z.object({
   model : z.string({
    required_error: "Model is required"
   }),
   prompt: z.string({
    required_error: "Prompt is required"
   }),
   guidance: z.number({
    required_error: "Guidance scale is required"
   }),
   num_outputs: z.number().min(1, {message: "Number of outputs should be atleast 1."}).max(1, {message: "Number of outputs must be less then 4."}),
   aspect_ratio : z.string({
    required_error: "Aspect ration is required"
   }),
   output_format: z.string({
    required_error: "Out format is required"
   }),
   output_quality: z.number().min(1, {message: "output quality should be atleast 1."}).max(1, {message: "Output quality must be less then 100."}),
   num_interfrence_steps : z.number().min(1, {message: "Number of inference step should be atleast 1."}).max(50, {message: "Number of inference step must be less then 4."}),
})

const Configurations = () => {
  return (
    <div>Configurations</div>
  )
}

export default Configurations