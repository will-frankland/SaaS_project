"use client"

import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})


const TransformationForm = () => {
  return (
    <div>
      Yes
    </div>
  )
}

export default TransformationForm
