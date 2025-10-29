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
    username : z.string().min(2).max(50)
})

const Configurations = () => {
  return (
    <div>Configurations</div>
  )
}

export default Configurations